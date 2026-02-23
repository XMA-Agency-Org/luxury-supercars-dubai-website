"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionHeading } from "@/components/ui/section-heading"
import { ReviewCard } from "./review-card"
import type { GoogleReview } from "../_types/testimonial"

type GoogleReviewsProps = {
  googleReviews: GoogleReview[]
  className?: string
}

function GoogleReviews({ googleReviews, className }: GoogleReviewsProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  function scrollBy(direction: "left" | "right") {
    if (!scrollRef.current) return
    const amount = 340
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    })
  }

  return (
    <section className={cn("py-16", className)}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex flex-col items-center text-center">
          <SectionHeading>
            What Our <span className="text-primary-500">Customers</span> are
            Saying <span className="text-primary-500">About Us</span>
          </SectionHeading>
          <div className="mt-4 flex items-center gap-3">
            <span className="text-4xl font-bold text-primary-500">4.9</span>
            <div className="text-left">
              <p className="text-sm text-neutral-300">Based on 377 reviews</p>
              <p className="text-xs text-neutral-500">powered by Google</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => scrollBy("left")}
            className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 cursor-pointer rounded-full bg-neutral-800/80 p-2 text-neutral-50 backdrop-blur-sm transition hover:bg-neutral-700 md:block"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            ref={scrollRef}
            className="scrollbar-hide flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-1 py-1"
          >
            {googleReviews.map((review) => (
              <ReviewCard
                key={review.name}
                review={review}
                className="min-w-[300px] w-80 shrink-0 snap-start"
              />
            ))}
          </div>

          <button
            onClick={() => scrollBy("right")}
            className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 cursor-pointer rounded-full bg-neutral-800/80 p-2 text-neutral-50 backdrop-blur-sm transition hover:bg-neutral-700 md:block"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export { GoogleReviews }
