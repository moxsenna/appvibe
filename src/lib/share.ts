export type ShareNetwork =
  | "whatsapp"
  | "x"
  | "facebook"
  | "linkedin"
  | "threads";

export function buildShareUrl(
  network: ShareNetwork,
  url: string,
  title: string,
  text?: string,
): string {
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const message = text ?? title;

  switch (network) {
    case "whatsapp":
      return `https://wa.me/?text=${encodeURIComponent(`${message} ${url}`)}`;
    case "x":
      return `https://twitter.com/intent/tweet?url=${u}&text=${t}`;
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${u}`;
    case "linkedin":
      return `https://www.linkedin.com/sharing/share-offsite/?url=${u}`;
    case "threads":
      return `https://www.threads.net/intent/post?text=${encodeURIComponent(`${message} ${url}`)}`;
    default:
      return url;
  }
}

export async function copyPageUrl(url: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(url);
    return true;
  } catch {
    return false;
  }
}