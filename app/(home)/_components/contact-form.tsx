"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"
import { Link } from "@/components/ui/link"

const brandOptions = [
  "Aston Martin",
  "Audi",
  "Bentley",
  "BMW",
  "Cadillac",
  "Ferrari",
  "Lamborghini",
  "Maserati",
  "McLaren",
  "Mercedes Benz",
  "Polaris",
  "Porsche",
  "Range Rover",
  "Rolls Royce",
]

const rentalLinksColumnOne = [
  { label: "Rent Ferrari in Dubai", href: "/rent-ferrari-in-dubai" },
  { label: "Rent Audi in Dubai", href: "/rent-audi-in-dubai" },
  { label: "Rent Aston Martin in Dubai", href: "/rent-aston-martin-in-dubai" },
  { label: "Rent Bentley in Dubai", href: "/rent-bentley-in-dubai" },
]

const rentalLinksColumnTwo = [
  { label: "Rent BMW in Dubai", href: "/rent-bmw-in-dubai" },
  { label: "Rent Cadillac in Dubai", href: "/rent-cadillac-in-dubai" },
  { label: "Rent Lamborghini in Dubai", href: "/rent-lamborghini-in-dubai" },
  { label: "Rent McLaren in Dubai", href: "/rent-mclaren-in-dubai" },
]

const rentalLinksColumnThree = [
  { label: "Rent Mercedes-Benz in Dubai", href: "/rent-mercedes-benz-in-dubai" },
  { label: "Rent Range Rover in Dubai", href: "/rent-range-rover-in-dubai" },
  { label: "Rent Rolls-Royce in Dubai", href: "/rent-rolls-royce-in-dubai" },
  { label: "Rent Maserati in Dubai", href: "/rent-maserati-in-dubai" },
]

function ContactForm() {
  const [phone, setPhone] = useState("")
  const [brand, setBrand] = useState("")

  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 lg:grid-cols-2">
        <div className="space-y-8">
          <SectionHeading>
            How Can We{" "}
            <span className="text-primary-500">Help You?</span>
          </SectionHeading>

          <div className="space-y-4">
            <div className="flex">
              <span className="flex items-center rounded-l-lg border border-r-0 border-neutral-500 bg-neutral-900 px-4 text-neutral-400">
                +971
              </span>
              <Input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="rounded-l-none"
              />
            </div>

            <Select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            >
              <option value="" disabled>
                Select Brand
              </option>
              {brandOptions.map((brandName) => (
                <option key={brandName} value={brandName}>
                  {brandName}
                </option>
              ))}
            </Select>

            <Button type="submit" intent="primary" size="md">
              Submit
            </Button>
          </div>

          <div className="space-y-3 pt-4">
            <p className="text-sm font-medium uppercase tracking-wider text-neutral-400">
              Rental Options We Have
            </p>
            <h3 className="font-heading text-xl font-bold text-neutral-50">
              Daily, Weekly &amp; Monthly{" "}
              <span className="text-primary-500">Luxury Car Rental</span>
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
          <div className="space-y-3">
            {rentalLinksColumnOne.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm text-neutral-400 hover:text-primary-500"
                variant={null}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="space-y-3">
            {rentalLinksColumnTwo.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm text-neutral-400 hover:text-primary-500"
                variant={null}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="space-y-3">
            {rentalLinksColumnThree.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm text-neutral-400 hover:text-primary-500"
                variant={null}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { ContactForm }
