"use client"

import Image from "next/image"
import NextLink from "next/link"
import { ScrollVelocityRow } from "@/components/ui/scroll-velocity"
import type { Brand } from "../_lib/brand-data"

type BrandMarqueeProps = {
  brands: Brand[]
}

function BrandLogo({ brand }: { brand: Brand }) {
  return (
    <NextLink
      href={brand.href}
      className="flex-shrink-0 w-24 h-16 relative block mx-6"
    >
      <Image
        src={brand.logoPath}
        alt={brand.name}
        fill
        className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
        sizes="96px"
      />
    </NextLink>
  )
}

export function BrandMarquee({ brands }: BrandMarqueeProps) {
  return (
    <section className="w-full py-12 bg-neutral-900/80">
      <ScrollVelocityRow baseVelocity={3} direction={1}>
        <div className="flex items-center">
          {brands.map((brand) => (
            <BrandLogo key={brand.name} brand={brand} />
          ))}
        </div>
      </ScrollVelocityRow>
    </section>
  )
}
