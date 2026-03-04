import Image from "next/image"
import { Card } from "@/components/ui/card"
import { SectionHeading } from "@/components/ui/section-heading"
import { businessCards } from "../_lib/about-data"

function BusinessCards() {
  return (
    <section id="business" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading className="mb-10">
          Our <span className="text-primary-500">Business</span>
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {businessCards.map((card) => (
            <Card key={card.title} className="overflow-clip">
              <div className="relative aspect-video">
                <Image
                  src={card.imagePath}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold mb-2">
                  {card.title}
                </h3>
                <p className="text-neutral-400 text-sm">{card.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export { BusinessCards }
