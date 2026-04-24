export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/5547996135427?text=${encodeURIComponent(message)}`;
}
