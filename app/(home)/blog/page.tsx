import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { BlogGrid } from "./_components/blog-grid"
import { getAllBlogs } from "../_lib/blog-queries"

export const metadata: Metadata = {
  title: "Blog | Luxury Supercars Dubai",
  description:
    "Read the latest articles about luxury car rentals, supercar experiences, and driving in Dubai from Luxury Supercars Dubai.",
}

export default function BlogPage() {
  const blogs = getAllBlogs()

  return (
    <>
      <PageHero
        tagline="Latest Articles"
        title="Our"
        highlightText="Blog"
        description="Stay updated with the latest news, tips, and stories from the world of luxury supercars in Dubai."
        breadcrumbs={[{ label: "Blog" }]}
      />
      <BlogGrid blogs={blogs} />
    </>
  )
}
