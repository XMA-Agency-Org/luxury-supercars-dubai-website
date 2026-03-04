"use client"

import { useState } from "react"
import { CalendarIcon } from "lucide-react"
import type { Matcher } from "react-day-picker"
import { cn } from "@/lib/utils"
import { Popover, PopoverTrigger, PopoverContent } from "./popover"
import { Calendar } from "./calendar"

type DatePickerProps = {
  value?: Date
  onChange?: (date: Date | undefined) => void
  placeholder?: string
  className?: string
  disabled?: boolean
  disabledDays?: Matcher | Matcher[]
}

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date)
}

function DatePicker({
  value,
  onChange,
  placeholder = "Select date",
  className,
  disabled,
  disabledDays,
}: DatePickerProps) {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          disabled={disabled}
          className={cn(
            "w-full rounded-lg bg-neutral-800/60 border border-neutral-700 px-4 py-2.5 text-sm text-left outline-none transition-all duration-200 focus:border-primary-500 cursor-pointer flex items-center gap-2",
            value ? "text-neutral-50" : "text-neutral-500",
            disabled && "opacity-50 cursor-not-allowed",
            className
          )}
        >
          <CalendarIcon className="h-4 w-4 shrink-0 text-neutral-500" />
          {value ? formatDate(value) : placeholder}
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={(date) => {
            onChange?.(date)
            setOpen(false)
          }}
          disabled={disabledDays}
          defaultMonth={value}
        />
      </PopoverContent>
    </Popover>
  )
}

export { DatePicker }
