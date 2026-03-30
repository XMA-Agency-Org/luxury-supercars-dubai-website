import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-surface rounded-2xl border border-neutral-800 transition-all duration-[var(--duration-normal)] ease-[var(--ease-out-quart)] hover:border-primary-500/40 hover:-translate-y-0.5 hover:bg-surface-elevated",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Card }
