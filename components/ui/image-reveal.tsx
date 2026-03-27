"use client"

import { useRef, type ReactNode } from "react"
import { gsap, useGSAP } from "@/lib/gsap"

type ImageRevealProps = {
  children: ReactNode
  className?: string
  direction?: "left" | "right" | "bottom"
}

function ImageReveal({
  children,
  className,
  direction = "right",
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
      if (prefersReduced) return

      const el = containerRef.current
      if (!el) return

      const clipFrom = {
        left: "inset(0 0 0 100%)",
        right: "inset(0 100% 0 0)",
        bottom: "inset(100% 0 0 0)",
      }

      const img = el.querySelector(".reveal-inner")

      gsap.from(el, {
        clipPath: clipFrom[direction],
        duration: 1.2,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })

      if (img) {
        gsap.from(img, {
          scale: 1.3,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        })
      }
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className={className} style={{ clipPath: "inset(0 0% 0 0)" }}>
      <div className="reveal-inner relative h-full w-full will-change-transform">
        {children}
      </div>
    </div>
  )
}

export { ImageReveal }
