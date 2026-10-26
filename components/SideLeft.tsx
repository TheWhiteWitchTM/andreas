"use client"

import { usePathname } from "next/navigation"
import { dictionary } from "@/lib/i18n"
import { splitPath } from "@/lib/routes"
import { person } from "@/lib/site"

export function SideLeft() {
  const { lang } = splitPath(usePathname())
  const copy = dictionary[lang]

  return (
    <aside className="hidden w-[140px] shrink-0 lg:block">
      <div className="sticky top-24">
        <a href={person.mira} target="_blank" rel="noopener noreferrer" className="frame block p-3">
          <p className="kicker">{copy.sideMiraKicker}</p>
          <p className="mt-2 text-sm font-medium text-white">{person.miraName}</p>
          <p className="mt-2 text-xs leading-5 text-muted">{copy.sideMiraText}</p>
        </a>
      </div>
    </aside>
  )
}
