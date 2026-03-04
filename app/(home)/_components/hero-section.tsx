import Image from "next/image"
import NextLink from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button-variants"
import { BookingForm } from "./booking-form"

function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      <Image
        src="/images/hero/hero-bg.webp"
        alt="Luxury supercar in Dubai"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-r from-neutral-950 via-neutral-950/0 to-neutral-950" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <h1 className="font-heading text-4xl font-bold leading-tight text-neutral-50 md:text-5xl lg:text-6xl">
              Are You Looking To Rent{" "}
              <span className="text-primary-500">Luxury</span> Car In{" "}
              <span className="text-primary-500">Dubai?</span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-neutral-300">
              Dubai&apos;s Most Trusted Supercar Rentals. Premium Services with
              24/7 Support and Free Delivery Across Dubai.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <NextLink
                href="/our-fleet"
                className={cn(buttonVariants({ intent: "primary", size: "lg" }))}
              >
                Rent A Car
              </NextLink>
              <NextLink
                href="/contact-us"
                className={cn(
                  buttonVariants({ intent: "secondary", size: "lg" })
                )}
              >
                Contact Us
              </NextLink>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="w-full max-w-md">
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { HeroSection }
