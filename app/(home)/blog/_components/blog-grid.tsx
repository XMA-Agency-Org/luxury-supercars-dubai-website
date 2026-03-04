"use client"

import { useState } from "react"
import Image from "next/image"
import NextLink from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { BlogPost } from "../../_types/blog"

type BlogGridProps = {
  blogs: BlogPost[]
  itemsPerPage?: number
}

function BlogGrid({ blogs, itemsPerPage = 6 }: BlogGridProps) {
  const [visibleCount, setVisibleCount] = useState(itemsPerPage)
  const visibleBlogs = blogs.slice(0, visibleCount)
  const hasMore = visibleCount < blogs.length

  return (
    <section className="pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleBlogs.map((blog) => (
            <NextLink key={blog.slug} href={blog.href}>
              <Card className="overflow-clip group hover:border-primary-500 transition-colors h-full">
                <div className="relative aspect-video">
                  <Image
                    src={blog.thumbnailPath}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    {blog.category && (
                      <Badge variant="default" size="sm">
                        {blog.category}
                      </Badge>
                    )}
                    <span className="text-xs text-neutral-500">{blog.date}</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold line-clamp-2 group-hover:text-primary-500 transition-colors">
                    {blog.title}
                  </h3>
                  {blog.excerpt && (
                    <p className="text-neutral-400 text-sm mt-2 line-clamp-2">
                      {blog.excerpt}
                    </p>
                  )}
                  {blog.readingTime && (
                    <p className="text-neutral-500 text-xs mt-3">
                      {blog.readingTime}
                    </p>
                  )}
                </div>
              </Card>
            </NextLink>
          ))}
        </div>
        {hasMore && (
          <div className="mt-10 flex justify-center">
            <Button
              intent="secondary"
              size="lg"
              onClick={() => setVisibleCount((prev) => prev + itemsPerPage)}
            >
              Load More ({blogs.length - visibleCount} remaining)
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export { BlogGrid }
