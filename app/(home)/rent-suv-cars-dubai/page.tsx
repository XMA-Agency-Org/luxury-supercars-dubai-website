import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { CarTypePageContent } from "../_components/car-type-page"
import { CTASection } from "@/components/sections/cta-section"
import { carTypePages } from "../_lib/car-type-page-data"

const config = carTypePages["rent-suv-cars-dubai"]

export const metadata: Metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
}

export default function RentSuvCarsPage() {
  return (
    <>
      <PageHero
        tagline="SUVs"
        title={config.title}
        highlightText={config.highlightText}
        description={config.description}
        breadcrumbs={[{ label: "SUVs" }]}
      />
      <CarTypePageContent categorySlug={config.categorySlug} />
      <CTASection />
    </>
  )
}
