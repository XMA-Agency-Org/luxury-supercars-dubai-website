"use client"

import { useRef, type ReactNode } from "react"
import { gsap, useGSAP } from "@/lib/gsap"
import { cn } from "@/lib/utils"

type AnimatedSectionHeadingProps = {
  children: ReactNode
  className?: string
}

function AnimatedSectionHeading({
  children,
  className,
}: AnimatedSectionHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
      if (prefersReduced) return

      const el = headingRef.current
      if (!el) return

      const childNodes = Array.from(el.childNodes)

      el.innerHTML = ""

      childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          const words = node.textContent?.split(/(\s+)/) || []
          words.forEach((word) => {
            if (word.match(/^\s+$/)) {
              el.appendChild(document.createTextNode(word))
            } else if (word) {
              const wrapper = document.createElement("span")
              wrapper.className = "inline-block overflow-hidden align-bottom"
              const inner = document.createElement("span")
              inner.className = "anim-word inline-block will-change-transform"
              inner.style.transformOrigin = "center bottom"
              inner.textContent = word
              wrapper.appendChild(inner)
              el.appendChild(wrapper)
            }
          })
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const span = node as HTMLElement
          const words = span.textContent?.split(/(\s+)/) || []
          words.forEach((word) => {
            if (word.match(/^\s+$/)) {
              el.appendChild(document.createTextNode(word))
            } else if (word) {
              const wrapper = document.createElement("span")
              wrapper.className = "inline-block overflow-hidden align-bottom"
              const inner = document.createElement("span")
              inner.className = `anim-word inline-block will-change-transform ${span.className}`
              inner.style.transformOrigin = "center bottom"
              inner.textContent = word
              wrapper.appendChild(inner)
              el.appendChild(wrapper)
            }
          })
        }
      })

      const animWords = el.querySelectorAll(".anim-word")

      gsap.from(animWords, {
        y: "100%",
        opacity: 0,
        rotateX: -30,
        stagger: 0.04,
        duration: 0.7,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      })
    },
    { scope: headingRef }
  )

  return (
    <h2
      ref={headingRef}
      className={cn(
        "font-heading text-3xl md:text-4xl lg:text-5xl font-bold",
        className
      )}
      style={{ perspective: "600px" }}
    >
      {children}
    </h2>
  )
}

export { AnimatedSectionHeading }
