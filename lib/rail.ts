export interface RailLink {
  title: string
  href: string
  external?: boolean
}

export interface RailCard {
  id: string
  kicker: string
  title: string
  text: string
  image?: string
  alt?: string
  width?: number
  height?: number
  href?: string
  external?: boolean
  links: RailLink[]
}

/** The right rail follows the page. Home opens on the desk still. */
export function railIdForPath(pathname: string, ids: readonly string[]): string {
  const path = pathname.endsWith("/") ? pathname : `${pathname}/`
  const rest = path === "/en/" || path.startsWith("/en/") ? path.slice(3) || "/" : path
  const take = (id: string) => (ids.includes(id) ? id : "home")

  if (rest.startsWith("/leistungen/") || rest.startsWith("/services/")) return take("services")
  if (rest.startsWith("/ueber/") || rest.startsWith("/about/")) return take("about")
  if (rest.startsWith("/kontakt/") || rest.startsWith("/contact/")) return take("contact")
  if (rest.startsWith("/impressum/")) return take("imprint")
  if (rest.startsWith("/datenschutz/") || rest.startsWith("/privacy/")) return take("privacy")
  return "home"
}
