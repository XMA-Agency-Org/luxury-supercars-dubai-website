import { Breadcrumbs, type BreadcrumbItem } from "@/components/ui/breadcrumbs"
import { SectionHeading } from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"

type PageHeroProps = {
  tagline?: string
  title: string
  highlightText?: string
  description?: string
  align?: "left" | "center"
  breadcrumbs?: BreadcrumbItem[]
  className?: string
}

function PageHero({
  tagline,
  title,
  highlightText,
  description,
  align = "center",
  breadcrumbs,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "pt-32 md:pt-40",
        description ? "pb-16" : "pb-8",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "max-w-3xl",
            align === "center" && "mx-auto text-center"
          )}
        >
          {breadcrumbs && breadcrumbs.length > 0 && (
            <Breadcrumbs
              items={breadcrumbs}
              className={cn("mb-6", align === "center" && "justify-center")}
            />
          )}
          {tagline && (
            <p className="text-sm text-primary-500 font-semibold uppercase tracking-widest mb-4">
              {tagline}
            </p>
          )}
          <SectionHeading>
            {title}{" "}
            {highlightText && (
              <span className="text-primary-500">{highlightText}</span>
            )}
          </SectionHeading>
          {description && (
            <p className="mt-6 text-lg text-neutral-400 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export { PageHero, type PageHeroProps }
