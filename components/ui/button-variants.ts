import { cva } from "class-variance-authority"

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-cta font-medium cursor-pointer transition-all duration-200",
  {
    variants: {
      intent: {
        primary:
          "bg-primary-500 text-neutral-950 hover:bg-primary-400 active:bg-primary-600",
        secondary:
          "bg-transparent border border-primary-500 text-primary-500 hover:bg-primary-500/10 active:bg-primary-500/20",
        success:
          "bg-success-500 text-neutral-50 hover:bg-success-400 active:bg-success-600",
        ghost:
          "bg-transparent text-neutral-50 hover:bg-neutral-800 active:bg-neutral-700",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
    },
  }
)
