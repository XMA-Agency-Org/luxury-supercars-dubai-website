"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BookingBottomSheet } from "./booking-bottom-sheet"

function MobileBookingTrigger() {
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  return (
    <>
      <Button
        intent="primary"
        size="lg"
        onClick={() => setIsSheetOpen(true)}
      >
        Book Now
      </Button>

      <BookingBottomSheet
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
      />
    </>
  )
}

export { MobileBookingTrigger }
