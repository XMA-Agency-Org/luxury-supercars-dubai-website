"use client"

import { useRef } from "react"
import Image from "next/image"
import NextLink from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { CarCategory } from "../_types/car"

type CarTypeSliderProps = {
  carCategories: CarCategory[]
}

function CarTypeSlider({ carCategories }: CarTypeSliderProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  function scrollBy(direction: "left" | "right") {
    if (!scrollContainerRef.current) return
    const scrollAmount = 220
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between mb-6 md:hidden">
          <h2 className="font-heading text-lg font-bold text-neutral-50">
            Browse by Type
          </h2>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollBy("left")}
              className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:border-primary-500 hover:text-primary-500 transition-colors cursor-pointer"
              aria-label="Scroll car types left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy("right")}
              className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:border-primary-500 hover:text-primary-500 transition-colors cursor-pointer"
              aria-label="Scroll car types right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 md:flex-wrap md:justify-center md:gap-16 md:overflow-visible md:snap-none md:pb-0"
        >
          {carCategories.map((category) => (
            <NextLink
              key={category.slug}
              href={category.href}
              className="flex flex-col items-center gap-4 shrink-0 snap-center transition-transform duration-200 hover:scale-105"
            >
              <div className="relative h-32 w-48 md:h-40 md:w-48">
                <Image
                  src={category.iconPath}
                  alt={`${category.name} cars`}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-semibold text-neutral-50">
                {category.name}
              </span>
            </NextLink>
          ))}
        </div>
      </div>
    </section>
  )
}

export { CarTypeSlider }
