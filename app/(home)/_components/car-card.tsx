"use client"

import Image from "next/image"
import NextLink from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { useCurrency } from "../_lib/currency-context"
import type { CarListing } from "../_types/car"

const WHATSAPP_NUMBER = "971558711744"

type CarCardProps = {
  car: CarListing
}

export function CarCard({ car }: CarCardProps) {
  const { currency } = useCurrency()

  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in renting the ${car.name}. Can you provide more details?`
  )

  return (
    <NextLink href={car.href} className="group">
      <Card className="flex flex-col h-full transition-all duration-300 group-hover:border-primary-500 group-hover:-translate-y-1.5 group-hover:shadow-xl group-hover:shadow-black/30">
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
          <Image
            src={car.imagePath}
            alt={car.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          <Badge variant="solid" className="absolute top-3 left-3 text-xs">
            {car.brand}
          </Badge>

          <div className="absolute bottom-3 left-4">
            <span className="text-xs text-white/70">/ per Day</span>
            <div className="text-2xl font-bold text-primary-400">
              {car.prices[currency].toLocaleString()}{" "}
              <span className="text-sm font-medium">{currency}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 p-5">
          <h3 className="text-xl font-bold text-neutral-50 group-hover:text-primary-500 transition-colors">
            {car.name}
          </h3>

          <div className="flex gap-2 mt-2">
            <Badge variant="outline">{car.specs.engineType}</Badge>
            <Badge variant="outline">{car.specs.acceleration}</Badge>
          </div>

          <p className="text-sm text-neutral-500 line-clamp-2 mt-3">
            {car.description}
          </p>

          <div className="flex items-center gap-2 mt-auto pt-4">
            <span className="flex-1">
              <Button intent="secondary" size="sm" className="w-full">
                View Details
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
