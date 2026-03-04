"use client"

import { cn } from "@/lib/utils"
import { PhoneIcon } from "@/components/icons/phone-icon"
import { contactData } from "@/app/(home)/_lib/contact-data"

export function FloatingCallButton() {
  const primaryPhone = contactData.phones[0]

  return (
    <a
      href={primaryPhone.href}
      aria-label={`Call us at ${primaryPhone.label}`}
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2"
    >
      <div className="relative flex items-center">
        <div className="absolute inset-0 rounded-full bg-success-500 opacity-40 animate-pulse-ring" />
        <div
          className={cn(
            "relative flex items-center justify-center rounded-full bg-success-500 text-neutral-50 shadow-lg",
            "h-14 w-14 md:h-14 md:w-14"
          )}
        >
          <PhoneIcon className="h-6 w-6" />
        </div>
      </div>
      <span className="rounded-full bg-success-500 px-4 py-2 text-sm font-semibold text-neutral-50 shadow-lg md:hidden">
        Call Now
      </span>
    </a>
  )
}
