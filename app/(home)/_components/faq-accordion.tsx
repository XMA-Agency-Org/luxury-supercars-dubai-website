"use client"

import { cn } from "@/lib/utils"
import { SectionHeading } from "@/components/ui/section-heading"
import { Link } from "@/components/ui/link"
import { FaqItem } from "./faq-item"
import { faqItems } from "../_lib/faq-data"

type FaqAccordionProps = {
  className?: string
}

function FaqAccordion({ className }: FaqAccordionProps) {
  return (
    <section className={cn("max-w-7xl mx-auto px-4 py-16", className)}>
      <SectionHeading className="mb-10">
        <span className="text-primary-500">Everything</span> You Need To Know
        About Our <span className="text-primary-500">Services</span>
      </SectionHeading>
      <div className="max-w-3xl">
        {faqItems.map((item) => (
          <FaqItem
            key={item.question}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
      <div className="mt-8">
        <Link href="/faq" variant="cta">
          Read More
        </Link>
      </div>
    </section>
  )
}

export { FaqAccordion }
