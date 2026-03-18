"use client"

import { forwardRef, type ButtonHTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const iconButtonVariants = cva(
  "inline-flex items-center justify-center rounded-full cursor-pointer transition-all duration-200",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-500 text-neutral-50 hover:bg-primary-400 active:bg-primary-600",
        whatsapp:
          "bg-success-500 text-white hover:bg-success-400 active:bg-success-600",
        call:
          "bg-success-500 text-white hover:bg-success-400 active:bg-success-600",
      },
      size: {
        sm: "w-10 h-10",
        md: "w-12 h-12",
        lg: "w-14 h-14",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof iconButtonVariants>

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(iconButtonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  )
)

IconButton.displayName = "IconButton"

export { IconButton, iconButtonVariants }
