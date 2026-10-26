export const siteOrigin = "https://thewhitewitchtm.github.io"
export const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH || (process.env.GITHUB_PAGES === "true" ? "/andreas" : "")
export const siteUrl = `${siteOrigin}${basePath}`
export const siteName = "Andreas"

/** Public facts only. Empty strings stay off the page until they are real. */
export const person = {
  givenName: "Andreas",
  familyName: "",
  email: "",
  phone: "",
  street: "",
  postalCode: "",
  city: "Mainz",
  region: "Rheinland-Pfalz",
  countryCode: "DE",
  mira: "https://thewhitewitchtm.github.io/mira/",
  miraName: "Mira's World",
}

export function legalName(): string {
  return [person.givenName, person.familyName].filter(Boolean).join(" ")
}

export const portrait = {
  src: "/andreas.jpg",
  width: 832,
  height: 1248,
}

export function withBase(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`
  return `${basePath}${normalized}`
}
