import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionHeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode
}

function SectionHeading({ className, children, ...props }: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "font-heading text-3xl md:text-4xl lg:text-5xl font-bold",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
}

export { SectionHeading }
