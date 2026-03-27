"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "@/lib/gsap"

function MagneticCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const isTouch = !window.matchMedia("(pointer: fine)").matches
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    if (isTouch || prefersReduced) return

    setVisible(true)

    const pos = { x: 0, y: 0 }
    const dotPos = { x: 0, y: 0 }
    const ringPos = { x: 0, y: 0 }
    let hovering = false

    const onMouseMove = (e: MouseEvent) => {
      pos.x = e.clientX
      pos.y = e.clientY

      const target = (e.target as HTMLElement)?.closest("[data-magnetic]") as HTMLElement | null
      if (target) {
        const rect = target.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = (e.clientX - cx) * 0.3
        const dy = (e.clientY - cy) * 0.3
        gsap.to(target, { x: dx, y: dy, duration: 0.3, ease: "power2.out" })
        if (!hovering) {
          hovering = true
          gsap.to(ringRef.current, { scale: 2.5, opacity: 0.5, duration: 0.3 })
        }
      } else if (hovering) {
        hovering = false
        document.querySelectorAll("[data-magnetic]").forEach((el) => {
          gsap.to(el, { x: 0, y: 0, duration: 0.3, ease: "power2.out" })
        })
        gsap.to(ringRef.current, { scale: 1, opacity: 1, duration: 0.3 })
      }
    }

    const tick = () => {
      dotPos.x += (pos.x - dotPos.x) * 0.35
      dotPos.y += (pos.y - dotPos.y) * 0.35
      ringPos.x += (pos.x - ringPos.x) * 0.15
      ringPos.y += (pos.y - ringPos.y) * 0.15

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.x}px, ${dotPos.y}px) translate(-50%, -50%)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px) translate(-50%, -50%) scale(${hovering ? 2.5 : 1})`
      }
    }

    gsap.ticker.add(tick)
    window.addEventListener("mousemove", onMouseMove)

    return () => {
      gsap.ticker.remove(tick)
      window.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  if (!visible) return null

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary-400 pointer-events-none z-[9999] mix-blend-difference"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary-400/60 pointer-events-none z-[9999] mix-blend-difference"
        style={{ willChange: "transform" }}
      />
    </>
  )
}

export { MagneticCursor }
