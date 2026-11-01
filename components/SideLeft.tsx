"use client"

import { usePathname } from "next/navigation"
import { dictionary } from "@/lib/i18n"
import { splitPath } from "@/lib/routes"
import { portrait, withBase } from "@/lib/site"

export function SideLeft() {
  const { lang } = splitPath(usePathname())
  const copy = dictionary[lang]

  return (
    <aside className="side-rail" aria-label="Andreas">
      <div className="side-stick">
        <img
          src={withBase(portrait.src)}
          alt={copy.portraitAlt}
          width={portrait.width}
          height={portrait.height}
        />
      </div>
    </aside>
  )
}
