import type { HTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary-500/10 text-primary-500",
        outline: "border border-neutral-700 text-neutral-400",
        solid: "bg-primary-500 text-on-primary",
      },
      size: {
        sm: "px-2.5 py-0.5 text-xs rounded-md",
        md: "px-3 py-1 text-sm rounded-lg",
      },
    },
    defaultVariants: { variant: "default", size: "sm" },
  }
)

type BadgeProps = HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
