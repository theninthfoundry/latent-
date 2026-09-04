/**
 * Validation schemas and parsing utilities for incoming studio inquiries.
 */

import { sanitizeString } from "./security";

// RFC 5322 compliant simplified email regex
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export interface InquiryInput {
  name: string;
  email: string;
  scope?: string;
  budget?: string;
  message: string;
  /** Hidden honeypot field. Must be empty for legitimate users */
  website_url_hp?: string;
}

export interface ValidatedInquiry {
  name: string;
  email: string;
  scope: string;
  budget: string;
  message: string;
}

export type ValidationResult =
  | { success: true; data: ValidatedInquiry }
  | { success: false; errors: Record<string, string> };

export function validateInquiryPayload(body: unknown): ValidationResult {
  if (!body || typeof body !== "object") {
    return {
      success: false,
      errors: { _payload: "Request body must be a valid JSON object" },
    };
  }

  const data = body as Record<string, unknown>;
  const errors: Record<string, string> = {};

  // Honeypot bot trap
  if (data.website_url_hp && String(data.website_url_hp).trim().length > 0) {
    // Silently reject spam bots with generic rejection
    errors._bot = "Automated submission rejected";
    return { success: false, errors };
  }

  // Name validation
  const rawName = typeof data.name === "string" ? data.name.trim() : "";
  if (!rawName) {
    errors.name = "Name is required";
  } else if (rawName.length < 2) {
    errors.name = "Name must be at least 2 characters";
  } else if (rawName.length > 100) {
    errors.name = "Name must not exceed 100 characters";
  }

  // Email validation
  const rawEmail = typeof data.email === "string" ? data.email.trim().toLowerCase() : "";
  if (!rawEmail) {
    errors.email = "Email address is required";
  } else if (rawEmail.length > 254) {
    errors.email = "Email must not exceed 254 characters";
  } else if (!EMAIL_REGEX.test(rawEmail)) {
    errors.email = "Please provide a valid email address";
  }

  // Message validation
  const rawMessage = typeof data.message === "string" ? data.message.trim() : "";
  if (!rawMessage) {
    errors.message = "Message or project description is required";
  } else if (rawMessage.length < 10) {
    errors.message = "Message must be at least 10 characters";
  } else if (rawMessage.length > 5000) {
    errors.message = "Message must not exceed 5000 characters";
  }

  // Optional scope
  const rawScope = typeof data.scope === "string" ? data.scope.trim() : "General Inquiry";
  if (rawScope.length > 120) {
    errors.scope = "Scope must not exceed 120 characters";
  }

  // Optional budget
  const rawBudget = typeof data.budget === "string" ? data.budget.trim() : "Undisclosed";
  if (rawBudget.length > 80) {
    errors.budget = "Budget must not exceed 80 characters";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  return {
    success: true,
    data: {
      name: sanitizeString(rawName),
      email: rawEmail,
      scope: sanitizeString(rawScope),
      budget: sanitizeString(rawBudget),
      message: sanitizeString(rawMessage),
    },
  };
}
