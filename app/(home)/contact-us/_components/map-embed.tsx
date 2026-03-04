import { mapEmbedUrl } from "../_lib/contact-page-data"

function MapEmbed() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-neutral-800 overflow-clip">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Luxury Supercars Dubai Location"
          />
        </div>
      </div>
    </section>
  )
}

export { MapEmbed }
