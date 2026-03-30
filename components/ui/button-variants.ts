import { cva } from "class-variance-authority"

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-cta font-medium cursor-pointer tracking-wide uppercase focus-ring disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
  {
    variants: {
      intent: {
        primary:
          "btn-shiny text-on-primary",
        secondary:
          "btn-shiny-outline border border-neutral-700 text-neutral-50 hover:border-primary-500 hover:text-primary-500",
        success:
          "bg-success-500 text-white hover:bg-success-400 active:bg-success-600 transition-all duration-[var(--duration-normal)] ease-[var(--ease-out-quart)] active:scale-[0.98]",
        ghost:
          "bg-transparent text-neutral-50 hover:bg-neutral-900 active:bg-neutral-800 transition-all duration-[var(--duration-normal)] ease-[var(--ease-out-quart)] active:scale-[0.98]",
      },
      size: {
        sm: "px-4 py-2 text-xs",
        md: "px-6 py-2.5 text-sm",
        lg: "px-8 py-3 text-sm",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
    },
  }
)
