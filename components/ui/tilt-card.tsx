"use client"

import { useRef, useCallback, useEffect, useState, type ReactNode } from "react"

type TiltCardProps = {
  children: ReactNode
  className?: string
  maxTilt?: number
}

function TiltCard({ children, className, maxTilt = 5 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isPointerFine, setIsPointerFine] = useState(false)

  useEffect(() => {
    setIsPointerFine(window.matchMedia("(pointer: fine)").matches)
  }, [])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isPointerFine) return
      const el = cardRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      el.style.transform = `perspective(800px) rotateY(${x * maxTilt}deg) rotateX(${-y * maxTilt}deg)`
    },
    [isPointerFine, maxTilt]
  )

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current
    if (!el) return
    el.style.transition = "transform 0.4s ease"
    el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg)"
    setTimeout(() => {
      if (el) el.style.transition = ""
    }, 400)
  }, [])

  if (!isPointerFine) {
    return <div className={className}>{children}</div>
  }

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
    >
      {children}
    </div>
  )
}

export { TiltCard }
