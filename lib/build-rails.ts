import type { Copy } from "@/lib/i18n"
import { dictionary } from "@/lib/i18n"
import type { RailCard, RailLink } from "@/lib/rail"
import type { Locale } from "@/lib/routes"
import { localize } from "@/lib/routes"
import { person, serviceAnchors, withBase } from "@/lib/site"

function link(title: string, href: string, external = false): RailLink {
  return { title, href, external }
}

function still(name: string, alt: string): Pick<RailCard, "image" | "alt" | "width" | "height"> {
  return {
    image: withBase(`/rail/${name}.jpg`),
    alt,
    width: 832,
    height: 1248,
  }
}

function card(
  id: keyof Copy["rail"],
  image: string,
  spec: Copy["rail"][keyof Copy["rail"]],
  links: RailLink[],
  href?: string,
  external?: boolean,
): RailCard {
  return {
    id,
    kicker: spec.kicker,
    title: spec.title,
    text: spec.text,
    ...still(image, spec.alt),
    ...(href ? { href, external } : {}),
    links,
  }
}

export function buildRailCards(lang: Locale): Record<string, RailCard> {
  const copy = dictionary[lang]
  const rail = copy.rail
  const servicesHref = localize(lang, "services")
  const serviceLinks = copy.home.services.map((item, index) =>
    link(item.title, `${servicesHref}#${serviceAnchors[index]}`),
  )

  const cards: Record<string, RailCard> = {
    home: card("home", "home", rail.home, [
      link(copy.nav.services, servicesHref),
      link(copy.nav.about, localize(lang, "about")),
      link(copy.nav.contact, localize(lang, "contact")),
    ]),
    services: card("services", "services", rail.services, serviceLinks, servicesHref),
    reach: card("reach", "reach", rail.reach, [link(copy.nav.contact, localize(lang, "contact"))]),
    mira: card("mira", "next", rail.mira, [link(copy.home.miraLink, person.mira, true)], person.mira, true),
    about: card("about", "about", rail.about, [
      link(copy.nav.services, servicesHref),
      link(copy.nav.contact, localize(lang, "contact")),
    ]),
    contact: card("contact", "contact", rail.contact, [link(copy.nav.services, servicesHref)]),
    imprint: card("imprint", "imprint", rail.imprint, [link(copy.footer.privacy, localize(lang, "privacy"))]),
    privacy: card("privacy", "privacy", rail.privacy, [
      link(copy.footer.imprint, localize(lang, "imprint")),
      link(
        copy.privacy.github,
        "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement",
        true,
      ),
    ]),
  }

  serviceAnchors.forEach((id, index) => {
    cards[id] = card(
      id,
      id,
      rail[id],
      serviceLinks.filter((_, item) => item !== index),
      `${servicesHref}#${id}`,
    )
  })

  return cards
}
