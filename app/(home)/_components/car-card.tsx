"use client"

import Image from "next/image"
import NextLink from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { EngineIcon } from "@/components/icons/engine-icon"
import { SpeedometerIcon } from "@/components/icons/speedometer-icon"
import { CarDoorIcon } from "@/components/icons/car-door-icon"
import { SeatIcon } from "@/components/icons/car-seats-icon"
import { useCurrency } from "../_lib/currency-context"
import type { CarListing } from "../_types/car"

const WHATSAPP_NUMBER = "971558711744"

type CarCardProps = {
  car: CarListing
}

function SpecItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string | number
}) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="flex items-center justify-center w-5 h-5 shrink-0 text-primary-500 -mt-0.5">
        {icon}
      </span>
      <div>
        <span className="text-xs text-neutral-500 block">{label}</span>
        <span className="text-sm font-medium text-neutral-50">{value}</span>
      </div>
    </div>
  )
}

export function CarCard({ car }: CarCardProps) {
  const { currency } = useCurrency()

  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in renting the ${car.name}. Can you provide more details?`
  )

  return (
    <NextLink href={car.href} className="group">
      <Card className="flex flex-col h-full transition-colors group-hover:border-primary-500">
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
          <Image
            src={car.imagePath}
            alt={car.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>

        <div className="flex flex-col flex-1 p-5">
          <h3 className="text-xl font-bold text-neutral-50 group-hover:text-primary-500 transition-colors">
            {car.name}
          </h3>
          <p className="text-sm text-neutral-400 line-clamp-2 mt-1">
            {car.description}
          </p>

          <div className="grid grid-cols-2 gap-3 my-4">
            <SpecItem icon={<EngineIcon className="w-5 h-5" />} label="Engine Type" value={car.specs.engineType} />
            <SpecItem icon={<SpeedometerIcon className="w-5 h-5" />} label="0-100 km/h" value={car.specs.acceleration} />
            <SpecItem icon={<CarDoorIcon className="w-5 h-5" />} label="Doors" value={car.specs.doors} />
            <SpecItem icon={<SeatIcon className="w-5 h-5" />} label="Seats" value={car.specs.seats} />
          </div>

          <div className="pt-4 border-t border-neutral-800 mt-auto">
            <span className="text-xs text-neutral-500">/ per Day</span>
            <div className="text-2xl font-bold text-primary-500">
              {car.prices[currency].toLocaleString()}{" "}
              <span className="text-sm font-medium">{currency}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <span className="flex-1">
              <Button intent="secondary" size="sm" className="w-full">
                More Information
              </Button>
            </span>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <Button intent="success" size="sm" className="!px-3">
                <WhatsAppIcon className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </Card>
    </NextLink>
  )
}
