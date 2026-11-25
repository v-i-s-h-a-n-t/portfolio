export function getSiteUrl(): URL | undefined {
  const value = process.env.NEXT_PUBLIC_SITE_URL;
  if (!value) return undefined;

  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || url.hostname === "localhost")
      return undefined;
    return new URL(url.origin);
  } catch {
    return undefined;
  }
}

export function canonicalPath(path: string) {
  return getSiteUrl() ? { canonical: path } : undefined;
}
