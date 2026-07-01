export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function siteUrl(path = "") {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://encryvialabs.online";
  return new URL(path, base).toString();
}
