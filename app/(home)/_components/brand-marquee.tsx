import Image from "next/image"
import NextLink from "next/link"
import type { Brand } from "../_lib/brand-data"

type BrandMarqueeProps = {
  brands: Brand[]
}

function BrandLogo({ brand }: { brand: Brand }) {
  return (
    <NextLink
      href={brand.href}
      className="flex-shrink-0 w-24 h-16 relative block"
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
    <section className="w-full py-12 bg-neutral-900/50">
      <div className="overflow-hidden">
        <div className="flex gap-12 animate-marquee hover:[animation-play-state:paused]">
          {brands.map((brand) => (
            <BrandLogo key={`first-${brand.name}`} brand={brand} />
          ))}
          <div aria-hidden="true" className="contents">
            {brands.map((brand) => (
              <BrandLogo key={`second-${brand.name}`} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
