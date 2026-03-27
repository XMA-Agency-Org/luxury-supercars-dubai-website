"use client"

import { useRef } from "react"
import Image from "next/image"
import { Instagram } from "lucide-react"
import { gsap, useGSAP } from "@/lib/gsap"
import { Link } from "@/components/ui/link"
import { AnimatedSectionHeading } from "@/components/ui/animated-section-heading"
import { instagramPosts } from "../_lib/instagram-data"
import { contactData } from "../_lib/contact-data"

function InstagramFeed() {
  const gridRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
      if (prefersReduced) return

      const items = gridRef.current?.querySelectorAll(".insta-item")
      if (!items?.length) return

      const centerIndex = Math.floor(items.length / 2)
      const ordered = Array.from(items).sort(
        (a, b) =>
          Math.abs(Array.from(items).indexOf(a) - centerIndex) -
          Math.abs(Array.from(items).indexOf(b) - centerIndex)
      )

      gsap.from(ordered, {
        scale: 0.8,
        opacity: 0,
        stagger: 0.06,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      })
    },
    { scope: gridRef }
  )

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <AnimatedSectionHeading className="mb-10">
          Follow Us on <span className="text-primary-500">Instagram</span>
        </AnimatedSectionHeading>

        <div ref={gridRef} className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {instagramPosts.map((post) => (
            <a
              key={post.href}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={post.caption}
              className="insta-item group relative aspect-square overflow-hidden rounded-xl will-change-transform"
            >
              <Image
                src={post.imagePath}
                alt={post.caption}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-neutral-950/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Instagram className="h-8 w-8 text-neutral-50" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href={contactData.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            variant="cta"
          >
            Follow on Instagram
          </Link>
        </div>
      </div>
    </section>
  )
}

export { InstagramFeed }
