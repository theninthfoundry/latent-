import { NextResponse } from "next/server";
import { checkRateLimit, getClientIp, isValidOrigin } from "@/lib/security";
import { validateInquiryPayload } from "@/lib/validation";
import { logger, generateCorrelationId } from "@/lib/logger";

const MAX_PAYLOAD_BYTES = 16 * 1024; // 16 KB

export async function POST(req: Request) {
  const correlationId = generateCorrelationId();
  const clientIp = getClientIp(req);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  // 1. Origin verification
  if (!isValidOrigin(req, siteUrl)) {
    logger.warn("Inquiry rejected due to invalid origin", {
      correlationId,
      clientIp,
      origin: req.headers.get("origin"),
    });
    return NextResponse.json(
      { error: "Forbidden: cross-site requests not permitted" },
      { status: 403, headers: { "X-Correlation-ID": correlationId } }
    );
  }

  // 2. Token-bucket rate limiting
  const rateLimitMax = parseInt(process.env.CONTACT_RATE_LIMIT_MAX || "5", 10);
  const rateLimitWindow = parseInt(process.env.CONTACT_RATE_LIMIT_WINDOW_SECONDS || "60", 10);
  const limitResult = checkRateLimit(`inquiry:${clientIp}`, rateLimitMax, rateLimitWindow);

  if (!limitResult.allowed) {
    logger.warn("Inquiry rate limit exceeded", {
      correlationId,
      clientIp,
      resetSeconds: limitResult.resetSeconds,
    });
    return NextResponse.json(
      {
        error: "Too many requests. Please wait before submitting another inquiry.",
        retryAfter: limitResult.resetSeconds,
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(limitResult.resetSeconds),
          "X-Correlation-ID": correlationId,
        },
      }
    );
  }

  // 3. Payload size check
  const contentLength = req.headers.get("content-length");
  if (contentLength && parseInt(contentLength, 10) > MAX_PAYLOAD_BYTES) {
    logger.warn("Inquiry payload exceeded size limit", {
      correlationId,
      contentLength,
      max: MAX_PAYLOAD_BYTES,
    });
    return NextResponse.json(
      { error: "Payload exceeds 16KB limit" },
      { status: 413, headers: { "X-Correlation-ID": correlationId } }
    );
  }

  // 4. JSON parsing & validation
  let rawBody: unknown;
  try {
    rawBody = await req.json();
  } catch (err) {
    logger.warn("Malformed JSON in inquiry request", { correlationId, error: String(err) });
    return NextResponse.json(
      { error: "Invalid JSON format" },
      { status: 400, headers: { "X-Correlation-ID": correlationId } }
    );
  }

  const validation = validateInquiryPayload(rawBody);
  if (!validation.success) {
    logger.info("Inquiry validation failed", {
      correlationId,
      errors: validation.errors,
    });
    return NextResponse.json(
      { error: "Validation failed", details: validation.errors },
      { status: 422, headers: { "X-Correlation-ID": correlationId } }
    );
  }

  // 5. Successful audit logging & webhook dispatch
  const { data } = validation;
  logger.info("Studio inquiry received successfully", {
    correlationId,
    clientIp,
    senderEmail: data.email,
    senderName: data.name,
    scope: data.scope,
    budget: data.budget,
  });

  const webhookUrl = process.env.INQUIRY_NOTIFICATION_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "LATENT Digital Studio Inquiry",
          correlationId,
          timestamp: new Date().toISOString(),
          ...data,
        }),
      });
    } catch (webhookErr) {
      logger.error("Failed to forward inquiry to external webhook", {
        correlationId,
        error: String(webhookErr),
      });
    }
  }

  return NextResponse.json(
    {
      success: true,
      message: "Inquiry received. The studio will review and reply within 48 hours.",
      correlationId,
    },
    {
      status: 200,
      headers: {
        "X-Correlation-ID": correlationId,
        "X-RateLimit-Remaining": String(limitResult.remaining),
      },
    }
  );
}

// Disallow GET or other methods
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed. POST to submit inquiries." },
    { status: 405, headers: { Allow: "POST" } }
  );
}
