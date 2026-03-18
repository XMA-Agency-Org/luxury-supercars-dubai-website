"use client"

import { DayPicker, type DayPickerProps } from "react-day-picker"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

type CalendarProps = DayPickerProps & {
  className?: string
}

function Calendar({ className, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays
      className={cn("p-3", className)}
      classNames={{
        months: "relative",
        month: "space-y-4",
        month_caption: "flex justify-center pt-1 relative items-center h-7",
        caption_label: "text-sm font-medium text-neutral-50",
        nav: "flex items-center justify-between absolute inset-x-1 top-0 z-10",
        button_previous:
          "inline-flex items-center justify-center h-7 w-7 rounded-lg bg-transparent text-neutral-500 hover:text-neutral-50 hover:bg-neutral-900 transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed",
        button_next:
          "inline-flex items-center justify-center h-7 w-7 rounded-lg bg-transparent text-neutral-500 hover:text-neutral-50 hover:bg-neutral-900 transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed",
        month_grid: "w-full border-collapse",
        weekdays: "",
        weekday: "text-neutral-600 font-normal text-[0.8rem] w-9 pb-2",
        week: "",
        weeks: "",
        day: "p-0.5 text-center",
        day_button:
          "inline-flex items-center justify-center h-8 w-8 rounded-lg text-sm font-normal text-neutral-400 cursor-pointer hover:bg-neutral-900 hover:text-neutral-50 transition-colors aria-selected:!bg-primary-500 aria-selected:!text-on-primary aria-selected:!font-medium aria-selected:hover:!bg-primary-400",
        today: "[&>button]:bg-neutral-900 [&>button]:text-neutral-50",
        outside:
          "[&>button]:text-neutral-700 [&>button]:hover:text-neutral-600",
        disabled:
          "[&>button]:text-neutral-700 [&>button]:cursor-not-allowed [&>button]:hover:bg-transparent",
        hidden: "invisible",
        selected: "",
        range_start: "",
        range_middle:
          "[&>button]:!bg-primary-500/20 [&>button]:!text-primary-400 [&>button]:!rounded-none",
        range_end: "",
      }}
      components={{
        Chevron: ({ orientation }) =>
          orientation === "left" ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          ),
      }}
      {...props}
    />
  )
}

export { Calendar }
export type { CalendarProps }
