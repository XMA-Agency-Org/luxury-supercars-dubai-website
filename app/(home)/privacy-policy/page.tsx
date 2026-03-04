import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { PrivacyContent } from "./_components/privacy-content"

export const metadata: Metadata = {
  title: "Privacy Policy | Luxury Supercars Dubai",
  description:
    "Read our privacy policy to understand how Luxury Supercars Dubai collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy"
        highlightText="Policy"
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />
      <PrivacyContent />
    </>
  )
}
