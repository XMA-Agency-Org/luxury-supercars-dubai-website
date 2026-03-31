"use client"

import { useRef, useState, useEffect, useCallback, type ReactNode } from "react"
import NextLink from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { gsap, useGSAP } from "@/lib/gsap"
import { AnimatedSectionHeading } from "@/components/ui/animated-section-heading"
import { Button } from "@/components/ui/button"
import { CarCard } from "./car-card"
import type { CarListing } from "../_types/car"

type CarCategorySectionProps = {
  title: ReactNode
  description: string
  cars: CarListing[]
  viewAllHref: string
  viewAllLabel: string
  layout?: "default" | "reversed"
  backgroundVariant?: "default" | "alternate"
  maxCars?: number
}

export function CarCategorySection({
  title,
  description,
  cars,
  viewAllHref,
  viewAllLabel,
  layout = "default",
  backgroundVariant = "default",
  maxCars = 10,
}: CarCategorySectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scrollCars = cars.slice(0, maxCars)

  const updateScrollState = useCallback(() => {
    const el = scrollContainerRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 1)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1)
  }, [])

  useEffect(() => {
    const el = scrollContainerRef.current
    if (!el) return
    updateScrollState()
    el.addEventListener("scroll", updateScrollState, { passive: true })
    const observer = new ResizeObserver(updateScrollState)
    observer.observe(el)
    return () => {
      el.removeEventListener("scroll", updateScrollState)
      observer.disconnect()
    }
  }, [updateScrollState])

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
      if (prefersReduced) return

      const cards = scrollContainerRef.current?.querySelectorAll<HTMLElement>(".car-card-item")
      if (!cards?.length) return

      gsap.from(cards, {
        opacity: 0,
        y: 60,
        scale: 0.92,
        rotateY: 8,
        stagger: 0.08,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: scrollContainerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
    },
    { scope: sectionRef }
  )

  function scroll(direction: "left" | "right") {
    const el = scrollContainerRef.current
    if (!el) return
    const cardWidth = el.querySelector<HTMLElement>(":scope > div")?.offsetWidth ?? 320
    el.scrollBy({
      left: direction === "left" ? -cardWidth - 24 : cardWidth + 24,
      behavior: "smooth",
    })
  }

  const isReversed = layout === "reversed"

  return (
    <section
      ref={sectionRef}
      className={
        backgroundVariant === "alternate"
          ? "bg-neutral-900/50 py-12"
          : "py-12"
      }
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className={isReversed ? "md:text-right" : ""}>
          <AnimatedSectionHeading>{title}</AnimatedSectionHeading>
          <p className={`text-neutral-400 max-w-3xl mt-4 ${isReversed ? "md:ml-auto" : ""}`}>
            {description}
          </p>
        </div>

        <div className="relative mt-8 group/carousel" style={{ perspective: "1200px" }}>
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide pb-4 py-2 px-2"
          >
            {scrollCars.map((car) => (
              <div
                key={car.slug}
                className="car-card-item w-[78vw] sm:w-[45vw] lg:w-[calc((100%-48px)/3)] shrink-0 snap-start will-change-transform"
              >
                <CarCard car={car} />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full border border-neutral-700 bg-surface/80 backdrop-blur-sm items-center justify-center text-neutral-400 transition-colors hover:border-primary-500 hover:text-primary-500 disabled:opacity-0 disabled:pointer-events-none"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-10 h-10 rounded-full border border-neutral-700 bg-surface/80 backdrop-blur-sm items-center justify-center text-neutral-400 transition-colors hover:border-primary-500 hover:text-primary-500 disabled:opacity-0 disabled:pointer-events-none"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center mt-10">
          <NextLink href={viewAllHref}>
            <Button intent="secondary" size="md">
              {viewAllLabel}
            </Button>
          </NextLink>
        </div>
      </div>
    </section>
  )
}
