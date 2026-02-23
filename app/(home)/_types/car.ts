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
  description: string
  imagePath: string
  specs: CarSpec
  prices: Record<Currency, number>
  href: string
}

export type CarCategory = {
  slug: string
  name: string
  iconPath: string
  href: string
}
