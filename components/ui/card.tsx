import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-surface rounded-2xl border border-neutral-800",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Card }
