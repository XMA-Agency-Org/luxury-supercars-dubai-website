"use client"

import { useState, useRef, useEffect } from "react"
import { useCurrency } from "@/app/(home)/_lib/currency-context"
import type { Currency } from "@/app/(home)/_types/car"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const CURRENCIES: { value: Currency; label: string }[] = [
  { value: "AED", label: "AED" },
  { value: "USD", label: "USD" },
  { value: "EUR", label: "EUR" },
  { value: "GBP", label: "GBP" },
]

export function CurrencySelector() {
  const { currency, setCurrency } = useCurrency()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1.5 text-sm font-cta font-medium text-neutral-300 transition-colors duration-200 hover:text-primary-500 cursor-pointer"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select currency"
      >
        {currency}
        <ChevronDown
          className={cn(
            "w-3.5 h-3.5 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        role="listbox"
        aria-label="Available currencies"
        className={cn(
          "absolute top-full right-0 mt-2 min-w-20 rounded-lg border border-neutral-800 bg-neutral-900 py-1 shadow-xl transition-all duration-200 z-50",
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-1 pointer-events-none"
        )}
      >
        {CURRENCIES.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            role="option"
            aria-selected={value === currency}
            onClick={() => {
              setCurrency(value)
              setIsOpen(false)
            }}
            className={cn(
              "w-full px-3 py-1.5 text-left text-sm font-cta transition-colors duration-150 cursor-pointer",
              value === currency
                ? "text-primary-500 bg-neutral-800/50"
                : "text-neutral-400 hover:text-neutral-50 hover:bg-neutral-800/30"
            )}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
