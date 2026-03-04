import { SectionHeading } from "@/components/ui/section-heading"
import { CarCard } from "../../_components/car-card"
import type { CarListing } from "../../_types/car"

type SimilarCarsProps = {
  cars: CarListing[]
}

function SimilarCars({ cars }: SimilarCarsProps) {
  if (cars.length === 0) return null

  return (
    <section className="py-16 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading className="mb-8">
          Similar <span className="text-primary-500">Cars</span>
        </SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car) => (
            <CarCard key={car.slug} car={car} />
          ))}
        </div>
      </div>
    </section>
  )
}

export { SimilarCars }
