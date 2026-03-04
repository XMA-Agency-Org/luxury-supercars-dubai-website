"use client"

import { forwardRef, type SelectHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => (
    <select
      ref={ref}
      className={cn(
        "w-full rounded-lg bg-neutral-800/60 border border-neutral-700 px-4 py-2.5 text-sm text-neutral-50 outline-none transition-all duration-200 focus:border-primary-500 focus:bg-neutral-800",
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
