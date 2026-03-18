"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { FormField } from "@/components/ui/form-field"
import { PhoneInput } from "@/components/ui/phone-input"
import { SectionHeading } from "@/components/ui/section-heading"
import { BRAND_OPTIONS } from "../_lib/form-data"

function ContactForm() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [brand, setBrand] = useState("")
  const [message, setMessage] = useState("")

  return (
    <section className="py-16">
      <div className="mx-auto max-w-2xl px-4">
        <SectionHeading className="mb-8 text-center">
          How Can We{" "}
          <span className="text-primary-500">Help You?</span>
        </SectionHeading>

        <div className="rounded-2xl border border-neutral-800 bg-surface/80 p-6 md:p-8">
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField label="Full Name">
                <Input
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </FormField>

              <FormField label="Email">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormField>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField label="Mobile Number">
                <PhoneInput
                  defaultCountry="AE"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FormField>

              <FormField label="Preferred Brand">
                <Select
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                >
                  <option value="" disabled>
                    Select Brand
                  </option>
                  {BRAND_OPTIONS.map((brandName) => (
                    <option key={brandName} value={brandName}>
                      {brandName}
                    </option>
                  ))}
                </Select>
              </FormField>
            </div>

            <FormField label="Message">
              <Textarea
                variant="default"
                placeholder="Tell us about your requirements..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
              />
            </FormField>

            <Button
              type="submit"
              intent="primary"
              size="lg"
              className="w-full mt-2"
            >
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export { ContactForm }
