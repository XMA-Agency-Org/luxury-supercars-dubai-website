"use client"

import { cn } from "@/lib/utils"
import { SectionHeading } from "@/components/ui/section-heading"
import { ScrollVelocityRow } from "@/components/ui/scroll-velocity"
import { ReviewCard } from "./review-card"
import { StarIcon } from "@/components/icons/star-icon"
import type { GoogleReview } from "../_types/testimonial"

type GoogleReviewsProps = {
  googleReviews: GoogleReview[]
  className?: string
}

function GoogleReviews({ googleReviews, className }: GoogleReviewsProps) {
  return (
    <section className={cn("py-16", className)}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex flex-col items-center text-center">
          <SectionHeading>
            What Our <span className="text-primary-500">Customers</span> are
            Saying <span className="text-primary-500">About Us</span>
          </SectionHeading>
          <div className="mt-4 flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="text-4xl font-bold text-primary-500">4.9</span>
              <StarIcon className="w-7 h-7 text-primary-500" />
            </div>
            <div className="text-left">
              <p className="text-sm text-neutral-400">Based on 377 reviews</p>
              <p className="text-xs text-neutral-600">powered by Google</p>
            </div>
          </div>
        </div>
      </div>

      <ScrollVelocityRow baseVelocity={2} direction={-1}>
        <div className="flex gap-6 px-3">
          {googleReviews.map((review) => (
            <ReviewCard
              key={review.name}
              review={review}
              className="w-80 shrink-0 whitespace-normal"
            />
          ))}
        </div>
      </ScrollVelocityRow>
    </section>
  )
}

export { GoogleReviews }
