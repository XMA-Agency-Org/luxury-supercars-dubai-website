"use client"

import { forwardRef, type SelectHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => (
    <select
      ref={ref}
      className={cn(
        "w-full rounded-lg bg-neutral-900 border border-neutral-500 px-4 py-3 text-neutral-50 outline-none transition-all duration-200 focus:border-primary-500",
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
