import { Check, Mail } from "lucide-react"
import NextLink from "next/link"
import { buttonVariants } from "@/components/ui/button-variants"
import { SectionHeading } from "@/components/ui/section-heading"
import { contactData } from "../../_lib/contact-data"
import { careersIntro, currentPositions, benefits } from "../_lib/careers-data"

function CareersContent() {
  return (
    <section className="pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <p className="text-neutral-500 text-lg leading-relaxed">
          {careersIntro}
        </p>

        <div>
          <SectionHeading className="mb-6 text-2xl!">
            Why Work With <span className="text-primary-500">Us</span>
          </SectionHeading>
          <ul className="space-y-3">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary-500 shrink-0" />
                <span className="text-neutral-500">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <SectionHeading className="mb-6 text-2xl!">
            Open <span className="text-primary-500">Positions</span>
          </SectionHeading>
          {currentPositions.length === 0 ? (
            <div className="rounded-2xl border border-neutral-800 bg-surface p-8 text-center">
              <p className="text-neutral-500 mb-4">
                There are no open positions at the moment. However, we&apos;re
                always interested in hearing from talented individuals.
              </p>
              <NextLink
                href={contactData.email.href}
                className={buttonVariants({ intent: "primary", size: "md" })}
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Your CV
              </NextLink>
            </div>
          ) : (
            <div className="space-y-4">
              {currentPositions.map((position) => (
                <div
                  key={position.title}
                  className="rounded-2xl border border-neutral-800 bg-surface p-6"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading text-lg font-semibold">
                      {position.title}
                    </h3>
                    <span className="text-sm text-primary-500">
                      {position.type}
                    </span>
                  </div>
                  <p className="text-neutral-600 text-sm mb-2">
                    {position.department}
                  </p>
                  <p className="text-neutral-500">{position.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export { CareersContent }
