"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const nav = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#autoridade", label: "Resultados" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="ATC China Brasil">
          <Image
            src="/atc-icon-black.svg"
            alt="ATC China Brasil"
            width={1205}
            height={375}
            priority
            className="h-6 w-auto"
          />
          <span className="hidden pl-5 sm:inline text-xs uppercase tracking-[0.2em] text-muted-foreground">
            China Brasil
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Menu principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Button asChild size="sm" className="rounded-full px-5">
            <a href="#contato">Falar com especialista</a>
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-300 border-t border-border/40",
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-4">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <Button asChild size="sm" className="rounded-full w-full">
            <a href="#contato" onClick={() => setOpen(false)}>
              Falar com especialista
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
