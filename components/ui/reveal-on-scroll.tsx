"use client"

import { type ReactNode } from "react"
import { motion, useReducedMotion } from "motion/react"

type RevealOnScrollProps = {
  children: ReactNode
  delay?: number
  className?: string
}

const revealTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as const,
}

function RevealOnScroll({ children, delay = 0, className }: RevealOnScrollProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ ...revealTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export { RevealOnScroll }
