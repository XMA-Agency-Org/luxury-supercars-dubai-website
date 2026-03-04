"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FormField } from "@/components/ui/form-field"
import { DatePicker } from "@/components/ui/date-picker"
import { PhoneInput } from "@/components/ui/phone-input"

function BookingForm() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [dateFrom, setDateFrom] = useState<Date>()
  const [dateTo, setDateTo] = useState<Date>()

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return (
    <div className="w-full rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-lg p-6 md:p-8">
      <p className="text-sm font-medium text-primary-500">Book Now</p>
      <h2 className="font-heading text-2xl font-bold text-neutral-50 mt-1 mb-6">
        Need to Rent a Luxury Car?
      </h2>

      <div className="space-y-4">
        <FormField label="Full Name">
          <Input
            variant="light"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </FormField>

        <FormField label="Email Address">
          <Input
            variant="light"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormField>

        <FormField label="Mobile Number">
          <PhoneInput
            variant="light"
            defaultCountry="AE"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormField>

        <div className="grid grid-cols-2 gap-3">
          <FormField label="From">
            <DatePicker
              value={dateFrom}
              onChange={(date) => {
                setDateFrom(date)
                if (dateTo && date && dateTo < date) setDateTo(undefined)
              }}
              placeholder="Pick a date"
              disabledDays={{ before: today }}
            />
          </FormField>
          <FormField label="To">
            <DatePicker
              value={dateTo}
              onChange={setDateTo}
              placeholder="Pick a date"
              disabledDays={{ before: dateFrom || today }}
            />
          </FormField>
        </div>

        <Button intent="primary" size="lg" type="button">
          Submit
        </Button>
      </div>
    </div>
  )
}

export { BookingForm }
