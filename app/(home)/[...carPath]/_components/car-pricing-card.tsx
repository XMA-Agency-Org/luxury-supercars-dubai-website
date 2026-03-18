"use client"

import NextLink from "next/link"
import { Phone, Shield, Gauge, MapPin, Facebook, Instagram, Youtube } from "lucide-react"
import { buttonVariants } from "@/components/ui/button-variants"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { TikTokIcon } from "@/components/icons/social-icons"
import { EngineIcon } from "@/components/icons/engine-icon"
import { SpeedometerIcon } from "@/components/icons/speedometer-icon"
import { CarDoorIcon } from "@/components/icons/car-door-icon"
import { SeatIcon } from "@/components/icons/car-seats-icon"
import { useCurrency } from "../../_lib/currency-context"
import { contactData } from "../../_lib/contact-data"
import type { CarListing } from "../../_types/car"

type CarPricingCardProps = {
  car: CarListing
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-neutral-800 last:border-0">
      <span className="text-sm text-neutral-500">{label}</span>
      <span className="text-sm font-medium text-neutral-50">{value}</span>
    </div>
  )
}

function SpecRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-neutral-800 last:border-0">
      <div className="flex items-center gap-2">
        <span className="text-primary-500">{icon}</span>
        <span className="text-sm text-neutral-500">{label}</span>
      </div>
      <span className="text-sm font-medium text-neutral-50">{value}</span>
    </div>
  )
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
  const { rentalTerms, specs } = car

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-neutral-800 bg-surface p-6">
        <p className="text-sm text-neutral-500 mb-1">Starting from</p>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="font-heading text-3xl font-bold text-primary-500">
            {symbol} {price.toLocaleString()}
          </span>
          <span className="text-neutral-500">/day</span>
        </div>

        <p className="text-xs text-neutral-600 mb-6">
          Prices are exclusive of 5% VAT. Terms apply.
        </p>

        <div className="space-y-3 mb-6">
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

        <div>
          <DetailRow
            label="Deposit"
            value={`AED ${rentalTerms.depositAed.toLocaleString()}`}
          />
          <DetailRow
            label="Included Mileage"
            value={`${rentalTerms.includedMileageKmPerDay} km/day`}
          />
          <DetailRow
            label="Extra Mileage"
            value={`AED ${rentalTerms.additionalMileageChargeAed}/km`}
          />
          <DetailRow label="Insurance" value="Included" />
        </div>
      </div>

      <div className="rounded-2xl border border-neutral-800 bg-surface p-6">
        <h3 className="font-heading text-base font-semibold mb-3">Specifications</h3>

        <div>
          <SpecRow icon={<EngineIcon className="w-4 h-4" />} label="Engine" value={specs.engineType} />
          <SpecRow icon={<Gauge className="w-4 h-4" />} label="Power" value={specs.power} />
          <SpecRow icon={<SpeedometerIcon className="w-4 h-4" />} label="0-100 km/h" value={specs.acceleration} />
          <SpecRow icon={<EngineIcon className="w-4 h-4" />} label="Capacity" value={specs.engineCapacity} />
          <SpecRow icon={<MapPin className="w-4 h-4" />} label="Drive Type" value={specs.driveType} />
          <SpecRow icon={<Shield className="w-4 h-4" />} label="Transmission" value={specs.transmission} />
          <SpecRow icon={<CarDoorIcon className="w-4 h-4" />} label="Doors" value={String(specs.doors)} />
          <SpecRow icon={<SeatIcon className="w-4 h-4" />} label="Seats" value={String(specs.seats)} />
          <SpecRow icon={<Shield className="w-4 h-4" />} label="Baggage" value={specs.baggage} />
        </div>
      </div>

      <div className="rounded-2xl border border-neutral-800 bg-surface p-5">
        <h3 className="font-heading text-base font-semibold mb-3">Follow Us</h3>
        <div className="flex items-center gap-3">
          {[
            { href: contactData.socials.facebook, icon: <Facebook className="w-5 h-5" />, label: "Facebook" },
            { href: contactData.socials.instagram, icon: <Instagram className="w-5 h-5" />, label: "Instagram" },
            { href: contactData.socials.youtube, icon: <Youtube className="w-5 h-5" />, label: "YouTube" },
            { href: contactData.socials.tiktok, icon: <TikTokIcon className="w-5 h-5" />, label: "TikTok" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-700 text-neutral-500 transition-colors hover:border-primary-500 hover:text-primary-500"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export { CarPricingCard }
