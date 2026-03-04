import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { CarTypePageContent } from "../_components/car-type-page"
import { CTASection } from "@/components/sections/cta-section"
import { carTypePages } from "../_lib/car-type-page-data"

const config = carTypePages["rent-sports-cars-dubai"]

export const metadata: Metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
}

export default function RentSportsCarsPage() {
  return (
    <>
      <PageHero
        tagline="Sports Cars"
        title={config.title}
        highlightText={config.highlightText}
        description={config.description}
        breadcrumbs={[{ label: "Sports Cars" }]}
      />
      <CarTypePageContent categorySlug={config.categorySlug} />
      <CTASection />
    </>
  )
}
