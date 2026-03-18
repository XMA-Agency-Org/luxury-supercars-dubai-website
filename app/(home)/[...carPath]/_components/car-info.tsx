import { Calendar, Palette, Check } from "lucide-react"
import { EngineIcon } from "@/components/icons/engine-icon"
import { SpeedometerIcon } from "@/components/icons/speedometer-icon"
import { CarDoorIcon } from "@/components/icons/car-door-icon"
import { SeatIcon } from "@/components/icons/car-seats-icon"
import type { CarListing } from "../../_types/car"

type CarInfoProps = {
  car: CarListing
}

function CarInfo({ car }: CarInfoProps) {
  return (
    <div>
      <p className="text-neutral-500 leading-relaxed mb-8">{car.description}</p>

      <h2 className="font-heading text-xl font-semibold mb-4">Specifications</h2>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <SpecCard
          icon={<EngineIcon className="w-5 h-5 text-primary-500" />}
          label="Engine"
          value={car.specs.engineType}
        />
        <SpecCard
          icon={<SpeedometerIcon className="w-5 h-5 text-primary-500" />}
          label="0-100 km/h"
          value={car.specs.acceleration}
        />
        <SpecCard
          icon={<CarDoorIcon className="w-5 h-5 text-primary-500" />}
          label="Doors"
          value={String(car.specs.doors)}
        />
        <SpecCard
          icon={<SeatIcon className="w-5 h-5 text-primary-500" />}
          label="Seats"
          value={String(car.specs.seats)}
        />
        {car.year && (
          <SpecCard
            icon={<Calendar className="w-5 h-5 text-primary-500" />}
            label="Year"
            value={car.year}
          />
        )}
        {car.color && (
          <SpecCard
            icon={<Palette className="w-5 h-5 text-primary-500" />}
            label="Color"
            value={car.color}
          />
        )}
      </div>

      {car.features.length > 0 && (
        <>
          <h2 className="font-heading text-xl font-semibold mb-4">Features</h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
            {car.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-sm text-neutral-400">
                <Check className="w-4 h-4 text-primary-500 shrink-0" />
                {feature}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function SpecCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="rounded-xl border border-neutral-800 bg-surface p-4">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className="text-xs text-neutral-500 uppercase tracking-wider">
          {label}
        </span>
      </div>
      <span className="text-lg font-semibold">{value}</span>
    </div>
  )
}

export { CarInfo }
