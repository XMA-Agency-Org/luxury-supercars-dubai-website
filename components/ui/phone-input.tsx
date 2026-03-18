"use client"

import { useState, forwardRef, useEffect, useMemo } from "react"
import parsePhoneNumber, { isValidPhoneNumber } from "libphonenumber-js"
import { CircleFlag } from "react-circle-flags"
import { countries } from "country-data-list"
import { lookup } from "country-data-list"
import { Command } from "cmdk"
import { cva, type VariantProps } from "class-variance-authority"
import { z } from "zod"
import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { GlobeIcon, CheckIcon, SearchIcon } from "lucide-react"

export const phoneSchema = z.string().refine((value) => {
  try {
    return isValidPhoneNumber(value)
  } catch {
    return false
  }
}, "Invalid phone number")

export type CountryData = {
  alpha2: string
  alpha3: string
  countryCallingCodes: string[]
  currencies: string[]
  emoji?: string
  ioc: string
  languages: string[]
  name: string
  status: string
}

const phoneInputVariants = cva(
  "flex items-center gap-1.5 rounded-lg text-sm transition-all duration-200 has-[input:focus]:border-primary-500",
  {
    variants: {
      variant: {
        default:
          "bg-surface/60 border border-neutral-700 text-neutral-50 has-[input:focus]:bg-surface",
        light:
          "bg-neutral-900/60 border border-neutral-700 text-neutral-50 has-[input:focus]:bg-neutral-900",
        surface:
          "bg-surface border border-neutral-700 text-neutral-50 has-[input:focus]:border-primary-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const allCountries: CountryData[] = countries.all.filter(
  (c: CountryData) =>
    c.status !== "deleted" &&
    c.countryCallingCodes?.length > 0 &&
    c.alpha2 &&
    c.name
)

interface PhoneInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onCountryChange?: (data: CountryData | undefined) => void
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  defaultCountry?: string
  className?: string
  variant?: VariantProps<typeof phoneInputVariants>["variant"]
}

export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  (
    {
      className,
      onCountryChange,
      onChange,
      value,
      placeholder,
      defaultCountry,
      variant,
      ...props
    },
    ref
  ) => {
    const [countryData, setCountryData] = useState<CountryData | undefined>()
    const [displayFlag, setDisplayFlag] = useState("")
    const [hasInitialized, setHasInitialized] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)

    useEffect(() => {
      if (defaultCountry) {
        const newCountryData = lookup.countries({
          alpha2: defaultCountry.toLowerCase(),
        })[0]
        setCountryData(newCountryData)
        setDisplayFlag(defaultCountry.toLowerCase())

        if (
          !hasInitialized &&
          newCountryData?.countryCallingCodes?.[0] &&
          !value
        ) {
          const syntheticEvent = {
            target: { value: newCountryData.countryCallingCodes[0] },
          } as React.ChangeEvent<HTMLInputElement>
          onChange?.(syntheticEvent)
          setHasInitialized(true)
        }
      }
    }, [defaultCountry, onChange, value, hasInitialized])

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let newValue = e.target.value

      if (!newValue.startsWith("+")) {
        newValue = newValue.startsWith("00")
          ? "+" + newValue.slice(2)
          : "+" + newValue
      }

      try {
        const parsed = parsePhoneNumber(newValue)

        if (parsed?.country) {
          const countryCode = parsed.country
          setDisplayFlag("")
          setTimeout(() => setDisplayFlag(countryCode.toLowerCase()), 0)

          const countryInfo = lookup.countries({ alpha2: countryCode })[0]
          setCountryData(countryInfo)
          onCountryChange?.(countryInfo)

          const syntheticEvent = {
            ...e,
            target: { ...e.target, value: parsed.number },
          } as React.ChangeEvent<HTMLInputElement>
          onChange?.(syntheticEvent)
        } else {
          onChange?.(e)
          setDisplayFlag("")
          setCountryData(undefined)
          onCountryChange?.(undefined)
        }
      } catch {
        onChange?.(e)
        setDisplayFlag("")
        setCountryData(undefined)
        onCountryChange?.(undefined)
      }
    }

    const handleCountrySelect = (country: CountryData) => {
      setCountryData(country)
      setDisplayFlag(country.alpha2.toLowerCase())
      onCountryChange?.(country)
      setDropdownOpen(false)

      const callingCode = country.countryCallingCodes[0]
      if (callingCode) {
        const syntheticEvent = {
          target: { value: callingCode },
        } as React.ChangeEvent<HTMLInputElement>
        onChange?.(syntheticEvent)
      }
    }

    const sortedCountries = useMemo(
      () => [...allCountries].sort((a, b) => a.name.localeCompare(b.name)),
      []
    )

    return (
      <div className={cn(phoneInputVariants({ variant }), className)}>
        <Popover open={dropdownOpen} onOpenChange={setDropdownOpen}>
          <PopoverTrigger asChild>
            <button
              type="button"
              className="flex items-center gap-1 pl-2.5 pr-1 py-2.5 shrink-0 cursor-pointer rounded-l-lg hover:bg-neutral-800/30 transition-colors -ml-px -my-px"
            >
              <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center">
                {displayFlag ? (
                  <CircleFlag countryCode={displayFlag} height={20} />
                ) : (
                  <GlobeIcon className="w-4 h-4 text-neutral-600" />
                )}
              </div>
            </button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="w-72 p-0"
          >
            <Command className="bg-transparent">
              <div className="flex items-center gap-2 border-b border-neutral-800 px-3 py-2">
                <SearchIcon className="w-4 h-4 text-neutral-600 shrink-0" />
                <Command.Input
                  placeholder="Search country..."
                  className="flex-1 bg-transparent text-sm text-neutral-50 placeholder:text-neutral-600 outline-none"
                />
              </div>
              <Command.List className="max-h-56 overflow-y-auto p-1">
                <Command.Empty className="px-3 py-4 text-sm text-neutral-600 text-center">
                  No country found.
                </Command.Empty>
                {sortedCountries.map((country) => (
                  <Command.Item
                    key={country.alpha2}
                    value={`${country.name} ${country.alpha2} ${country.countryCallingCodes[0]}`}
                    onSelect={() => handleCountrySelect(country)}
                    className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-sm text-neutral-400 cursor-pointer data-[selected=true]:bg-neutral-900 data-[selected=true]:text-neutral-50 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center">
                      <CircleFlag
                        countryCode={country.alpha2.toLowerCase()}
                        height={20}
                      />
                    </div>
                    <span className="flex-1 truncate">{country.name}</span>
                    <span className="text-neutral-600 text-xs shrink-0">
                      {country.countryCallingCodes[0]}
                    </span>
                    {countryData?.alpha2 === country.alpha2 && (
                      <CheckIcon className="w-3.5 h-3.5 text-primary-500 shrink-0" />
                    )}
                  </Command.Item>
                ))}
              </Command.List>
            </Command>
          </PopoverContent>
        </Popover>
        <input
          ref={ref}
          value={value}
          onChange={handlePhoneChange}
          placeholder={placeholder || "+971 xx xxx xxxx"}
          type="tel"
          autoComplete="tel"
          name="phone"
          className="flex-1 min-w-0 bg-transparent text-sm placeholder:text-neutral-600 outline-none py-2.5 pr-3"
          {...props}
        />
      </div>
    )
  }
)

PhoneInput.displayName = "PhoneInput"
