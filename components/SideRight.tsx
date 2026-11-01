import { person, withBase } from "@/lib/site"

export function SideRight() {
  return (
    <aside className="side-rail" aria-label="Mira">
      <div className="side-stick">
        <a href={person.mira} target="_blank" rel="noopener noreferrer">
          <img
            src={withBase("/mira.jpg")}
            alt="Mira, smiling, red hair in a ponytail, black jacket, pointing."
            width={1008}
            height={1792}
          />
        </a>
      </div>
    </aside>
  )
}
