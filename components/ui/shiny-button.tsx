"use client"

import type { ButtonHTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

type ShinyButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode
}

export function ShinyButton({
  className,
  children = "Shiny Day",
  ...props
}: ShinyButtonProps) {
  return (
    <button
      className={cn(
        "h-12 w-max rounded-lg border-none bg-[linear-gradient(325deg,var(--color-primary-600)_0%,var(--color-primary-300)_55%,var(--color-primary-600)_90%)] bg-[length:280%_auto] px-6 py-2 font-cta font-medium text-on-primary shadow-[0px_0px_20px_oklch(0.76_0.13_80/0.4),0px_5px_5px_-1px_oklch(0.68_0.13_80/0.25),inset_4px_4px_8px_oklch(0.90_0.07_80/0.5),inset_-4px_-4px_8px_oklch(0.48_0.10_80/0.35)] transition-[background] duration-700 hover:bg-[position:top_right] focus-ring tracking-wide uppercase",
        className
      )}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
}
