import NextLink from "next/link"
import { ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { services } from "../_lib/services-data"

function ServicesGrid() {
  return (
    <section className="pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.title}
                className="p-8 group hover:border-primary-500 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-primary-500/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed mb-6">
                  {service.description}
                </p>
                <NextLink
                  href={service.href}
                  className="inline-flex items-center gap-2 text-primary-500 font-medium hover:gap-3 transition-all"
                >
                  Enquire Now
                  <ArrowRight className="w-4 h-4" />
                </NextLink>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export { ServicesGrid }
