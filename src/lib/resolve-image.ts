const DEFAULT_COVER = "/images/covers/default.svg";

function isLikelyAbsoluteUrl(value: string) {
  return (
    value.startsWith("http://") ||
    value.startsWith("https://") ||
    value.startsWith("data:")
  );
}

/**
 * Resolve an image reference stored in DB into a browser-loadable URL.
 * - Absolute URLs (http/https/data) are used as-is.
 * - Absolute paths (/...) are used as-is (served from `public/`).
 * - Bare filenames (e.g. spring-walk.jpg) fall back to a default cover.
 */
export function resolveImageSrc(input?: string | null) {
  const value = (input ?? "").trim();
  if (!value) return DEFAULT_COVER;
  if (isLikelyAbsoluteUrl(value)) return value;
  if (value.startsWith("/")) return value;
  return DEFAULT_COVER;
}

