"use client"

import { useState } from "react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { PhoneInput } from "@/components/ui/phone-input"
import { Mail, MapPin } from "lucide-react"
import { FormField } from "@/components/ui/form-field"
import { PhoneIcon } from "@/components/icons/phone-icon"
import { ContactIconCircle } from "./contact-icon-circle"
import { BRAND_OPTIONS } from "../_lib/form-data"
import { contactData } from "../_lib/contact-data"

function ContactInfo() {
  return (
    <div className="flex flex-col justify-center gap-10">
      <div className="flex items-start gap-4">
        <ContactIconCircle variant="solid">
          <PhoneIcon className="w-5 h-5" />
        </ContactIconCircle>
        <div>
          <h3 className="text-lg font-bold text-neutral-50">Phone</h3>
          <p className="text-sm text-neutral-300 mt-1">
            <a href={contactData.phones[0].href} className="hover:text-primary-500 transition-colors">
              {contactData.phones[0].label}
            </a>
            {" – "}
            <a href={contactData.phones[1].href} className="hover:text-primary-500 transition-colors">
              {contactData.phones[1].label}
            </a>
          </p>
          <p className="text-sm text-neutral-300">
            Landline:{" "}
            <a href={contactData.landline.href} className="hover:text-primary-500 transition-colors">
              {contactData.landline.label}
            </a>
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <ContactIconCircle variant="solid">
          <Mail className="w-5 h-5" />
        </ContactIconCircle>
        <div>
          <h3 className="text-lg font-bold text-neutral-50">Email</h3>
          <a
            href={contactData.email.href}
            className="text-sm text-neutral-300 hover:text-primary-500 transition-colors mt-1 block"
          >
            {contactData.email.label}
          </a>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <ContactIconCircle variant="solid">
          <MapPin className="w-5 h-5" />
        </ContactIconCircle>
        <div>
          <h3 className="text-lg font-bold text-neutral-50">Address</h3>
          <a
            href={contactData.address.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-300 hover:text-primary-500 transition-colors mt-1 block"
          >
            {contactData.address.label}
          </a>
        </div>
      </div>
    </div>
  )
}

function ContactFormCard() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [brand, setBrand] = useState("")
  const [message, setMessage] = useState("")

  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 backdrop-blur-lg p-6 md:p-8">
      <p className="text-sm font-medium text-primary-500">Contact</p>
      <h2 className="font-heading text-2xl font-bold text-neutral-50 mt-1 mb-6">
        How Can We Help You?
      </h2>

      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField label="Mobile Number">
            <PhoneInput
              variant="light"
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
            variant="light"
            placeholder="Tell us about your requirements..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
          />
        </FormField>

        <Button
          type="submit"
          intent="primary"
          size="lg"
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

function ContactSection() {
  return (
    <section className="relative py-20">
      <Image
        src="/images/about/showroom.webp"
        alt="Luxury cars showroom"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-neutral-950/75" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <ContactInfo />
          <ContactFormCard />
        </div>
      </div>
    </section>
  )
}

export { ContactSection }
