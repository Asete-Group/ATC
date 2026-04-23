import { MessageCircle } from "lucide-react"

const WHATSAPP_URL = "https://wa.me/5547997270458"

type WhatsAppFabProps = {
  ariaLabel: string
}

export function WhatsAppFab({ ariaLabel }: WhatsAppFabProps) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className="fixed right-5 bottom-5 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_rgba(8,24,48,0.28)] transition-transform duration-200 hover:scale-105 hover:bg-[#22c55e] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/30 sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="size-7" strokeWidth={2.2} />
      <span className="sr-only">{ariaLabel}</span>
    </a>
  )
}
