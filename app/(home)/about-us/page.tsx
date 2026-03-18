import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { CeoSection } from "./_components/ceo-section"
import { BusinessCards } from "./_components/business-cards"
import { AboutMeSection } from "./_components/about-me-section"
import { SocialEmbeds } from "./_components/social-embeds"
import { CTASection } from "@/components/sections/cta-section"
import { aboutIntro } from "./_lib/about-data"

export const metadata: Metadata = {
  title: "About Us | Luxury Supercars Dubai",
  description:
    "Learn about Luxury Supercars Dubai — Dubai's premier luxury and supercar rental company. Meet our team and discover our story.",
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        tagline="Who We Are"
        title="About"
        highlightText="Luxury Supercars Dubai"
        description="Dubai's most trusted luxury and supercar rental company. Experience the difference of world-class service."
        breadcrumbs={[{ label: "About Us" }]}
      />
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-4">
            {aboutIntro.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-neutral-500 leading-relaxed text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
      <CeoSection />
      <BusinessCards />
      <SocialEmbeds />
      <AboutMeSection />
      <CTASection />
    </>
  )
}
