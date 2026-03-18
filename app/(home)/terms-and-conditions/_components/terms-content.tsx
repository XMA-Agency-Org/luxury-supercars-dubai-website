import { termsSections } from "../_lib/terms-data"

function TermsContent() {
  return (
    <section className="pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {termsSections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-heading text-xl font-semibold mb-3">
                {section.heading}
              </h2>
              <p className="text-neutral-500 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { TermsContent }
