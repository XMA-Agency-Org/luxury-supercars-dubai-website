import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { ContactInfoCards } from "./_components/contact-info-cards"
import { ContactPageForm } from "./_components/contact-page-form"
import { BusinessHours } from "./_components/business-hours"
import { MapEmbed } from "./_components/map-embed"

export const metadata: Metadata = {
  title: "Contact Us | Luxury Supercars Dubai",
  description:
    "Get in touch with Luxury Supercars Dubai. Call, WhatsApp, or visit our showroom. We're available 7 days a week.",
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        tagline="Get In Touch"
        title="Contact"
        highlightText="Us"
        description="Have a question or want to book a car? Reach out to our team and we'll get back to you as soon as possible."
        breadcrumbs={[{ label: "Contact Us" }]}
      />
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfoCards />
            <div className="rounded-2xl border border-neutral-800 bg-surface/80 backdrop-blur-lg p-6 md:p-8">
              <h2 className="font-heading text-2xl font-bold mb-6">
                Send Us a Message
              </h2>
              <ContactPageForm />
            </div>
          </div>
        </div>
      </section>
      <BusinessHours />
      <MapEmbed />
    </>
  )
}
