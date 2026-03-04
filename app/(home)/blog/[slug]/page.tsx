import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getBlogBySlug, getRelatedBlogs, getAllBlogs } from "../../_lib/blog-queries"
import { ArticleHero } from "./_components/article-hero"
import { ArticleContent } from "./_components/article-content"
import { RecentPosts } from "./_components/recent-posts"
import { CTASection } from "@/components/sections/cta-section"

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllBlogs().map((blog) => ({ slug: blog.slug }))
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const blog = getBlogBySlug(slug)
  if (!blog) return { title: "Blog Post Not Found" }

  return {
    title: `${blog.title} | Luxury Supercars Dubai`,
    description: blog.excerpt ?? blog.title,
  }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params
  const blog = getBlogBySlug(slug)
  if (!blog) notFound()

  const relatedPosts = getRelatedBlogs(slug, 3)

  return (
    <>
      <ArticleHero blog={blog} />
      {blog.content && blog.content.length > 0 && (
        <ArticleContent sections={blog.content} />
      )}
      <RecentPosts posts={relatedPosts} />
      <CTASection />
    </>
  )
}
