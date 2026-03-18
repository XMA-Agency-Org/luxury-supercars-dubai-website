"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PhoneInput } from "@/components/ui/phone-input"
import { FormField } from "@/components/ui/form-field"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"

type CarInquiryFormProps = {
  carName: string
}

function CarInquiryForm({ carName }: CarInquiryFormProps) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <SectionHeading className="mb-8 text-center">
            Enquire About This <span className="text-primary-500">Car</span>
          </SectionHeading>
          <div className="rounded-2xl border border-neutral-800 bg-surface/80 p-6 md:p-8">
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField label="Full Name">
                  <Input placeholder="Your full name" />
                </FormField>
                <FormField label="Email">
                  <Input type="email" placeholder="Your email address" />
                </FormField>
              </div>
              <FormField label="Phone Number">
                <PhoneInput variant="default" />
              </FormField>
              <FormField label="Message">
                <Textarea
                  placeholder={`I'm interested in renting the ${carName}...`}
                  rows={4}
                />
              </FormField>
              <Button
                type="submit"
                intent="primary"
                size="lg"
                className="w-full"
              >
                Send Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export { CarInquiryForm }
