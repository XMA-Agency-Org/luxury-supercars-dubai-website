"use client"

import { useRef } from "react"
import { gsap, useGSAP } from "@/lib/gsap"

type SplitTextProps = {
  children: string
  className?: string
  as?: "h1" | "h2" | "h3" | "span"
  stagger?: number
  trigger?: "scroll" | "mount"
  start?: string
  highlightWords?: string[]
  highlightClassName?: string
}

function SplitText({
  children,
  className,
  as: Tag = "span",
  stagger = 0.04,
  trigger = "mount",
  start = "top 85%",
  highlightWords = [],
  highlightClassName = "text-primary-400",
}: SplitTextProps) {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
      if (prefersReduced) return

      const words = containerRef.current?.querySelectorAll(".split-word")
      if (!words?.length) return

      const animProps = {
        y: "100%",
        opacity: 0,
        rotateX: -40,
      }

      if (trigger === "scroll") {
        gsap.from(words, {
          ...animProps,
          stagger,
          duration: 0.8,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start,
            toggleActions: "play none none none",
          },
        })
      } else {
        gsap.from(words, {
          ...animProps,
          stagger,
          duration: 0.8,
          ease: "power4.out",
          delay: 0.2,
        })
      }
    },
    { scope: containerRef }
  )

  const tokens = children.split(/(\s+)/)
  const highlightSet = new Set(highlightWords.map((w) => w.toLowerCase()))

  return (
    <Tag ref={containerRef as React.Ref<never>} className={className} style={{ perspective: "600px" }}>
      {tokens.map((token, i) =>
        token.match(/^\s+$/) ? (
          <span key={i}>{token}</span>
        ) : (
          <span key={i} className="inline-block overflow-hidden align-bottom">
            <span
              className={`split-word inline-block will-change-transform ${highlightSet.has(token.toLowerCase()) ? highlightClassName : ""}`}
              style={{ transformOrigin: "center bottom" }}
            >
              {token}
            </span>
          </span>
        )
      )}
    </Tag>
  )
}

export { SplitText }
