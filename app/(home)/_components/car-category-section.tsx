"use client"

import { useRef, type ReactNode } from "react"
import NextLink from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import { CarCard } from "./car-card"
import type { CarListing } from "../_types/car"

type CarCategorySectionProps = {
  title: ReactNode
  description: string
  cars: CarListing[]
  viewAllHref: string
  viewAllLabel: string
}

export function CarCategorySection({
  title,
  description,
  cars,
  viewAllHref,
  viewAllLabel,
}: CarCategorySectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  function scrollBy(direction: "left" | "right") {
    if (!scrollContainerRef.current) return
    const scrollAmount = 320
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div>
        <SectionHeading>{title}</SectionHeading>
        <p className="text-neutral-300 max-w-3xl mt-4">{description}</p>
      </div>

      <div className="relative mt-8">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 lg:grid lg:grid-cols-4 lg:overflow-visible lg:snap-none lg:pb-0"
        >
          {cars.map((car) => (
            <div key={car.slug} className="w-[78vw] sm:w-[45vw] shrink-0 snap-start lg:w-auto lg:shrink">
              <CarCard car={car} />
            </div>
          ))}
        </div>

      </div>

      <div className="flex justify-center mt-10">
        <NextLink href={viewAllHref}>
          <Button intent="secondary" size="md">
            {viewAllLabel}
          </Button>
        </NextLink>
      </div>
    </section>
  )
}
