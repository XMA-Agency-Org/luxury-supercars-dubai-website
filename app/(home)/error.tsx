"use client"

import { Button } from "@/components/ui/button"

export default function HomeError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-6xl font-heading font-bold text-error-500">Oops</p>
      <h1 className="mt-4 font-heading text-2xl font-bold text-neutral-50">
        Something went wrong
      </h1>
      <p className="mt-2 text-neutral-400">
        An unexpected error occurred. Please try again.
      </p>
      <Button intent="primary" size="lg" onClick={reset} className="mt-8">
        Try Again
      </Button>
    </div>
  )
}
