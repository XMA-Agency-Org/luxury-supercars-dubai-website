import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { ServicesGrid } from "./_components/services-grid"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Services | Luxury Supercars Dubai",
  description:
    "Explore our premium services including gift vouchers, chauffeur service, long-term rentals, and wedding car hire in Dubai.",
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        tagline="What We Offer"
        title="Our"
        highlightText="Services"
        description="From chauffeur services to wedding cars, we offer a range of premium services to make your experience unforgettable."
        breadcrumbs={[{ label: "Services" }]}
      />
      <ServicesGrid />
      <CTASection />
    </>
  )
}
