"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { dictionary } from "@/lib/i18n"
import { localize, splitPath } from "@/lib/routes"
import { person, portrait, withBase } from "@/lib/site"

export function SideRight() {
  const { lang } = splitPath(usePathname())
  const copy = dictionary[lang]

  return (
    <aside className="hidden w-[140px] shrink-0 lg:block">
      <div className="sticky top-24">
        <img
          src={withBase(portrait.src)}
          alt={copy.portraitAlt}
          width={portrait.width}
          height={portrait.height}
          className="aspect-[3/4] w-full rounded-lg object-cover object-top shadow-[0_4px_16px_rgba(0,0,0,0.45)]"
        />
        <p className="mt-3 text-sm font-medium text-accent">Andreas</p>
        <p className="mt-1 text-xs leading-5 text-muted">{copy.sideRole}</p>
        <p className="mt-1 text-xs leading-5 text-muted">{copy.sidePlace}</p>
        <ul className="mt-3 flex flex-col gap-2 text-sm">
          <li>
            <Link href={localize(lang, "contact")} className="text-paper hover:text-accent">
              {copy.nav.contact}
            </Link>
          </li>
          {person.email ? (
            <li>
              <a href={`mailto:${person.email}`} className="text-paper hover:text-accent">
                {copy.contact.mail}
              </a>
            </li>
          ) : null}
        </ul>
      </div>
    </aside>
  )
}
