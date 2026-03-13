import defaultCoverUrl from "@/assets/default-cover.svg";

const DEFAULT_COVER = defaultCoverUrl as string;

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
 * - Bare filenames或相对路径统一回退到默认封面。
 */
export function resolveImageSrc(input?: string | null) {
  const value = (input ?? "").trim();
  if (!value) return DEFAULT_COVER;
  if (isLikelyAbsoluteUrl(value)) return value;
  return DEFAULT_COVER;
}
