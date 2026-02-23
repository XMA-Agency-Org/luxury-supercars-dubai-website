import Image from "next/image"
import { Link } from "@/components/ui/link"
import type { CarCategory } from "../_types/car"

type CarTypeSliderProps = {
  carCategories: CarCategory[]
}

function CarTypeSlider({ carCategories }: CarTypeSliderProps) {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="scrollbar-hide flex snap-x snap-mandatory gap-8 overflow-x-auto px-4">
          {carCategories.map((category) => (
            <Link
              key={category.slug}
              href={category.href}
              variant={null}
              className="flex shrink-0 snap-center flex-col items-center gap-3 transition-transform duration-200 hover:scale-105"
            >
              <div className="relative h-20 w-20">
                <Image
                  src={category.iconPath}
                  alt={`${category.name} cars`}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium text-neutral-50">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export { CarTypeSlider }
