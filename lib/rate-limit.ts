interface RateLimitStore {
  [key: string]: { count: number; resetTime: number };
}

const store: RateLimitStore = {};

/**
 * Sliding window rate-limiter for API routes.
 * @param ip Client IP address or identifier
 * @param limit Max requests per window
 * @param windowMs Window duration in milliseconds (default 60 seconds)
 */
export function checkRateLimit(ip: string, limit: number = 5, windowMs: number = 60000): { success: boolean; remaining: number } {
  const now = Date.now();
  const record = store[ip];

  if (!record || now > record.resetTime) {
    store[ip] = {
      count: 1,
      resetTime: now + windowMs,
    };
    return { success: true, remaining: limit - 1 };
  }

  if (record.count >= limit) {
    return { success: false, remaining: 0 };
  }

  record.count += 1;
  return { success: true, remaining: limit - record.count };
}
