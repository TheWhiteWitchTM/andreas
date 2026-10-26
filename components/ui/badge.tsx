import * as React from "react"
import { cn } from "@/lib/utils"

function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="badge"
      className={cn(
        "inline-flex items-center rounded-full border border-accent/40 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-accent",
        className,
      )}
      {...props}
    />
  )
}

export { Badge }
