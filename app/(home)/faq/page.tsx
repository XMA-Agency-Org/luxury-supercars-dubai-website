import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { FaqAccordion } from "../_components/faq-accordion"
import { faqItems } from "../_lib/faq-data"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "FAQ | Luxury Supercars Dubai",
  description:
    "Find answers to frequently asked questions about renting luxury and supercars in Dubai. Learn about requirements, payments, deposits, and more.",
}

export default function FaqPage() {
  return (
    <>
      <PageHero
        tagline="Got Questions?"
        title="Frequently Asked"
        highlightText="Questions"
        description="Everything you need to know about renting luxury cars in Dubai. Can't find what you're looking for? Contact our team directly."
        breadcrumbs={[{ label: "FAQ" }]}
      />
      <FaqAccordion
        items={faqItems}
        title={
          <>
            <span className="text-primary-500">Everything</span> You Need To
            Know About Our <span className="text-primary-500">Services</span>
          </>
        }
        showReadMore={false}
      />
      <CTASection />
    </>
  )
}
