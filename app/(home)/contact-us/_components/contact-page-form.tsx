"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { PhoneInput } from "@/components/ui/phone-input"
import { FormField } from "@/components/ui/form-field"
import { Button } from "@/components/ui/button"
import { BRAND_OPTIONS } from "../../_lib/form-data"

function ContactPageForm() {
  return (
    <form className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Full Name">
          <Input placeholder="Your full name" />
        </FormField>
        <FormField label="Email">
          <Input type="email" placeholder="Your email address" />
        </FormField>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Phone Number">
          <PhoneInput variant="default" />
        </FormField>
        <FormField label="Preferred Brand">
          <Select>
            <option value="">Select a brand</option>
            {BRAND_OPTIONS.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </Select>
        </FormField>
      </div>
      <FormField label="Message">
        <Textarea placeholder="How can we help you?" rows={5} />
      </FormField>
      <Button type="submit" intent="primary" size="lg" className="w-full">
        Send Message
      </Button>
    </form>
  )
}

export { ContactPageForm }
