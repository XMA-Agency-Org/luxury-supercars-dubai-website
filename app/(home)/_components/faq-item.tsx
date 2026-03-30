"use client"

import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"
import { Plus } from "lucide-react"

type FaqItemProps = {
  id: string
  question: string
  answer: string
}

const expandTransition = {
  height: { duration: 0.3, ease: [0.32, 0.72, 0, 1] as const },
  opacity: { duration: 0.2 },
}

function FaqItem({ id, question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const triggerId = `faq-trigger-${id}`
  const panelId = `faq-panel-${id}`

  const transition = shouldReduceMotion
    ? { height: { duration: 0 }, opacity: { duration: 0 } }
    : expandTransition

  return (
    <div className="border-b border-neutral-800">
      <button
        id={triggerId}
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        className="flex w-full items-center justify-between py-5 cursor-pointer"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="text-neutral-50 font-medium text-left pr-4">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
          className="shrink-0"
        >
          <Plus className="w-5 h-5 text-primary-500" />
        </motion.span>
      </button>
      <div id={panelId} role="region" aria-labelledby={triggerId}>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={transition}
              className="overflow-hidden"
            >
              <p className="text-neutral-500 text-sm pb-5 leading-relaxed">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export { FaqItem }
