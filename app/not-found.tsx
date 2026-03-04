import NextLink from "next/link"
import { buttonVariants } from "@/components/ui/button-variants"
import { cn } from "@/lib/utils"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="text-8xl font-heading font-bold text-primary-500">404</p>
      <h1 className="mt-4 font-heading text-3xl font-bold text-neutral-50">
        Page Not Found
      </h1>
      <p className="mt-2 text-neutral-400">
        The page you are looking for does not exist or has been moved.
      </p>
      <NextLink
        href="/"
        className={cn(buttonVariants({ intent: "primary", size: "lg" }), "mt-8")}
      >
        Back to Home
      </NextLink>
    </div>
  )
}
