export type Locale = "de" | "en"

export const pageKeys = ["home", "services", "about", "contact", "imprint", "privacy"] as const
export type PageKey = (typeof pageKeys)[number]

/** Path after the locale prefix, always with a trailing slash. */
const rests: Record<Locale, Record<PageKey, string>> = {
  de: {
    home: "/",
    services: "/leistungen/",
    about: "/ueber/",
    contact: "/kontakt/",
    imprint: "/impressum/",
    privacy: "/datenschutz/",
  },
  en: {
    home: "/",
    services: "/services/",
    about: "/about/",
    contact: "/contact/",
    imprint: "/impressum/",
    privacy: "/privacy/",
  },
}

export function splitPath(pathname: string): { lang: Locale; rest: string } {
  const path = pathname.endsWith("/") ? pathname : `${pathname}/`
  if (path === "/en/" || path.startsWith("/en/")) {
    const rest = path.slice(3) || "/"
    return { lang: "en", rest }
  }
  return { lang: "de", rest: path }
}

export function localize(lang: Locale, key: PageKey): string {
  const rest = rests[lang][key]
  if (lang === "en") return rest === "/" ? "/en/" : `/en${rest}`
  return rest
}

export function keyFromPath(pathname: string): PageKey {
  const { lang, rest } = splitPath(pathname)
  const table = rests[lang]
  for (const key of pageKeys) {
    if (table[key] === rest) return key
  }
  return "home"
}
