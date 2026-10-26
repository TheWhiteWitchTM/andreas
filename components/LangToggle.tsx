"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { buttonVariants } from "@/components/ui/button"
import { dictionary } from "@/lib/i18n"
import { keyFromPath, localize, splitPath, type Locale } from "@/lib/routes"
import { cn } from "@/lib/utils"

const codes: Locale[] = ["de", "en"]

export function LangToggle() {
  const pathname = usePathname()
  const { lang } = splitPath(pathname)
  const key = keyFromPath(pathname)
  const copy = dictionary[lang]

  return (
    <div className="flex items-center gap-1" role="group" aria-label={copy.langLabel}>
      {codes.map((code) => {
        const active = code === lang
        const className = cn(buttonVariants({ variant: active ? "default" : "outline", size: "sm" }), "h-8 px-2.5")
        if (active) {
          return (
            <span key={code} className={className} aria-current="true" lang={code}>
              {code.toUpperCase()}
            </span>
          )
        }
        return (
          <Link key={code} href={localize(code, key)} hrefLang={code} lang={code} className={className}>
            {code.toUpperCase()}
          </Link>
        )
      })}
    </div>
  )
}
