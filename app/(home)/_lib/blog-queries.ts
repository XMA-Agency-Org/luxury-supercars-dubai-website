import type { BlogPost } from "../_types/blog"
import { blogPosts } from "./blog-data"

function getAllBlogs(): BlogPost[] {
  return blogPosts
}

function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

function getRelatedBlogs(currentSlug: string, limit = 3): BlogPost[] {
  return blogPosts.filter((post) => post.slug !== currentSlug).slice(0, limit)
}

export { getAllBlogs, getBlogBySlug, getRelatedBlogs }
