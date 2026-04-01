import defaultCoverUrl from "@/assets/default-cover.svg";

const DEFAULT_COVER = defaultCoverUrl as string;

/** public/images/covers/ 目录的 base path */
const COVERS_BASE = "/images/covers/";

function isLikelyAbsoluteUrl(value: string) {
  return (
    value.startsWith("http://") ||
    value.startsWith("https://") ||
    value.startsWith("data:")
  );
}

/**
 * Resolve an image reference into a browser-loadable URL.
 * - Absolute URLs (http/https/data) are used as-is.
 * - Already rooted paths (starting with /) are used as-is.
 * - Bare filenames (e.g. "spring-walk.jpg") are resolved under COVERS_BASE.
 * - Empty / null falls back to the default cover.
 */
export function resolveImageSrc(input?: string | null) {
  const value = (input ?? "").trim();
  if (!value) return DEFAULT_COVER;
  if (isLikelyAbsoluteUrl(value)) return value;
  if (value.startsWith("/")) return value;
  // 裸文件名 → public/images/covers/ 目录
  return `${COVERS_BASE}${value}`;
}
