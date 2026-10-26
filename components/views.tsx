import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { dictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/routes"
import { localize } from "@/lib/routes"
import { legalName, person, portrait, withBase } from "@/lib/site"

const githubPrivacy = "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"

export function HomeView({ lang }: { lang: Locale }) {
  const copy = dictionary[lang].home

  return (
    <div className="space-y-10">
      <section className="frame overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)]">
          <div className="bg-black">
            <img
              src={withBase(portrait.src)}
              alt={dictionary[lang].portraitAlt}
              width={portrait.width}
              height={portrait.height}
              className="aspect-[3/4] h-auto w-full object-cover object-top sm:aspect-auto sm:h-full sm:max-h-[28rem]"
            />
          </div>
          <div className="flex flex-col justify-center gap-4 p-5 sm:p-7">
            <p className="kicker">{copy.kicker}</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{copy.title}</h1>
            <p className="max-w-md text-base text-muted">{copy.lead}</p>
            <ul className="flex flex-wrap gap-2">
              {copy.services.map((item) => (
                <li key={item.title}>
                  <Badge>{item.title}</Badge>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              <Button asChild>
                <Link href={localize(lang, "contact")}>{copy.contactLink}</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={localize(lang, "services")}>{copy.servicesLink}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <p className="kicker">{copy.hireKicker}</p>
        <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white">{copy.hireTitle}</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {copy.services.map((item) => (
            <li key={item.title}>
              <Card>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item.text}</p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <p className="kicker">{copy.reachKicker}</p>
        <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white">{copy.reachTitle}</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {copy.reach.map((item) => (
            <li key={item.title}>
              <Card>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item.text}</p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <section className="frame p-5 sm:p-6">
        <p className="kicker">{copy.miraKicker}</p>
        <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white">{copy.miraTitle}</h2>
        <p className="mt-2 max-w-md text-sm text-muted">{copy.miraText}</p>
        <div className="mt-4">
          <Button variant="outline" asChild>
            <a href={person.mira} target="_blank" rel="noopener noreferrer">
              {copy.miraLink}
              <ArrowUpRight />
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

export function ServicesView({ lang }: { lang: Locale }) {
  const copy = dictionary[lang].services

  return (
    <article className="space-y-8">
      <header>
        <p className="kicker">{copy.kicker}</p>
        <h1 className="mt-1 text-4xl font-semibold tracking-tight text-white">{copy.title}</h1>
        <p className="mt-3 max-w-prose text-muted">{copy.lead}</p>
      </header>
      <ul className="grid gap-3">
        {copy.items.map((item) => (
          <li key={item.title}>
            <Card>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{item.text}</p>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
      <Card>
        <CardHeader>
          <CardTitle>{copy.noteTitle}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{copy.note}</p>
        </CardContent>
      </Card>
    </article>
  )
}

export function AboutView({ lang }: { lang: Locale }) {
  const copy = dictionary[lang].about

  return (
    <article className="space-y-6">
      <p className="kicker">{copy.kicker}</p>
      <div className="grid items-start gap-6 sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)]">
        <img
          src={withBase(portrait.src)}
          alt={dictionary[lang].portraitAlt}
          width={portrait.width}
          height={portrait.height}
          className="aspect-[3/4] w-full max-w-[14rem] rounded-lg object-cover object-top"
        />
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-white">{copy.title}</h1>
          <div className="mt-4 space-y-3 text-paper">
            {copy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

export function ContactView({ lang }: { lang: Locale }) {
  const copy = dictionary[lang].contact

  return (
    <article className="space-y-8">
      <header>
        <p className="kicker">{copy.kicker}</p>
        <h1 className="mt-1 text-4xl font-semibold tracking-tight text-white">{copy.title}</h1>
        <p className="mt-3 max-w-prose text-muted">{copy.lead}</p>
      </header>
      <ul className="grid gap-3 sm:grid-cols-2">
        {copy.facts.map((fact) => (
          <li key={fact.title}>
            <Card>
              <CardHeader>
                <p className="kicker">{fact.title}</p>
              </CardHeader>
              <CardContent>
                <p className="text-base text-paper">{fact.text}</p>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
      {person.email ? (
        <Button asChild>
          <a href={`mailto:${person.email}`}>
            {copy.mail}
            <span className="font-normal">{person.email}</span>
          </a>
        </Button>
      ) : (
        <p className="max-w-prose text-sm text-muted">{copy.pending}</p>
      )}
    </article>
  )
}

export function ImprintView({ lang }: { lang: Locale }) {
  const copy = dictionary[lang].imprint
  const name = legalName()
  const missing = [
    person.familyName ? null : copy.missingName,
    person.street && person.postalCode ? null : copy.missingAddress,
    person.email || person.phone ? null : copy.missingContact,
  ].filter((item): item is string => Boolean(item))

  return (
    <article className="space-y-6">
      <header>
        <p className="kicker">{copy.kicker}</p>
        <h1 className="mt-1 text-4xl font-semibold tracking-tight text-white">{copy.title}</h1>
        <p className="mt-3 text-muted">{copy.intro}</p>
      </header>
      <dl className="space-y-4">
        <div>
          <dt className="kicker">{copy.name}</dt>
          <dd className="mt-1">{name}</dd>
        </div>
        <div>
          <dt className="kicker">{copy.role}</dt>
          <dd className="mt-1">{copy.roleValue}</dd>
        </div>
        <div>
          <dt className="kicker">{copy.place}</dt>
          <dd className="mt-1">{copy.placeValue}</dd>
        </div>
        {person.street ? (
          <div>
            <dt className="kicker">{copy.address}</dt>
            <dd className="mt-1">
              {person.street}
              <br />
              {[person.postalCode, person.city].filter(Boolean).join(" ")}
            </dd>
          </div>
        ) : null}
        {person.email ? (
          <div>
            <dt className="kicker">{copy.email}</dt>
            <dd className="mt-1">
              <a href={`mailto:${person.email}`} className="text-accent hover:text-accent-2">
                {person.email}
              </a>
            </dd>
          </div>
        ) : null}
        {person.phone ? (
          <div>
            <dt className="kicker">{copy.phone}</dt>
            <dd className="mt-1">
              <a href={`tel:${person.phone}`} className="text-accent hover:text-accent-2">
                {person.phone}
              </a>
            </dd>
          </div>
        ) : null}
        <div>
          <dt className="kicker">{copy.responsible}</dt>
          <dd className="mt-1">
            {name}, {person.city}
          </dd>
        </div>
      </dl>
      {missing.length ? (
        <Card>
          <CardContent className="space-y-2">
            <p>{copy.missingLead}</p>
            <ul className="list-disc space-y-1 pl-5">
              {missing.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{copy.missingTail}</p>
          </CardContent>
        </Card>
      ) : null}
    </article>
  )
}

export function PrivacyView({ lang }: { lang: Locale }) {
  const copy = dictionary[lang].privacy

  return (
    <article className="space-y-4">
      <p className="kicker">{copy.kicker}</p>
      <h1 className="text-4xl font-semibold tracking-tight text-white">{copy.title}</h1>
      {copy.paragraphs.map((paragraph) => (
        <p key={paragraph} className="max-w-prose">
          {paragraph}
        </p>
      ))}
      <p>
        <a href={githubPrivacy} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-2">
          {copy.github}
        </a>
      </p>
      <p className="max-w-prose">
        {copy.imprintLead}{" "}
        <Link href={localize(lang, "imprint")} className="text-accent hover:text-accent-2">
          {copy.imprintLink}
        </Link>
        .
      </p>
    </article>
  )
}
