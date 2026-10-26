import Link from "next/link"

export default function NotFound() {
  return (
    <div className="space-y-4">
      <p className="kicker">404</p>
      <h1 className="text-4xl font-semibold tracking-tight text-white">Diese Seite gibt es nicht.</h1>
      <p className="max-w-prose text-muted">That page is not here.</p>
      <p className="flex gap-4">
        <Link href="/" className="text-accent hover:text-accent-2">
          Start
        </Link>
        <Link href="/en/" className="text-accent hover:text-accent-2">
          Home
        </Link>
      </p>
    </div>
  )
}
