import NextLink from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

export type BreadcrumbItem = {
  label: string
  href?: string
}

type BreadcrumbsProps = {
  items: BreadcrumbItem[]
  className?: string
}

function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className={cn("flex items-center gap-2 text-sm", className)}
      >
        <NextLink
          href="/"
          className="text-neutral-400 hover:text-primary-500 transition-colors"
          aria-label="Home"
        >
          <Home className="w-4 h-4" />
        </NextLink>

        {items.map((item, index) => (
          <span key={index} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-neutral-600" />
            {item.href ? (
              <NextLink
                href={item.href}
                className="text-neutral-400 hover:text-primary-500 transition-colors"
              >
                {item.label}
              </NextLink>
            ) : (
              <span className="text-neutral-50">{item.label}</span>
            )}
          </span>
        ))}
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "/",
              },
              ...items.map((item, index) => ({
                "@type": "ListItem",
                position: index + 2,
                name: item.label,
                ...(item.href && { item: item.href }),
              })),
            ],
          }),
        }}
      />
    </>
  )
}

export { Breadcrumbs }
