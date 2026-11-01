"use client"

import { usePathname } from "next/navigation"
import { buildRailCards } from "@/lib/build-rails"
import { splitPath } from "@/lib/routes"
import { TopicRail } from "./TopicRail"

export function SideRight() {
  const { lang } = splitPath(usePathname())
  return <TopicRail cards={buildRailCards(lang)} />
}
