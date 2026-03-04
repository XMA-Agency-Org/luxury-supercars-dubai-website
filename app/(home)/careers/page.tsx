import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { CareersContent } from "./_components/careers-content"

export const metadata: Metadata = {
  title: "Careers | Luxury Supercars Dubai",
  description:
    "Join the Luxury Supercars Dubai team. Explore career opportunities in Dubai's premier luxury car rental company.",
}

export default function CareersPage() {
  return (
    <>
      <PageHero
        tagline="Join Our Team"
        title="Careers at"
        highlightText="Luxury Supercars Dubai"
        description="Be part of Dubai's most exciting luxury automotive company."
        breadcrumbs={[{ label: "Careers" }]}
      />
      <CareersContent />
    </>
  )
}
