"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Separator } from "@/components/ui/separator"
import { dictionary } from "@/lib/i18n"
import { localize, splitPath } from "@/lib/routes"
import { person } from "@/lib/site"

export function Footer() {
  const { lang } = splitPath(usePathname())
  const copy = dictionary[lang]

  return (
    <footer className="mt-auto border-t border-line bg-ink">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-3 px-4 py-4">
        <nav className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-muted" aria-label={copy.footer.label}>
          <Link href={localize(lang, "imprint")} className="hover:text-accent">
            {copy.footer.imprint}
          </Link>
          <span aria-hidden="true">·</span>
          <Link href={localize(lang, "privacy")} className="hover:text-accent">
            {copy.footer.privacy}
          </Link>
          <span aria-hidden="true">·</span>
          <a href={person.mira} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            {person.miraName}
          </a>
          {person.email ? (
            <>
              <span aria-hidden="true">·</span>
              <a href={`mailto:${person.email}`} className="hover:text-accent">
                {person.email}
              </a>
            </>
          ) : null}
        </nav>
        <Separator className="max-w-xs bg-accent/30" />
        <p className="text-center text-xs text-muted">Andreas · Mainz</p>
      </div>
    </footer>
  )
}
