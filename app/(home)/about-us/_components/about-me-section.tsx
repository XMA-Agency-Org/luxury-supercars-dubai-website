import Image from "next/image"
import { SectionHeading } from "@/components/ui/section-heading"
import { aboutMeSection } from "../_lib/about-data"

function AboutMeSection() {
  return (
    <section id="about-me" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeading className="mb-6">
              {aboutMeSection.heading}
            </SectionHeading>
            {aboutMeSection.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-neutral-500 leading-relaxed mb-4 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-clip">
            <Image
              src={aboutMeSection.imagePath}
              alt="About Luxury Supercars Dubai"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export { AboutMeSection }
