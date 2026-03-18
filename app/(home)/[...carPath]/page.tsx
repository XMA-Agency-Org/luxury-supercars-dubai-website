import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { CarGallery } from "./_components/car-gallery"
import { CarInfo } from "./_components/car-info"
import { CarPricingCard } from "./_components/car-pricing-card"
import { CarInquiryForm } from "./_components/car-inquiry-form"
import { SimilarCars } from "./_components/similar-cars"
import { getAllCars, getCarByHref, getSimilarCars, getBrandFromHref } from "../_lib/car-queries"

type CarDetailPageProps = {
  params: Promise<{ carPath: string[] }>
}

export async function generateStaticParams() {
  return getAllCars().map((car) => ({
    carPath: car.href.split("/").filter(Boolean),
  }))
}

export async function generateMetadata({
  params,
}: CarDetailPageProps): Promise<Metadata> {
  const { carPath } = await params
  const href = `/${carPath.join("/")}`
  const car = getCarByHref(href)
  if (!car) return { title: "Car Not Found" }

  return {
    title: `${car.name} Rental in Dubai | Luxury Supercars Dubai`,
    description: car.description,
  }
}

export default async function CarDetailPage({ params }: CarDetailPageProps) {
  const { carPath } = await params
  const href = `/${carPath.join("/")}`
  const car = getCarByHref(href)
  if (!car) notFound()

  const similarCars = getSimilarCars(car, 4)
  const brandName = getBrandFromHref(car.href)
  const brandSegment = carPath[0]
  const images = car.images.length > 0 ? car.images : [car.imagePath]

  return (
    <>
      <section className="pt-28 md:pt-32 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Our Fleet", href: "/our-fleet" },
              { label: brandName, href: `/brands/${brandSegment}` },
              { label: car.name },
            ]}
            className="mb-4"
          />

          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            {car.name}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
            <div className="space-y-8">
              <CarGallery images={images} carName={car.name} />
              <CarInfo car={car} />
            </div>
            <div className="lg:sticky lg:top-28">
              <CarPricingCard car={car} />
            </div>
          </div>
        </div>
      </section>

      <CarInquiryForm carName={car.name} />
      <SimilarCars cars={similarCars} />
    </>
  )
}
