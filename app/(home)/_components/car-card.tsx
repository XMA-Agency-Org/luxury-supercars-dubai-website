"use client"

import { useState } from "react"
import Image from "next/image"
import NextLink from "next/link"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PhoneIcon } from "@/components/icons/phone-icon"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import type { CarListing, Currency } from "../_types/car"

const CURRENCIES: Currency[] = ["AED", "USD", "EUR", "GBP"]

const PHONE_NUMBER = "+971558711744"
const WHATSAPP_NUMBER = "971558711744"

type CarCardProps = {
  car: CarListing
}

function SpecItem({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <span className="text-xs text-neutral-500 block">{label}</span>
      <span className="text-sm font-medium text-neutral-50">{value}</span>
    </div>
  )
}

function CurrencySelector({
  selectedCurrency,
  onSelect,
}: {
  selectedCurrency: Currency
  onSelect: (currency: Currency) => void
}) {
  return (
    <div className="flex gap-1">
      {CURRENCIES.map((currency) => (
        <button
          key={currency}
          onClick={() => onSelect(currency)}
          className={cn(
            "px-2 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer",
            currency === selectedCurrency
              ? "bg-primary-500 text-neutral-950"
              : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
          )}
        >
          {currency}
        </button>
      ))}
    </div>
  )
}

export function CarCard({ car }: CarCardProps) {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>("AED")

  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in renting the ${car.name}. Can you provide more details?`
  )

  return (
    <Card className="flex flex-col">
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
        <Image
          src={car.imagePath}
          alt={car.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-xl font-bold text-neutral-50">{car.name}</h3>
        <p className="text-sm text-neutral-400 line-clamp-2 mt-1">
          {car.description}
        </p>

        <div className="grid grid-cols-2 gap-3 mt-4">
          <SpecItem label="Engine Type" value={car.specs.engineType} />
          <SpecItem label="0-100 km/h" value={car.specs.acceleration} />
          <SpecItem label="Doors" value={car.specs.doors} />
          <SpecItem label="Seats" value={car.specs.seats} />
        </div>

        <div className="mt-4 pt-4 border-t border-neutral-800">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-xs text-neutral-500">/ per Day</span>
              <div className="text-2xl font-bold text-primary-500">
                {car.prices[selectedCurrency].toLocaleString()}{" "}
                <span className="text-sm font-medium">{selectedCurrency}</span>
              </div>
            </div>
            <CurrencySelector
              selectedCurrency={selectedCurrency}
              onSelect={setSelectedCurrency}
            />
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4">
          <NextLink href={car.href} className="flex-1">
            <Button intent="secondary" size="sm" className="w-full">
              More Information
            </Button>
          </NextLink>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button intent="success" size="sm" className="!px-3">
              <WhatsAppIcon className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </Card>
  )
}
