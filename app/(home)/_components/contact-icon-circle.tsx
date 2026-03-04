import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const contactIconCircleVariants = cva(
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        muted: "bg-primary-500/10 text-primary-500",
        solid: "bg-primary-500 text-neutral-950",
      },
    },
    defaultVariants: {
      variant: "muted",
    },
  }
)

type ContactIconCircleProps = VariantProps<typeof contactIconCircleVariants> & {
  children: React.ReactNode
  className?: string
}

function ContactIconCircle({
  children,
  variant,
  className,
}: ContactIconCircleProps) {
  return (
    <div className={cn(contactIconCircleVariants({ variant }), className)}>
      {children}
    </div>
  )
}

export { ContactIconCircle, contactIconCircleVariants }
