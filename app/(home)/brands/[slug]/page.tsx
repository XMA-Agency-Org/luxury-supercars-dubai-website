import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { PageHero } from "@/components/sections/page-hero"
import { BrandCarGrid } from "./_components/brand-car-grid"
import { BrandDescription } from "./_components/brand-description"
import { CTASection } from "@/components/sections/cta-section"
import { brandPages, getBrandPageSlugs } from "../../_lib/brand-page-data"

type BrandPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getBrandPageSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: BrandPageProps): Promise<Metadata> {
  const { slug } = await params
  const config = brandPages[slug]
  if (!config) return { title: "Brand Not Found" }

  return {
    title: config.metaTitle,
    description: config.metaDescription,
  }
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { slug } = await params
  const config = brandPages[slug]
  if (!config) notFound()

  return (
    <>
      <PageHero
        tagline={config.name}
        title={`Rent ${config.name}`}
        highlightText="in Dubai"
        description={config.description}
        breadcrumbs={[
          { label: "Brands", href: "/our-fleet" },
          { label: config.name },
        ]}
      />
      <BrandCarGrid brandSlug={slug} />
      <BrandDescription name={config.name} description={config.description} />
      <CTASection />
    </>
  )
}
