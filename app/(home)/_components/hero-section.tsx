"use client"

import { useRef } from "react"
import NextLink from "next/link"
import { cn } from "@/lib/utils"
import { gsap, useGSAP } from "@/lib/gsap"
import { buttonVariants } from "@/components/ui/button-variants"
import { BookingForm } from "./booking-form"
import {
  HeroSlideshow,
  AnimatedGoldLabel,
  AnimatedHeadline,
  AnimatedHeroContent,
  AnimatedHeroChild,
  AnimatedBookingForm,
  HeroParallaxWrapper,
  ScrollIndicator,
  type WordSegment,
} from "./animated-hero-content"
import { MobileBookingTrigger } from "./mobile-booking-trigger"

const HEADLINE_SEGMENTS: WordSegment[] = [
  { text: "Rent a ", isAccent: false },
  { text: "Luxury ", isAccent: true },
  { text: "Car in ", isAccent: false },
  { text: "Dubai", isAccent: true },
]

function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
      if (prefersReduced) return

      gsap.to(contentRef.current, {
        opacity: 0,
        scale: 0.95,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "30% top",
          end: "bottom top",
          scrub: true,
        },
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="hero-section"
      className="relative min-h-[100dvh] lg:min-h-[85vh] flex items-center overflow-clip"
    >
      <HeroParallaxWrapper>
        <div className="absolute inset-0 lg:hidden">
          <HeroSlideshow isMobile />
        </div>
        <div className="absolute inset-0 hidden lg:block">
          <HeroSlideshow isMobile={false} />
        </div>
      </HeroParallaxWrapper>

      <div
        className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_50%,oklch(0.15_0_0/0.6),transparent)]"
        aria-hidden="true"
      />

      <div ref={contentRef} className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 will-change-transform">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <AnimatedGoldLabel>
              Dubai&apos;s Premier Supercar Rental
            </AnimatedGoldLabel>
            <AnimatedHeadline segments={HEADLINE_SEGMENTS} />

            <AnimatedHeroContent>
              <AnimatedHeroChild>
                <p className="max-w-xl text-lg leading-relaxed text-white/80 mt-6">
                  Dubai&apos;s Most Trusted Supercar Rentals. Premium Services
                  with 24/7 Support and Free Delivery Across Dubai.
                </p>
              </AnimatedHeroChild>

              <AnimatedHeroChild>
                <div className="flex flex-wrap gap-4 pt-2 mt-6">
                  <div className="lg:hidden">
                    <MobileBookingTrigger />
                  </div>
                  <NextLink
                    href="/our-fleet"
                    className={cn(
                      buttonVariants({ intent: "primary", size: "lg" }),
                      "hidden lg:inline-flex"
                    )}
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
          </div>

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
