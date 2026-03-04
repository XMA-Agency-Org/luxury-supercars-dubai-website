type BrandDescriptionProps = {
  name: string
  description: string
}

function BrandDescription({ name, description }: BrandDescriptionProps) {
  return (
    <section className="py-16 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            About <span className="text-primary-500">{name}</span> Rentals in
            Dubai
          </h2>
          <p className="text-neutral-400 leading-relaxed text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}

export { BrandDescription }
