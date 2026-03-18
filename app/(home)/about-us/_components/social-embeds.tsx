import { SectionHeading } from "@/components/ui/section-heading"
import { contactData } from "../../_lib/contact-data"

function SocialEmbeds() {
  return (
    <section id="social" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div>
          <SectionHeading className="mb-8">
            Follow Us on <span className="text-primary-500">Social Media</span>
          </SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <SocialLink
              platform="Instagram"
              href={contactData.socials.instagram}
              description="Follow our latest supercar showcases"
            />
            <SocialLink
              platform="TikTok"
              href={contactData.socials.tiktok}
              description="Watch our supercar content"
            />
            <SocialLink
              platform="YouTube"
              href={contactData.socials.youtube}
              description="Subscribe for car reviews & vlogs"
            />
            <SocialLink
              platform="Facebook"
              href={contactData.socials.facebook}
              description="Like our page for updates"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialLink({
  platform,
  href,
  description,
}: {
  platform: string
  href: string
  description: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-2xl border border-neutral-800 bg-surface p-6 hover:border-primary-500 transition-colors"
    >
      <h3 className="font-heading text-lg font-semibold mb-2">{platform}</h3>
      <p className="text-neutral-500 text-sm">{description}</p>
    </a>
  )
}

export { SocialEmbeds }
