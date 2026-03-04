import type { BlogSection } from "../../../_types/blog"

type ArticleContentProps = {
  sections: BlogSection[]
}

function ArticleContent({ sections }: ArticleContentProps) {
  return (
    <section className="pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-heading text-2xl font-bold mb-4">
                {section.heading}
              </h2>
              <p className="text-neutral-400 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { ArticleContent }
