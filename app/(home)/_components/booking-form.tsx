"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function BookingForm() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [dateFrom, setDateFrom] = useState("")
  const [dateTo, setDateTo] = useState("")

  return (
    <section className="relative z-10 -mt-16 px-4">
      <div className="mx-auto max-w-6xl rounded-2xl bg-neutral-50 p-6 shadow-2xl md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
          <h2 className="shrink-0 font-heading text-xl font-bold text-neutral-950 md:text-2xl lg:max-w-[220px]">
            Need to Rent a Luxury Car?
          </h2>

          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
            <Input
              variant="surface"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="lg:col-span-1"
            />

            <Input
              variant="surface"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="lg:col-span-1"
            />

            <div className="flex lg:col-span-1">
              <span className="flex items-center rounded-l-lg border border-r-0 border-neutral-300 bg-neutral-100 px-3 text-sm text-neutral-500">
                +971
              </span>
              <Input
                variant="surface"
                type="tel"
                placeholder="Mobile No."
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="rounded-l-none"
              />
            </div>

            <Input
              variant="surface"
              type="date"
              placeholder="Date From"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="lg:col-span-1"
            />

            <Input
              variant="surface"
              type="date"
              placeholder="Date To"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="lg:col-span-1"
            />

            <Button
              intent="primary"
              size="md"
              className="lg:col-span-1"
              type="button"
            >
              <span className="flex items-center gap-2">
                Submit
                <ArrowRightIcon />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={cn("h-5 w-5", className)}
    >
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.96-3.54a.75.75 0 1 1 1.004-1.115l5.25 4.693a.75.75 0 0 1 0 1.115l-5.25 4.693a.75.75 0 0 1-1.004-1.116l3.96-3.54H3.75A.75.75 0 0 1 3 10Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export { BookingForm }
