const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prepends NEXT_PUBLIC_BASE_PATH to raw asset and document relative paths.
 * E.g., withBasePath("/docs/file.pdf") -> "/<repo>/docs/file.pdf" (in production export)
 */
export function withBasePath(path: string): string {
  if (!path) return basePath || "/";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("mailto:")) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
