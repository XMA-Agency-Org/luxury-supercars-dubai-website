"use client"

import { forwardRef, type TextareaHTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const textareaVariants = cva(
  "w-full rounded-lg px-4 py-2.5 text-sm placeholder:text-neutral-600 outline-none transition-all duration-200 resize-none",
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

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  VariantProps<typeof textareaVariants>

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(textareaVariants({ variant }), className)}
      {...props}
    />
  )
)

Textarea.displayName = "Textarea"

export { Textarea, textareaVariants }
