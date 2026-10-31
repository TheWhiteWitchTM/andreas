"use client"

import { usePathname } from "next/navigation"
import { dictionary } from "@/lib/i18n"
import { splitPath } from "@/lib/routes"
import { person, withBase } from "@/lib/site"

export function SideLeft() {
  const { lang } = splitPath(usePathname())
  const copy = dictionary[lang]

  return (
    <aside className="hidden w-[140px] shrink-0 lg:block">
      <div className="sticky top-24">
        <a href={person.mira} target="_blank" rel="noopener noreferrer" className="block">
          <img
            src={withBase("/mira.jpg")}
            alt="Mira, smiling, red hair in a ponytail, black jacket, pointing."
            width={1008}
            height={1792}
            className="w-full rounded-lg object-cover object-top shadow-[0_4px_16px_rgba(0,0,0,0.45)]"
          />
        </a>
        <a href={person.mira} target="_blank" rel="noopener noreferrer" className="frame mt-3 block p-3">
          <p className="kicker">{copy.sideMiraKicker}</p>
          <p className="mt-2 text-sm font-medium text-white">{person.miraName}</p>
          <p className="mt-2 text-xs leading-5 text-muted">{copy.sideMiraText}</p>
        </a>
      </div>
    </aside>
  )
}
