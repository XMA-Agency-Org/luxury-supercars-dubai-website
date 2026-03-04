"use client"

import { cn } from "@/lib/utils"
import { SectionHeading } from "@/components/ui/section-heading"
import { Link } from "@/components/ui/link"
import { FaqItem } from "./faq-item"
import { faqItems as defaultFaqItems, type FaqItem as FaqItemType } from "../_lib/faq-data"

type FaqAccordionProps = {
  items?: FaqItemType[]
  title?: React.ReactNode
  showReadMore?: boolean
  className?: string
}

function FaqAccordion({
  items = defaultFaqItems,
  title,
  showReadMore = true,
  className,
}: FaqAccordionProps) {
  return (
    <section className={cn("max-w-7xl mx-auto px-4 py-16", className)}>
      <SectionHeading className="mb-10">
        {title ?? (
          <>
            <span className="text-primary-500">Everything</span> You Need To Know
            About Our <span className="text-primary-500">Services</span>
          </>
        )}
      </SectionHeading>
      <div className="max-w-3xl mx-auto">
        {items.map((item, index) => (
          <FaqItem
            key={item.question}
            id={String(index)}
            question={item.question}
            answer={item.answer}
          />
        ))}
        {showReadMore && (
          <div className="mt-8 text-center">
            <Link href="/faq" variant="cta">
              Read More
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export { FaqAccordion }
