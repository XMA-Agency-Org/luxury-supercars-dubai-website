"use client"

import { useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card } from "@/components/ui/card"
import { StarIcon } from "@/components/icons/star-icon"
import type { Testimonial } from "../_types/testimonial"

type TestimonialsCarouselProps = {
  testimonials: Testimonial[]
  className?: string
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="min-w-[300px] w-80 shrink-0 snap-center p-6">
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon key={index} className="text-primary-500" />
        ))}
      </div>
      <p className="text-neutral-400 italic text-sm leading-relaxed mb-6">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <Image
          src={testimonial.avatarPath}
          alt={testimonial.name}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover"
        />
        <span className="text-neutral-50 font-medium text-sm">
          {testimonial.name}
        </span>
      </div>
    </Card>
  )
}

function GoogleReviewBadge() {
  return (
    <Card className="min-w-[300px] w-80 shrink-0 snap-center p-6 flex flex-col items-center justify-center text-center gap-2">
      <p className="text-neutral-50 font-medium text-sm">
        Luxury Supercars Rental LLC
      </p>
      <p className="text-5xl font-bold text-primary-500">4.9</p>
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon key={index} className="text-primary-500" />
        ))}
      </div>
      <p className="text-neutral-500 text-sm">Based on 377 reviews</p>
      <p className="text-neutral-600 text-xs mt-2">powered by Google</p>
      <a
        href="https://www.google.com/maps/place/Luxury+Supercars+Dubai/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-500 text-xs hover:underline underline-offset-4 mt-1"
      >
        review us on Google
      </a>
    </Card>
  )
}

function TestimonialsCarousel({
  testimonials,
  className,
}: TestimonialsCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  function scrollBy(direction: "left" | "right") {
    if (!scrollContainerRef.current) return
    const scrollAmount = 340
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <section className={cn("max-w-7xl mx-auto px-4 py-16", className)}>
      <div className="flex items-end justify-between mb-10">
        <SectionHeading>
          What Our{" "}
          <span className="text-primary-500">Customers</span> are Saying{" "}
          <span className="text-primary-500">About Us</span>
        </SectionHeading>
        <div className="hidden md:flex gap-2">
          <button
            type="button"
            onClick={() => scrollBy("left")}
            className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:border-primary-500 hover:text-primary-500 transition-colors cursor-pointer"
            aria-label="Scroll testimonials left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy("right")}
            className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:border-primary-500 hover:text-primary-500 transition-colors cursor-pointer"
            aria-label="Scroll testimonials right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
        <GoogleReviewBadge />
      </div>
    </section>
  )
}

export { TestimonialsCarousel }
