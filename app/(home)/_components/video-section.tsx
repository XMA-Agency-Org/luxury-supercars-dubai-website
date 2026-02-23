import { Check } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"

type ValueProposition = {
  title: string
  description: string
}

const valuePropositions: ValueProposition[] = [
  {
    title: "Largest Fleet and Showroom:",
    description:
      "Experience the luxury of choice with the largest selection of luxury cars in Dubai. Whether you are looking for performance, comfort, or technology, our extensive range ensures we have the perfect car for your needs.",
  },
  {
    title: "No Commitment Necessary:",
    description:
      "Want to drive a supercar? Make this dream a reality with our rental services without locking yourself into a long-term agreement.",
  },
  {
    title: "Flexible Rental Options:",
    description:
      "We cater to all desires and needs, whether you need a car for a few hours or several days, and we ensure timely delivery.",
  },
  {
    title: "Transparent Pricing:",
    description:
      "Enjoy straightforward and 'no hidden fees' pricing with us. Experience our services without any worries.",
  },
]

function VideoEmbed() {
  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl border border-neutral-800">
      <iframe
        src="https://www.youtube-nocookie.com/embed/TjB258kdQFc?si=8nqAFhkFoYqdu1T_"
        title="Luxury Supercars Dubai"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  )
}

function ValuePropositionItem({ title, description }: ValueProposition) {
  return (
    <div className="flex gap-3">
      <div className="mt-1 shrink-0">
        <Check className="w-5 h-5 text-primary-500" />
      </div>
      <p className="text-sm leading-relaxed">
        <span className="text-neutral-50 font-semibold">{title}</span>{" "}
        <span className="text-neutral-400">{description}</span>
      </p>
    </div>
  )
}

function VideoSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <VideoEmbed />
        <div className="space-y-6">
          <SectionHeading>
            Why Choose{" "}
            <span className="text-primary-500">Luxury Supercars Dubai?</span>
          </SectionHeading>
          <div className="space-y-5">
            {valuePropositions.map((proposition) => (
              <ValuePropositionItem
                key={proposition.title}
                title={proposition.title}
                description={proposition.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { VideoSection }
