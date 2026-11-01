"use client"

import { usePathname } from "next/navigation"
import { dictionary } from "@/lib/i18n"
import { splitPath } from "@/lib/routes"
import { person, withBase } from "@/lib/site"

export function SideLeft() {
  const { lang } = splitPath(usePathname())
  const copy = dictionary[lang]

  return (
    <aside className="side-rail" aria-label="Mira">
      <div className="side-stick">
        <a href={person.mira} target="_blank" rel="noopener noreferrer" className="block">
          <img
            src={withBase("/mira.jpg")}
            alt="Mira, smiling, red hair in a ponytail, black jacket, pointing."
            width={1008}
            height={1792}
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
