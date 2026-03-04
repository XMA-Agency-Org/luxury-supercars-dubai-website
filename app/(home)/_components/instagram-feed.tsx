import Image from "next/image"
import { Instagram } from "lucide-react"
import { Link } from "@/components/ui/link"
import { instagramPosts } from "../_lib/instagram-data"
import { contactData } from "../_lib/contact-data"
import { SectionHeading } from "@/components/ui/section-heading"

function InstagramFeed() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading className="mb-10">
          Follow Us on <span className="text-primary-500">Instagram</span>
        </SectionHeading>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {instagramPosts.map((post) => (
            <a
              key={post.href}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={post.caption}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <Image
                src={post.imagePath}
                alt={post.caption}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-neutral-950/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Instagram className="h-8 w-8 text-neutral-50" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href={contactData.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            variant="cta"
          >
            Follow on Instagram
          </Link>
        </div>
      </div>
    </section>
  )
}

export { InstagramFeed }
