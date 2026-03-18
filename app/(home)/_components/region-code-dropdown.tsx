"use client"

import { useState } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"
import { REGION_CODES, type RegionCode } from "../_lib/form-data"

const triggerVariants = cva(
  "flex items-center gap-1 rounded-l-lg border border-r-0 border-neutral-700 px-3 h-full text-sm text-neutral-400 transition-colors cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-surface/60 hover:bg-neutral-900/60",
        light: "bg-neutral-900/40 hover:bg-neutral-800/40",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

type RegionCodeDropdownProps = VariantProps<typeof triggerVariants> & {
  selected: RegionCode
  onSelect: (region: RegionCode) => void
}

function RegionCodeDropdown({
  selected,
  onSelect,
  variant,
}: RegionCodeDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={triggerVariants({ variant })}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span>{selected.flag}</span>
        <span>{selected.code}</span>
        <ChevronDown
          className={cn(
            "w-3 h-3 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div
            role="listbox"
            className="absolute top-full left-0 mt-1 z-50 max-h-48 w-36 overflow-y-auto rounded-lg border border-neutral-700 bg-surface py-1 shadow-lg shadow-black/20"
          >
            {REGION_CODES.map((region) => (
              <button
                key={region.code}
                type="button"
                role="option"
                aria-selected={region.code === selected.code}
                onClick={() => {
                  onSelect(region)
                  setIsOpen(false)
                }}
                className={cn(
                  "flex w-full items-center gap-2 px-3 py-1.5 text-sm transition-colors cursor-pointer",
                  region.code === selected.code
                    ? "text-primary-500 bg-neutral-900/50"
                    : "text-neutral-400 hover:bg-neutral-900"
                )}
              >
                <span>{region.flag}</span>
                <span>{region.code}</span>
                <span className="text-neutral-600">{region.country}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export { RegionCodeDropdown }
