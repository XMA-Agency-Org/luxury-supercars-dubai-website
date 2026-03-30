"use client"

import { type ReactNode } from "react"
import { motion, useReducedMotion } from "motion/react"

type ClipRevealOnScrollProps = {
  children: ReactNode
  className?: string
  direction?: "left" | "right" | "bottom"
}

const clipPaths: Record<string, { hidden: string; visible: string }> = {
  left: {
    hidden: "inset(0 100% 0 0)",
    visible: "inset(0 0% 0 0)",
  },
  right: {
    hidden: "inset(0 0 0 100%)",
    visible: "inset(0 0 0 0%)",
  },
  bottom: {
    hidden: "inset(0 0 100% 0)",
    visible: "inset(0 0 0% 0)",
  },
}

const revealTransition = {
  duration: 0.6,
  ease: [0.32, 0.72, 0, 1] as const,
}

function ClipRevealOnScroll({ children, className, direction = "left" }: ClipRevealOnScrollProps) {
  const shouldReduceMotion = useReducedMotion()
  const paths = clipPaths[direction]

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ clipPath: paths.hidden }}
      whileInView={{ clipPath: paths.visible }}
      viewport={{ once: true, margin: "-100px" }}
      transition={revealTransition}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export { ClipRevealOnScroll }
