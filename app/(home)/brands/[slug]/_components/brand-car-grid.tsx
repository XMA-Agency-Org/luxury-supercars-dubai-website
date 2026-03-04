"use client"

import { useState, useMemo } from "react"
import { CarCard } from "../../../_components/car-card"
import { Button } from "@/components/ui/button"
import { getCarsByBrand } from "../../../_lib/car-queries"

const ITEMS_PER_PAGE = 8

type BrandCarGridProps = {
  brandSlug: string
}

function BrandCarGrid({ brandSlug }: BrandCarGridProps) {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)

  const cars = useMemo(() => getCarsByBrand(brandSlug), [brandSlug])
  const visibleCars = cars.slice(0, visibleCount)
  const hasMore = visibleCount < cars.length

  if (cars.length === 0) {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-heading text-xl font-bold mb-2">
            Coming Soon
          </h3>
          <p className="text-neutral-400">
            We are currently updating our fleet for this brand. Please contact us
            for availability.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-neutral-400 text-sm mb-6">
          {cars.length} {cars.length === 1 ? "car" : "cars"} available
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleCars.map((car) => (
            <CarCard key={car.slug} car={car} />
          ))}
        </div>
        {hasMore && (
          <div className="mt-10 flex justify-center">
            <Button
              intent="secondary"
              size="lg"
              onClick={() =>
                setVisibleCount((prev) => prev + ITEMS_PER_PAGE)
              }
            >
              Load More ({cars.length - visibleCount} remaining)
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export { BrandCarGrid }
