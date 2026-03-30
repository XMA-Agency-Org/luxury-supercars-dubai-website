"use client"

import { type ReactNode } from "react"
import { motion, useReducedMotion } from "motion/react"

type RevealOnScrollProps = {
  children: ReactNode
  delay?: number
  className?: string
}

const revealTransition = {
  duration: 0.4,
  ease: [0.32, 0.72, 0, 1] as const,
}

function RevealOnScroll({ children, delay = 0, className }: RevealOnScrollProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ ...revealTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export { RevealOnScroll }
