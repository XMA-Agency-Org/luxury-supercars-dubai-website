"use client"

import { useEffect, useCallback } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"
import { BookingForm } from "./booking-form"

type BookingBottomSheetProps = {
  isOpen: boolean
  onClose: () => void
}

const sheetEasing = [0.22, 1, 0.36, 1] as const

function BookingBottomSheet({ isOpen, onClose }: BookingBottomSheetProps) {
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen, onClose])

  const handleDragEnd = useCallback(
    (_: unknown, info: { velocity: { y: number }; offset: { y: number } }) => {
      if (info.velocity.y > 300 || info.offset.y > 150) {
        onClose()
      }
    },
    [onClose]
  )

  const animationProps = shouldReduceMotion
    ? {}
    : {
        initial: { y: "100%" },
        animate: { y: 0 },
        exit: { y: "100%" },
        transition: { duration: 0.4, ease: sheetEasing },
      }

  const backdropAnimation = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3 },
      }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Booking form">
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            {...backdropAnimation}
          />

          <motion.div
            className="absolute bottom-0 left-0 right-0 rounded-t-3xl bg-surface/95 backdrop-blur-lg border-t border-neutral-800"
            style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
            drag="y"
            dragConstraints={{ top: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            {...animationProps}
          >
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-10 h-1 rounded-full bg-neutral-600" />
            </div>

            <div className="px-6 pb-6">
              <h2 className="font-heading text-xl font-bold text-neutral-50 mb-4">
                Book Your Ride
              </h2>

              <div className="max-h-[65vh] overflow-y-auto">
                <BookingForm variant="embedded" />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  )
}

export { BookingBottomSheet }
