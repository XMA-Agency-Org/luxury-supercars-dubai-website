import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { TermsContent } from "./_components/terms-content"

export const metadata: Metadata = {
  title: "Terms and Conditions | Luxury Supercars Dubai",
  description:
    "Read the terms and conditions for renting luxury cars from Luxury Supercars Dubai. Understand our rental policies and requirements.",
}

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHero
        title="Terms and"
        highlightText="Conditions"
        breadcrumbs={[{ label: "Terms and Conditions" }]}
      />
      <TermsContent />
    </>
  )
}
