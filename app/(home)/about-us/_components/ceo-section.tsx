import { SectionHeading } from "@/components/ui/section-heading"
import { ceoSection } from "../_lib/about-data"

function CeoSection() {
  return (
    <section id="ceo" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading className="mb-8">
          Meet Our <span className="text-primary-500">CEO</span>
        </SectionHeading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="aspect-video rounded-2xl overflow-clip border border-neutral-800">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${ceoSection.videoId}`}
              title={`${ceoSection.name} - CEO of Luxury Supercars Dubai`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <div>
            <h3 className="font-heading text-2xl font-bold mb-2">
              {ceoSection.name}
            </h3>
            <p className="text-primary-500 font-medium mb-4">
              {ceoSection.title}
            </p>
            <p className="text-neutral-400 leading-relaxed">
              {ceoSection.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export { CeoSection }
