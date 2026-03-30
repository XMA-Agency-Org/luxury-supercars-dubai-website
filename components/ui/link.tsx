import NextLink, { type LinkProps as NextLinkProps } from "next/link"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import type { AnchorHTMLAttributes } from "react"

const linkVariants = cva("transition-all duration-[var(--duration-slow)] ease-[var(--ease-out-expo)] cursor-pointer focus-ring rounded-sm", {
  variants: {
    variant: {
      primary:
        "text-primary-500 hover:underline hover:underline-offset-4",
      nav:
        "text-neutral-50 hover:text-primary-500 font-cta font-medium",
      cta:
        "inline-flex items-center justify-center btn-shiny text-on-primary rounded-full px-6 py-3 font-cta font-medium",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
})

type LinkComponentProps = NextLinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> &
  VariantProps<typeof linkVariants> & {
    className?: string
  }

function Link({ className, variant, ...props }: LinkComponentProps) {
  return (
    <NextLink
      className={cn(linkVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Link, linkVariants }
