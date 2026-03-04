export type BlogPost = {
  slug: string
  title: string
  date: string
  thumbnailPath: string
  href: string
  excerpt?: string
  category?: string
  readingTime?: string
  content?: BlogSection[]
}

export type BlogSection = {
  heading: string
  body: string
}
