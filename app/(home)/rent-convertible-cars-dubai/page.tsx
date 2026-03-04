import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { CarTypePageContent } from "../_components/car-type-page"
import { CTASection } from "@/components/sections/cta-section"
import { carTypePages } from "../_lib/car-type-page-data"

const config = carTypePages["rent-convertible-cars-dubai"]

export const metadata: Metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
}

export default function RentConvertibleCarsPage() {
  return (
    <>
      <PageHero
        tagline="Convertible Cars"
        title={config.title}
        highlightText={config.highlightText}
        description={config.description}
        breadcrumbs={[{ label: "Convertible Cars" }]}
      />
      <CarTypePageContent categorySlug={config.categorySlug} />
      <CTASection />
    </>
  )
}
