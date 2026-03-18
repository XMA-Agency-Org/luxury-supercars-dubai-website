import NextLink from "next/link"
import { SectionHeading } from "@/components/ui/section-heading"
import type { BlogPost } from "../../../_types/blog"

type RecentPostsProps = {
  posts: BlogPost[]
}

function RecentPosts({ posts }: RecentPostsProps) {
  if (posts.length === 0) return null

  return (
    <section className="py-16 border-t border-neutral-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading className="mb-8 text-2xl!">
          Recent <span className="text-primary-500">Posts</span>
        </SectionHeading>
        <div className="space-y-4">
          {posts.map((post) => (
            <NextLink
              key={post.slug}
              href={post.href}
              className="flex items-center justify-between py-3 border-b border-neutral-800 hover:text-primary-500 transition-colors group"
            >
              <span className="font-medium group-hover:text-primary-500 transition-colors line-clamp-1 pr-4">
                {post.title}
              </span>
              <span className="text-neutral-600 text-sm shrink-0">
                {post.date}
              </span>
            </NextLink>
          ))}
        </div>
      </div>
    </section>
  )
}

export { RecentPosts }
