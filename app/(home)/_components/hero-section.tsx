import Image from "next/image"
import NextLink from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button-variants"
import { BookingForm } from "./booking-form"
import {
  AnimatedHeroContent,
  AnimatedHeroChild,
  AnimatedBookingForm,
  ScrollIndicator,
} from "./animated-hero-content"
import { MobileBookingTrigger } from "./mobile-booking-trigger"

function HeroSection() {
  return (
    <section id="hero-section" className="relative min-h-[100dvh] lg:min-h-[85vh] flex items-center">
      <Image
        src="/hero-mobile.jpg"
        alt="Luxury supercar in Dubai"
        fill
        priority
        className="object-cover lg:hidden"
      />
      <Image
        src="/Hero-3.png"
        alt="Luxury supercar in Dubai"
        fill
        priority
        className="object-cover hidden lg:block"
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <AnimatedHeroContent>
            <AnimatedHeroChild className="drop-shadow-[0_2px_12px_oklch(0.15_0_0/0.6)]">
              <h1 className="font-heading text-5xl font-bold tracking-tight leading-[1.05] text-white md:text-6xl lg:text-7xl">
                Rent a{" "}
                <span className="text-primary-400">Luxury</span> Car in{" "}
                <span className="text-primary-400">Dubai</span>
              </h1>
            </AnimatedHeroChild>

            <AnimatedHeroChild>
              <p className="max-w-xl text-lg leading-relaxed text-white/80 mt-6">
                Dubai&apos;s Most Trusted Supercar Rentals. Premium Services with
                24/7 Support and Free Delivery Across Dubai.
              </p>
            </AnimatedHeroChild>

            <AnimatedHeroChild>
              <div className="flex flex-wrap gap-4 pt-2 mt-6">
                <div className="lg:hidden">
                  <MobileBookingTrigger />
                </div>
                <NextLink
                  href="/our-fleet"
                  className={cn(buttonVariants({ intent: "primary", size: "lg" }), "hidden lg:inline-flex")}
                >
                  Rent A Car
                </NextLink>
                <NextLink
                  href="/contact-us"
                  className={cn(
                    buttonVariants({ intent: "secondary", size: "lg" }),
                    "border-white/40 text-white hover:border-primary-500 hover:text-primary-500"
                  )}
                >
                  Contact Us
                </NextLink>
              </div>
            </AnimatedHeroChild>
          </AnimatedHeroContent>

          <div className="hidden lg:flex justify-end">
            <div className="w-full max-w-md">
              <AnimatedBookingForm>
                <BookingForm />
              </AnimatedBookingForm>
            </div>
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  )
}

export { HeroSection }
