"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LangToggle } from "./LangToggle"
import { Nav } from "./Nav"
import { localize, splitPath } from "@/lib/routes"

export function Header() {
  const pathname = usePathname()
  const { lang } = splitPath(pathname)

  return (
    <header className="sticky top-0 z-40 border-b border-accent bg-ink/95 backdrop-blur">
      <div className="relative mx-auto flex max-w-[1400px] items-center gap-3 px-3 py-2 sm:px-5">
        <Link href={localize(lang, "home")} className="shrink-0 font-semibold tracking-tight text-accent">
          Andreas
        </Link>
        <Nav />
        <div className="ml-auto">
          <LangToggle />
        </div>
      </div>
    </header>
  )
}
