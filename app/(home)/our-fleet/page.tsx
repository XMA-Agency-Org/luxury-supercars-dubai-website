import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { FleetGrid } from "./_components/fleet-grid"
import { BrandMarquee } from "../_components/brand-marquee"
import { GoogleReviews } from "../_components/google-reviews"
import { ContactInfoBar } from "../_components/contact-info-bar"
import { brands } from "../_lib/brand-data"
import { googleReviews } from "../_lib/testimonial-data"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Our Fleet | Luxury Supercars Dubai",
  description:
    "Browse our complete fleet of luxury supercars, convertibles, SUVs, and more available for rent in Dubai.",
}

export default function OurFleetPage() {
  return (
    <>
      <PageHero
        tagline="Browse Our Collection"
        title="Our"
        highlightText="Fleet"
        description="Explore our handpicked collection of the world's most prestigious luxury and supercars available for rent in Dubai."
        breadcrumbs={[{ label: "Our Fleet" }]}
      />
      <FleetGrid />
      <BrandMarquee brands={brands} />
      <GoogleReviews googleReviews={googleReviews} />
      <ContactInfoBar />
      <CTASection />
    </>
  )
}
