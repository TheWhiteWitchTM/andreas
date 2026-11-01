"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { dictionary } from "@/lib/i18n"
import { keyFromPath, localize, splitPath } from "@/lib/routes"
import { person, portrait, serviceAnchors, withBase } from "@/lib/site"

type RailMode = "portrait" | "services" | "reach" | "mira" | "contact"

function fallbackFor(pathname: string): RailMode {
  const page = keyFromPath(pathname)
  if (page === "services") return "services"
  if (page === "contact") return "contact"
  return "portrait"
}

export function SideRight() {
  const pathname = usePathname()
  const { lang } = splitPath(pathname)
  const copy = dictionary[lang]
  const fallback = fallbackFor(pathname)
  const [seenPath, setSeenPath] = useState(pathname)
  const [mode, setMode] = useState<RailMode>(fallback)
  if (seenPath !== pathname) {
    setSeenPath(pathname)
    setMode(fallback)
  }

  useEffect(() => {
    const main = document.getElementById("main")
    const nodes = main ? [...main.querySelectorAll<HTMLElement>("[data-rail]")] : []
    if (!nodes.length) return

    const visible = new Map<string, number>()
    const apply = () => {
      if (!visible.size) {
        setMode(fallback)
        return
      }
      const next = [...visible.entries()].sort((a, b) => a[1] - b[1])[0][0]
      if (next === "services" || next === "reach" || next === "mira" || next === "contact" || next === "portrait") {
        setMode(next)
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.getAttribute("data-rail")
          if (!id) continue
          if (entry.isIntersecting) visible.set(id, entry.boundingClientRect.top)
          else visible.delete(id)
        }
        apply()
      },
      { rootMargin: "-12% 0px -55% 0px", threshold: [0, 0.15, 0.4] },
    )

    for (const node of nodes) observer.observe(node)
    return () => observer.disconnect()
  }, [pathname, fallback])

  const label =
    mode === "services" ? copy.nav.services : mode === "reach" ? copy.home.reachTitle : mode === "mira" ? copy.home.miraTitle : mode === "contact" ? copy.nav.contact : "Andreas"

  return (
    <aside className="side-rail" aria-label={label}>
      <div className="side-stick">
        <div key={mode} className="rail-swap">
          {mode === "portrait" || mode === "contact" ? (
            <img
              src={withBase(portrait.src)}
              alt={copy.portraitAlt}
              width={portrait.width}
              height={portrait.height}
            />
          ) : null}

          {mode === "portrait" ? (
            <>
              <p className="mt-3 text-sm font-medium text-accent">Andreas</p>
              <p className="rail-text">{copy.sideRole}</p>
              <p className="rail-text">{copy.sidePlace}</p>
              <ul className="rail-links">
                <li>
                  <Link href={localize(lang, "contact")}>{copy.nav.contact}</Link>
                </li>
                {person.email ? (
                  <li>
                    <a href={`mailto:${person.email}`}>{copy.contact.mail}</a>
                  </li>
                ) : null}
              </ul>
            </>
          ) : null}

          {mode === "contact" ? (
            <>
              <p className="kicker mt-3">{copy.contact.kicker}</p>
              <p className="mt-2 text-sm font-medium leading-5 text-white">{copy.contact.title}</p>
              <ul className="rail-links">
                {copy.contact.facts.map((item) => (
                  <li key={item.title}>
                    <span className="text-white">{item.title}</span>
                    <span className="rail-text mt-0 block">{item.text}</span>
                  </li>
                ))}
                {person.email ? (
                  <li>
                    <a href={`mailto:${person.email}`}>{copy.contact.mail}</a>
                  </li>
                ) : null}
              </ul>
            </>
          ) : null}

          {mode === "services" ? (
            <>
              <p className="kicker">{copy.services.kicker}</p>
              <ul className="rail-links">
                {copy.services.items.map((item, index) => (
                  <li key={item.title}>
                    <Link href={`${localize(lang, "services")}#${serviceAnchors[index]}`}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          {mode === "reach" ? (
            <>
              <p className="kicker">{copy.home.reachKicker}</p>
              <p className="mt-2 text-sm font-medium leading-5 text-white">{copy.home.reachTitle}</p>
              <ul className="rail-links">
                {copy.home.reach.map((item) => (
                  <li key={item.title}>
                    <span className="text-white">{item.title}</span>
                    <span className="rail-text mt-0 block">{item.text}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          {mode === "mira" ? (
            <>
              <p className="kicker">{copy.home.miraKicker}</p>
              <p className="mt-2 text-sm font-medium leading-5 text-white">{copy.home.miraTitle}</p>
              <p className="rail-text">{copy.home.miraText}</p>
              <ul className="rail-links">
                <li>
                  <a href={person.mira} target="_blank" rel="noopener noreferrer">
                    {copy.home.miraLink}
                  </a>
                </li>
              </ul>
            </>
          ) : null}
        </div>
      </div>
    </aside>
  )
}
