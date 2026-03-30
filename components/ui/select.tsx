"use client"

import { forwardRef, type SelectHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => (
    <select
      ref={ref}
      className={cn(
        "w-full rounded-lg bg-neutral-900/60 border border-neutral-700 px-4 py-2.5 text-sm text-neutral-50 outline-none transition-all duration-[var(--duration-normal)] ease-[var(--ease-out-quart)] hover:border-neutral-600 focus:border-primary-500 focus:bg-neutral-900 focus-ring-inset disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      {children}
    </select>
  )
)

Select.displayName = "Select"

export { Select }
