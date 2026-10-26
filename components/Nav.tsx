"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { dictionary } from "@/lib/i18n"
import { localize, splitPath } from "@/lib/routes"
import { cn } from "@/lib/utils"

const items = ["home", "services", "about", "contact"] as const

export function Nav() {
  const pathname = usePathname()
  const { lang } = splitPath(pathname)
  const copy = dictionary[lang]
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <div className="flex min-w-0 flex-1 items-center gap-2">
      <button
        type="button"
        className="inline-flex size-9 items-center justify-center rounded-md hover:bg-accent/10 md:hidden"
        aria-label={open ? copy.closeMenu : copy.openMenu}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      <nav className="hidden min-w-0 flex-1 flex-wrap items-center gap-0.5 md:flex" aria-label={copy.navLabel}>
        {items.map((key) => {
          const href = localize(lang, key)
          const active = pathname === href
          return (
            <Link
              key={key}
              href={href}
              className={cn(
                "rounded-md px-2.5 py-1.5 text-sm font-medium hover:bg-accent/10 hover:text-accent",
                active && "text-accent",
              )}
              aria-current={active ? "page" : undefined}
            >
              {copy.nav[key]}
            </Link>
          )
        })}
      </nav>

      {open ? (
        <div className="absolute inset-x-0 top-full z-50 border-b border-accent/40 bg-ink md:hidden">
          <nav className="flex flex-col p-2" aria-label={copy.navLabel}>
            {items.map((key) => {
              const href = localize(lang, key)
              const active = pathname === href
              return (
                <Link
                  key={key}
                  href={href}
                  onClick={close}
                  className={cn("rounded-md px-3 py-2.5 text-sm font-medium hover:bg-accent/10", active && "text-accent")}
                  aria-current={active ? "page" : undefined}
                >
                  {copy.nav[key]}
                </Link>
              )
            })}
          </nav>
        </div>
      ) : null}
    </div>
  )
}
