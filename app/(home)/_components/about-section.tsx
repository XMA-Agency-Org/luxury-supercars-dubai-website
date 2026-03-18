import Image from "next/image"
import NextLink from "next/link"
import { SectionHeading } from "@/components/ui/section-heading"
import { buttonVariants } from "@/components/ui/button-variants"
import { cn } from "@/lib/utils"

function AboutSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col justify-center space-y-6">
          <SectionHeading>
            Luxury <span className="text-primary-500">Supercars</span> Dubai:
            Your <span className="text-primary-500">Premier</span> Luxury Car
            Rental Service in{" "}
            <span className="text-primary-500">Dubai, UAE</span>
          </SectionHeading>

          <p className="leading-relaxed text-neutral-400">
            When it comes to Luxury Car Rental in Dubai, Luxury Supercars Dubai
            is your ultimate destination. We pride ourselves on offering a
            premium selection of world-class vehicles, allowing you to immerse
            yourself in Dubai&apos;s vibrant and luxurious lifestyle in the most
            sophisticated way imaginable. With the largest fleet and showroom of
            luxury cars in the city, we provide an unrivaled variety of options
            to cater to your every need.
          </p>

          <p className="leading-relaxed text-neutral-400">
            Dubai is a city synonymous with opulence, and there&apos;s no better
            way to explore its iconic landmarks and breathtaking skyline than
            behind the wheel of a prestigious luxury car. At Luxury Supercars
            Dubai, we feature an exclusive collection from top-tier brands like
            Lamborghini, Ferrari, Porsche, Bentley, and Mercedes-Benz. Whether
            you&apos;re here for business, leisure, or a special event, our
            fleet of the latest models ensures a driving experience that
            epitomizes comfort, performance, and elegance.
          </p>

          <div className="pt-2">
            <NextLink
              href="/our-fleet"
              className={cn(
                buttonVariants({ intent: "primary", size: "md" })
              )}
            >
              Details
            </NextLink>
          </div>
        </div>

        <div className="relative min-h-[400px] lg:min-h-0">
          <Image
            src="/images/about/showroom.webp"
            alt="Luxury Supercars Dubai showroom"
            fill
            className="rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export { AboutSection }
