import NextLink from "next/link"
import { Phone } from "lucide-react"
import { buttonVariants } from "@/components/ui/button-variants"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { SectionHeading } from "@/components/ui/section-heading"
import { contactData } from "@/app/(home)/_lib/contact-data"
import { cn } from "@/lib/utils"

type CTASectionProps = {
  title?: string
  description?: string
  className?: string
}

function CTASection({
  title = "Ready to Experience Luxury?",
  description = "Get in touch with us today to book your dream car in Dubai.",
  className,
}: CTASectionProps) {
  return (
    <section className={cn("py-16 md:py-20", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading className="mb-4">{title}</SectionHeading>
        <p className="text-neutral-400 text-lg mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NextLink
            href={contactData.phones[0].href}
            className={buttonVariants({ intent: "primary", size: "lg" })}
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </NextLink>
          <NextLink
            href={contactData.whatsapp.ryan.href}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ intent: "success", size: "lg" })}
          >
            <WhatsAppIcon className="w-5 h-5 mr-2" />
            WhatsApp Us
          </NextLink>
        </div>
      </div>
    </section>
  )
}

export { CTASection }
