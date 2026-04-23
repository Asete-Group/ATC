export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/5547997270458?text=${encodeURIComponent(message)}`
}
