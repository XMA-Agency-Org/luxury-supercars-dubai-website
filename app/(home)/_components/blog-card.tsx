import Image from "next/image"
import NextLink from "next/link"
import { cn } from "@/lib/utils"
import type { BlogPost } from "../_types/blog"

type BlogCardProps = {
  post: BlogPost
  featured?: boolean
}

function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <NextLink
        href={post.href}
        className="group relative block h-full overflow-hidden rounded-2xl border border-neutral-800"
      >
        <Image
          src={post.thumbnailPath}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="text-xs font-medium uppercase text-primary-500">
            {post.date}
          </p>
          <h3 className="mt-2 font-heading text-xl font-bold text-white">
            {post.title}
          </h3>
        </div>
      </NextLink>
    )
  }

  return (
    <NextLink
      href={post.href}
      className="group flex gap-4 overflow-hidden rounded-xl border border-neutral-800 bg-surface transition-colors hover:border-neutral-700"
    >
      <div className="relative h-28 w-40 shrink-0">
        <Image
          src={post.thumbnailPath}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center py-3 pr-4">
        <p className="text-xs font-medium uppercase text-primary-500">
          {post.date}
        </p>
        <h3 className="mt-1 font-heading text-sm font-bold text-neutral-50 line-clamp-2">
          {post.title}
        </h3>
        <span className="mt-2 text-xs text-primary-500 group-hover:underline">
          Read More
        </span>
      </div>
    </NextLink>
  )
}

export { BlogCard }
