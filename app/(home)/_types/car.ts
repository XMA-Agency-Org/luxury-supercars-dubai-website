export type Currency = "AED" | "USD" | "EUR" | "GBP"

export type CarSpec = {
  engineType: string
  acceleration: string
  doors: number
  seats: number
}

export type CarListing = {
  slug: string
  name: string
  brand: string
  description: string
  imagePath: string
  images: string[]
  year: string
  color: string
  specs: CarSpec
  features: string[]
  prices: Record<Currency, number>
  href: string
  categories: string[]
}

export type CarCategory = {
  slug: string
  name: string
  iconPath: string
  href: string
}
