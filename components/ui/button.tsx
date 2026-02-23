"use client"

import { forwardRef, type ButtonHTMLAttributes } from "react"
import { type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { buttonVariants } from "./button-variants"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, intent, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ intent, size }), className)}
      {...props}
    />
  )
)

Button.displayName = "Button"

export { Button, buttonVariants }
