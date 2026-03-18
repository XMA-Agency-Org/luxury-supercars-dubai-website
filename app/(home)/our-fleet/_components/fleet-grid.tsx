"use client"

import { useState, useMemo } from "react"
import { CarCard } from "../../_components/car-card"
import { CarFiltersSidebar, type Filters } from "@/components/sections/car-filters-sidebar"
import { Button } from "@/components/ui/button"
import { getAllCars, getCarsByCategory, getCarsByBrand } from "../../_lib/car-queries"
import type { CarListing } from "../../_types/car"

const ITEMS_PER_PAGE = 8

function FleetGrid() {
  const [filters, setFilters] = useState<Filters>({
    category: null,
    brand: null,
    priceRange: null,
  })
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)

  const filteredCars = useMemo(() => {
    let cars: CarListing[]

    if (filters.category) {
      cars = getCarsByCategory(filters.category)
    } else if (filters.brand) {
      const brandSlug = `rent-${filters.brand}-dubai`
      cars = getCarsByBrand(brandSlug)
    } else {
      cars = getAllCars()
    }

    if (filters.priceRange) {
      cars = cars.filter((car) => {
        const price = car.prices.AED
        const { min, max } = filters.priceRange!
        if (max === null) return price >= min
        return price >= min && price <= max
      })
    }

    return cars
  }, [filters])

  const visibleCars = filteredCars.slice(0, visibleCount)
  const hasMore = visibleCount < filteredCars.length

  function handleFiltersChange(newFilters: Filters) {
    setFilters(newFilters)
    setVisibleCount(ITEMS_PER_PAGE)
  }

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          <CarFiltersSidebar onFiltersChange={handleFiltersChange} />

          <div>
            <p className="text-neutral-500 text-sm mb-6">
              {filteredCars.length} {filteredCars.length === 1 ? "car" : "cars"}{" "}
              available
            </p>

            {filteredCars.length === 0 ? (
              <div className="text-center py-20">
                <h3 className="font-heading text-xl font-bold mb-2">
                  No cars found
                </h3>
                <p className="text-neutral-500">
                  Try adjusting your filters to see more results.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
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
                      Load More ({filteredCars.length - visibleCount} remaining)
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export { FleetGrid }
