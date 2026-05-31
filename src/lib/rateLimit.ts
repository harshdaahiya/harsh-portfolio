interface RateLimitEntry {
  timestamps: number[];
}

// Keep cache global or in module scope
const cache = new Map<string, RateLimitEntry>();

// Prevent multiple intervals in hot-reloading development environments
const globalAny = globalThis as typeof globalThis & {
  __rateLimitCleanupInterval?: NodeJS.Timeout | number;
};
if (!globalAny.__rateLimitCleanupInterval) {
  globalAny.__rateLimitCleanupInterval = setInterval(
    () => {
      const now = Date.now();
      const oneDayAgo = now - 24 * 60 * 60 * 1000;
      for (const [key, entry] of cache.entries()) {
        const activeTimestamps = entry.timestamps.filter((t) => t > oneDayAgo);
        if (activeTimestamps.length === 0) {
          cache.delete(key);
        } else {
          entry.timestamps = activeTimestamps;
        }
      }
    },
    60 * 60 * 1000,
  ); // Run cleanup every hour
}

/**
 * Checks if a key has exceeded the allowed number of requests in the given window.
 * Uses a sliding-window algorithm.
 *
 * @param key Unique identifier (e.g. IP address or email)
 * @param limit Maximum allowed requests (default 3)
 * @param windowMs Time window in milliseconds (default 24 hours)
 */
export async function checkRateLimit(
  key: string,
  limit: number = 3,
  windowMs: number = 24 * 60 * 60 * 1000,
): Promise<{ limited: boolean; remaining: number; resetTime: number }> {
  const now = Date.now();
  const cutoff = now - windowMs;

  let entry = cache.get(key);
  if (!entry) {
    entry = { timestamps: [] };
    cache.set(key, entry);
  }

  // Filter timestamps within the sliding window
  entry.timestamps = entry.timestamps.filter((t) => t > cutoff);

  if (entry.timestamps.length >= limit) {
    const oldestTimestamp = entry.timestamps[0];
    const resetTime = oldestTimestamp + windowMs;
    return {
      limited: true,
      remaining: 0,
      resetTime,
    };
  }

  entry.timestamps.push(now);
  const remaining = limit - entry.timestamps.length;
  const resetTime = now + windowMs;

  return {
    limited: false,
    remaining,
    resetTime,
  };
}
