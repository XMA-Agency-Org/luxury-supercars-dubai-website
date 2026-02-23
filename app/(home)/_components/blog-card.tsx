import Image from "next/image"
import NextLink from "next/link"
import { cn } from "@/lib/utils"
import type { BlogPost } from "../_types/blog"

type BlogCardProps = {
  post: BlogPost
  featured?: boolean
}

function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <NextLink
      href={post.href}
      className={cn(
        "group block overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 transition-colors hover:border-neutral-700",
        featured && "h-full"
      )}
    >
      <div className={cn("relative w-full", featured ? "aspect-[4/3]" : "aspect-video")}>
        <Image
          src={post.thumbnailPath}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-medium uppercase text-primary-500">
          {post.date}
        </p>
        <h3
          className={cn(
            "mt-2 font-heading font-bold text-neutral-50",
            featured ? "text-xl" : "text-base"
          )}
        >
          {post.title}
        </h3>
        {!featured && (
          <span className="mt-3 inline-block text-sm text-primary-500 group-hover:underline">
            Read More
          </span>
        )}
      </div>
    </NextLink>
  )
}

export { BlogCard }
