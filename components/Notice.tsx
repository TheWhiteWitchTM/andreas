"use client"

import { usePathname } from "next/navigation"
import { dictionary } from "@/lib/i18n"
import { splitPath } from "@/lib/routes"

export function Notice() {
  const { lang } = splitPath(usePathname())
  const copy = dictionary[lang]

  return (
    <aside className="border-b border-accent/35 bg-[#100c16] px-4 py-2 text-center text-sm text-accent-2">
      <p>
        <span className="font-medium">{copy.notice}</span>
        <span className="text-muted"> {copy.noticeTail}</span>
      </p>
    </aside>
  )
}
