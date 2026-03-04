"use client"

import NextLink from "next/link"
import { Phone } from "lucide-react"
import { buttonVariants } from "@/components/ui/button-variants"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { useCurrency } from "../../_lib/currency-context"
import { contactData } from "../../_lib/contact-data"
import type { CarListing } from "../../_types/car"

type CarPricingCardProps = {
  car: CarListing
}

function CarPricingCard({ car }: CarPricingCardProps) {
  const { currency } = useCurrency()
  const price = car.prices[currency]

  const currencySymbols: Record<string, string> = {
    AED: "AED",
    USD: "$",
    EUR: "€",
    GBP: "£",
  }

  const symbol = currencySymbols[currency] ?? currency

  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
      <p className="text-sm text-neutral-400 mb-1">Starting from</p>
      <div className="flex items-baseline gap-2 mb-6">
        <span className="font-heading text-3xl font-bold text-primary-500">
          {symbol} {price.toLocaleString()}
        </span>
        <span className="text-neutral-400">/day</span>
      </div>

      <p className="text-xs text-neutral-500 mb-6">
        Prices are exclusive of 5% VAT. Terms apply.
      </p>

      <div className="space-y-3">
        <NextLink
          href={contactData.phones[0].href}
          className={buttonVariants({ intent: "primary", size: "lg" }) + " w-full justify-center"}
        >
          <Phone className="w-5 h-5 mr-2" />
          Call to Book
        </NextLink>
        <NextLink
          href={contactData.whatsapp.ryan.href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ intent: "success", size: "lg" }) + " w-full justify-center"}
        >
          <WhatsAppIcon className="w-5 h-5 mr-2" />
          WhatsApp Us
        </NextLink>
      </div>
    </div>
  )
}

export { CarPricingCard }
