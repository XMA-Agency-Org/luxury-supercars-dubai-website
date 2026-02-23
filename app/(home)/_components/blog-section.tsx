import { SectionHeading } from "@/components/ui/section-heading"
import { BlogCard } from "./blog-card"
import { blogPosts } from "../_lib/blog-data"

function BlogSection() {
  const [featuredPost, ...remainingPosts] = blogPosts

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading className="mb-10">
          Stay <span className="text-primary-500">Informed</span> And Inspired
          For Your Next <span className="text-primary-500">Journey</span>
        </SectionHeading>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <BlogCard post={featuredPost} featured />
          <div className="flex flex-col gap-6">
            {remainingPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { BlogSection }
