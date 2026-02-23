import type { ReactNode } from "react"
import NextLink from "next/link"
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
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <SectionHeading>{title}</SectionHeading>
      <p className="text-neutral-300 max-w-3xl mt-4 mb-8">{description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <CarCard key={car.slug} car={car} />
        ))}
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
