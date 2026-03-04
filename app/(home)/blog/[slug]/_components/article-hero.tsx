import Image from "next/image"
import NextLink from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { BlogPost } from "../../../_types/blog"

type ArticleHeroProps = {
  blog: BlogPost
}

function ArticleHero({ blog }: ArticleHeroProps) {
  return (
    <section className="pt-28 md:pt-36">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <NextLink
          href="/blog"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-primary-500 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Blog</span>
        </NextLink>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          {blog.category && (
            <Badge variant="outline" size="sm">
              {blog.category}
            </Badge>
          )}
          <div className="flex items-center gap-4 text-neutral-500">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span className="text-xs">{blog.date}</span>
            </div>
            {blog.readingTime && (
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span className="text-xs">{blog.readingTime}</span>
              </div>
            )}
          </div>
        </div>

        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          {blog.title}
        </h1>

        {blog.excerpt && (
          <p className="text-lg text-neutral-400 leading-relaxed">
            {blog.excerpt}
          </p>
        )}

        <div className="mt-8 pb-8">
          <div className="relative aspect-video rounded-xl overflow-clip border border-neutral-800">
            <Image
              src={blog.thumbnailPath}
              alt={blog.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export { ArticleHero }
