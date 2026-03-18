"use client"

import { forwardRef, type InputHTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  "w-full rounded-lg px-4 py-2.5 text-sm placeholder:text-neutral-600 outline-none transition-all duration-200 [&::-webkit-calendar-picker-indicator]:opacity-50 [&::-webkit-calendar-picker-indicator]:hover:opacity-80",
  {
    variants: {
      variant: {
        default:
          "bg-surface/60 border border-neutral-700 text-neutral-50 focus:border-primary-500 focus:bg-surface",
        light:
          "bg-neutral-900/60 border border-neutral-700 text-neutral-50 focus:border-primary-500 focus:bg-neutral-900",
        surface:
          "bg-surface border border-neutral-700 text-neutral-50 placeholder:text-neutral-500 focus:border-primary-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants>

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(inputVariants({ variant }), className)}
      {...props}
    />
  )
)

Input.displayName = "Input"

export { Input, inputVariants }
