/**
 * Structured Logger for LATENT Digital Studio
 * Provides structured JSON logs with correlation IDs, level gating,
 * and automatic redaction of sensitive credentials.
 */

export type LogLevel = "DEBUG" | "INFO" | "WARN" | "ERROR";

const LOG_LEVELS: Record<LogLevel, number> = {
  DEBUG: 10,
  INFO: 20,
  WARN: 30,
  ERROR: 40,
};

const REDACTED_KEYS = new Set([
  "password",
  "token",
  "secret",
  "authorization",
  "cookie",
  "apiKey",
  "api_key",
  "privateKey",
]);

function redact(obj: unknown, depth = 0): unknown {
  if (depth > 5 || obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => redact(item, depth + 1));
  }

  const sanitized: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj as Record<string, unknown>)) {
    if (REDACTED_KEYS.has(key.toLowerCase())) {
      sanitized[key] = "[REDACTED]";
    } else if (typeof value === "object" && value !== null) {
      sanitized[key] = redact(value, depth + 1);
    } else {
      sanitized[key] = value;
    }
  }
  return sanitized;
}

export function generateCorrelationId(): string {
  return `req_${Date.now().toString(36)}_${Math.random().toString(36).substring(2, 9)}`;
}

class Logger {
  private minLevel: number;

  constructor() {
    const envLevel = (process.env.LOG_LEVEL || "INFO").toUpperCase() as LogLevel;
    this.minLevel = LOG_LEVELS[envLevel] ?? LOG_LEVELS.INFO;
  }

  private log(level: LogLevel, message: string, context?: Record<string, unknown>) {
    if (LOG_LEVELS[level] < this.minLevel) return;

    const entry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      ...(context ? { context: redact(context) } : {}),
      env: process.env.NODE_ENV || "development",
    };

    const output = JSON.stringify(entry);

    switch (level) {
      case "ERROR":
        console.error(output);
        break;
      case "WARN":
        console.warn(output);
        break;
      case "DEBUG":
        console.debug(output);
        break;
      default:
        console.log(output);
    }
  }

  debug(message: string, context?: Record<string, unknown>) {
    this.log("DEBUG", message, context);
  }

  info(message: string, context?: Record<string, unknown>) {
    this.log("INFO", message, context);
  }

  warn(message: string, context?: Record<string, unknown>) {
    this.log("WARN", message, context);
  }

  error(message: string, context?: Record<string, unknown>) {
    this.log("ERROR", message, context);
  }
}

export const logger = new Logger();
