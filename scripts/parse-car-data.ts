import { readFileSync, readdirSync, writeFileSync } from "fs"
import { join, basename } from "path"

const CARS_DIR = join(__dirname, "../.firecrawl/cars")
const OUTPUT = join(__dirname, "../app/(home)/_lib/car-data.generated.ts")

type ParsedCar = {
  slug: string
  name: string
  brand: string
  brandSlug: string
  description: string
  imagePath: string
  images: string[]
  year: string
  color: string
  engineType: string
  power: string
  acceleration: string
  engineCapacity: string
  driveType: string
  transmission: string
  doors: number
  seats: number
  features: string[]
  priceAED: number
  categories: string[]
  href: string
}

function extractBrandFromSlug(slug: string): { brand: string; brandSlug: string } {
  const brandMap: Record<string, string> = {
    "aston-martin": "Aston Martin",
    "audi": "Audi",
    "bentley": "Bentley",
    "bmw": "BMW",
    "cadillac": "Cadillac",
    "ferrari": "Ferrari",
    "lamborghini": "Lamborghini",
    "maserati": "Maserati",
    "mclaren": "McLaren",
    "mercedes-benz": "Mercedes Benz",
    "mercedes": "Mercedes Benz",
    "porsche": "Porsche",
    "range-rover": "Range Rover",
    "rolls-royce": "Rolls Royce",
  }

  for (const [key, val] of Object.entries(brandMap)) {
    if (slug.startsWith(key + "-")) {
      return { brand: val, brandSlug: `rent-${key}-dubai` }
    }
  }

  // fallback: try from URL
  return { brand: "Unknown", brandSlug: "" }
}

function extractBrandSlugFromUrl(carUrlsFile: string, carSlug: string): string {
  const content = readFileSync(carUrlsFile, "utf-8")
  const line = content.split("\n").find((l) => l.includes(`/${carSlug}`))
  if (!line) return ""
  const match = line.match(/luxurysupercarsdubai\.com\/(rent-[^/]+)\//)
  return match ? match[1] : ""
}

function parsePrice(text: string): number {
  const match = text.match(/([\d,]+)\s*د\.إ/)
  if (match) return parseInt(match[1].replace(/,/g, ""), 10)
  const matchAED = text.match(/AED\s*([\d,]+)/)
  if (matchAED) return parseInt(matchAED[1].replace(/,/g, ""), 10)
  return 0
}

function extractSpec(content: string, label: string): string {
  const patterns = [
    new RegExp(`${label}\\s*[:：]\\s*[-–—]+\\s*\\n\\s*\\n\\s*(.+?)\\s*$`, "im"),
    new RegExp(`${label}\\s*[:：]\\s*[-–—]+\\s*\\n\\s*(.+?)\\s*$`, "im"),
  ]
  for (const pattern of patterns) {
    const match = content.match(pattern)
    if (match) return match[1].trim()
  }
  return ""
}

function extractImages(content: string): string[] {
  const images: string[] = []
  const regex = /\[!\[\]\((https:\/\/luxurysupercarsdubai\.com\/wp-content\/uploads\/[^)]+)\)\]/g
  let match
  while ((match = regex.exec(content)) !== null) {
    const url = match[1]
    if (!url.includes("100x100") && !url.includes("play.svg") && !url.includes("sound.svg") && !url.includes("arrow-right")) {
      images.push(url)
    }
  }
  return [...new Set(images)]
}

function extractFeatures(content: string): string[] {
  const featSection = content.match(/##\s*\*?\*?Car\*?\*?\s*Features[\s\S]*?(?=\n(?:The |##|\d+[,.]?\d*\s*د))/i)
  if (!featSection) return []
  const features: string[] = []
  const lines = featSection[0].split("\n")
  for (const line of lines) {
    const trimmed = line.trim()
    if (trimmed.startsWith("- ") && trimmed.length > 3) {
      features.push(trimmed.slice(2).trim())
    }
  }
  return features
}

function extractDescription(content: string): string {
  const featuresEnd = content.indexOf("## **Car** Features")
  const specStart = content.indexOf("## **Car** Specification")

  let descSection = ""
  if (featuresEnd !== -1) {
    const afterFeatures = content.slice(featuresEnd)
    const featureEnd = afterFeatures.indexOf("\n\n", afterFeatures.indexOf("\n\n", 10) + 1)
    if (featureEnd !== -1) {
      const remaining = afterFeatures.slice(featureEnd).trim()
      const paragraphs = remaining.split(/\n\n+/).filter((p) => {
        const t = p.trim()
        return (
          t.length > 100 &&
          !t.startsWith("-") &&
          !t.startsWith("[") &&
          !t.startsWith("!") &&
          !t.startsWith("#") &&
          !t.includes("د.إ") &&
          !t.includes("Deposit") &&
          !t.includes("Insurance") &&
          !t.includes("mileage")
        )
      })
      if (paragraphs.length > 0) {
        descSection = paragraphs[0].trim()
      }
    }
  }

  if (!descSection) {
    const paragraphs = content.split(/\n\n+/).filter((p) => {
      const t = p.trim()
      return (
        t.length > 100 &&
        !t.startsWith("-") &&
        !t.startsWith("[") &&
        !t.startsWith("!") &&
        !t.startsWith("#") &&
        !t.includes("د.إ") &&
        !t.includes("Deposit") &&
        !t.includes("Insurance") &&
        !t.includes("mileage") &&
        !t.includes("Specification") &&
        !t.includes("Features")
      )
    })
    if (paragraphs.length > 0) {
      descSection = paragraphs[0].trim()
    }
  }

  if (descSection.length > 300) {
    descSection = descSection.slice(0, 297) + "..."
  }
  return descSection
}

function determinePrimaryCategory(slug: string, brand: string): string {
  const suvKeywords = [
    "urus", "dbx", "purosangue", "x6", "x7", "cayenne", "macan",
    "escalade", "range-rover", "g63", "glc", "gle", "gls", "bentayga",
    "cullinan", "sq7", "v250", "maybach"
  ]
  const convertibleKeywords = [
    "spyder", "spider", "roadster", "cabriolet", "dawn", "continental-gtc",
    "portofino", "roma-spyder"
  ]
  const electricSlugs = [
    "bmw-735i", "ferrari-296-gts-spyder", "ferrari-sf90-stradale",
    "mclaren-artura", "mclaren-artura-spyder", "mclaren-artura-spyder-white"
  ]
  const luxuryBrands = ["Rolls Royce", "Bentley", "Mercedes Benz", "Range Rover", "Cadillac"]

  if (suvKeywords.some((kw) => slug.includes(kw))) return "suv"
  if (convertibleKeywords.some((kw) => slug.includes(kw))) return "convertible"
  if (luxuryBrands.includes(brand) && !slug.includes("gt63")) return "luxury"

  return "sports"
}

function determineCategories(slug: string, brand: string): string[] {
  const cats: Set<string> = new Set()

  const primary = determinePrimaryCategory(slug, brand)
  cats.add(primary)

  const suvKeywords = [
    "urus", "dbx", "purosangue", "x6", "x7", "cayenne", "macan",
    "escalade", "range-rover", "g63", "glc", "gle", "gls", "bentayga",
    "cullinan", "sq7", "v250", "maybach"
  ]
  const convertibleKeywords = [
    "spyder", "spider", "roadster", "cabriolet", "dawn", "continental-gtc",
    "portofino", "roma-spyder"
  ]
  const electricSlugs = [
    "bmw-735i", "ferrari-296-gts-spyder", "ferrari-sf90-stradale",
    "mclaren-artura", "mclaren-artura-spyder", "mclaren-artura-spyder-white"
  ]
  const sportsBrands = ["Lamborghini", "Ferrari", "McLaren", "Porsche", "Aston Martin", "Maserati"]
  const luxuryBrands = ["Rolls Royce", "Bentley", "Mercedes Benz", "Range Rover", "Cadillac"]

  if (suvKeywords.some((kw) => slug.includes(kw))) cats.add("suv")
  if (convertibleKeywords.some((kw) => slug.includes(kw))) cats.add("convertible")
  if (electricSlugs.includes(slug)) cats.add("electric")
  if (sportsBrands.includes(brand) && !suvKeywords.some((kw) => slug.includes(kw))) cats.add("sports")
  if (luxuryBrands.includes(brand)) cats.add("luxury")

  const sportsModels = ["m3", "m4", "m5", "rs3", "rs5", "rs6", "rs7", "r8", "gt63", "amg-c63"]
  if (sportsModels.some((m) => slug.includes(m))) cats.add("sports")

  // Ferrari luxury models (GT/touring)
  if (brand === "Ferrari") {
    const ferrariLuxury = ["roma", "portofino", "purosangue", "812", "f8", "296", "sf90"]
    if (ferrariLuxury.some((m) => slug.includes(m))) cats.add("luxury")
  }

  // Lamborghini luxury (aventador, revuelto, huracan STO/tecnica)
  if (brand === "Lamborghini") {
    const lamboLuxury = ["aventador", "revuelto", "huracan-sto", "huracan-tecnica", "huracan-coupe", "huracan-evo-coupe"]
    if (lamboLuxury.some((m) => slug.includes(m))) cats.add("luxury")
  }

  // Mercedes luxury sedans/GTs
  if (brand === "Mercedes Benz") {
    const mercedesLuxury = ["gt63", "maybach", "v250", "gls800"]
    if (mercedesLuxury.some((m) => slug.includes(m))) cats.add("luxury")
  }

  // BMW luxury
  if (brand === "BMW") {
    const bmwLuxury = ["735", "m5", "x7"]
    if (bmwLuxury.some((m) => slug.includes(m))) cats.add("luxury")
  }

  // Porsche luxury
  if (brand === "Porsche" && slug.includes("911")) cats.add("luxury")

  // McLaren luxury (high-end models)
  if (brand === "McLaren") {
    const mclarenLuxury = ["765lt", "720s", "750s"]
    if (mclarenLuxury.some((m) => slug.includes(m))) cats.add("luxury")
  }

  // Maserati is luxury
  if (brand === "Maserati") cats.add("luxury")

  return [...cats]
}

function convertAEDtoOther(aed: number): { USD: number; EUR: number; GBP: number } {
  return {
    USD: Math.round(aed / 3.67),
    EUR: Math.round(aed / 4.0),
    GBP: Math.round(aed / 4.65),
  }
}

function parseCar(filePath: string, carUrlsFile: string): ParsedCar | null {
  const content = readFileSync(filePath, "utf-8")
  const slug = basename(filePath, ".md")

  const nameMatch = content.match(/^#\s+(.+?)$/m)
  let name = nameMatch ? nameMatch[1].trim() : slug.replace(/-/g, " ")
  name = name.replace(/\s+Exhaust sound.*/, "")

  const { brand, brandSlug: defaultBrandSlug } = extractBrandFromSlug(slug)
  const brandSlug = extractBrandSlugFromUrl(carUrlsFile, slug) || defaultBrandSlug
  const href = `/${brandSlug}/${slug}`

  const images = extractImages(content)
  const imagePath = images[0] || `/images/cars/${slug}.jpg`

  const priceAED = parsePrice(content)
  const year = extractSpec(content, "Year")
  const color = extractSpec(content, "Color")
  const engineType = extractSpec(content, "Engine type")
  const power = extractSpec(content, "Power")
  const acceleration = extractSpec(content, "0-100 km/h")
  const engineCapacity = extractSpec(content, "Engine capacity")
  const driveType = extractSpec(content, "Drive Type")
  const transmission = extractSpec(content, "Transmission")
  const doorsStr = extractSpec(content, "Number of doors")
  const seatsStr = extractSpec(content, "Seats")
  const doors = parseInt(doorsStr, 10) || 2
  const seats = parseInt(seatsStr, 10) || 2
  const features = extractFeatures(content)
  const description = extractDescription(content)
  const categories = determineCategories(slug, brand)

  return {
    slug,
    name,
    brand,
    brandSlug,
    description,
    imagePath,
    images,
    year,
    color,
    engineType,
    power,
    acceleration,
    engineCapacity,
    driveType,
    transmission,
    doors,
    seats,
    features,
    priceAED,
    categories,
    href,
  }
}

function main() {
  const carUrlsFile = join(__dirname, "../.firecrawl/car-urls.txt")
  const files = readdirSync(CARS_DIR).filter((f) => f.endsWith(".md")).sort()

  console.log(`Parsing ${files.length} car files...`)

  const cars: ParsedCar[] = []
  for (const file of files) {
    const car = parseCar(join(CARS_DIR, file), carUrlsFile)
    if (car && car.priceAED > 0) {
      cars.push(car)
    } else {
      console.warn(`Skipped ${file}: no price found`)
    }
  }

  console.log(`Successfully parsed ${cars.length} cars`)

  const sportsCars = cars.filter((c) => c.categories.includes("sports"))
  const convertibleCars = cars.filter((c) => c.categories.includes("convertible"))
  const luxuryCars = cars.filter((c) => c.categories.includes("luxury"))
  const suvCars = cars.filter((c) => c.categories.includes("suv"))

  console.log(`Sports: ${sportsCars.length}, Convertible: ${convertibleCars.length}, Luxury: ${luxuryCars.length}, SUV: ${suvCars.length}`)

  function carToTS(car: ParsedCar): string {
    const others = convertAEDtoOther(car.priceAED)
    return `  {
    slug: ${JSON.stringify(car.slug)},
    name: ${JSON.stringify(car.name)},
    brand: ${JSON.stringify(car.brand)},
    description: ${JSON.stringify(car.description)},
    imagePath: ${JSON.stringify(car.imagePath)},
    images: ${JSON.stringify(car.images)},
    year: ${JSON.stringify(car.year)},
    color: ${JSON.stringify(car.color)},
    specs: {
      engineType: ${JSON.stringify(car.engineType)},
      acceleration: ${JSON.stringify(car.acceleration)},
      doors: ${car.doors},
      seats: ${car.seats},
    },
    features: ${JSON.stringify(car.features)},
    prices: { AED: ${car.priceAED}, USD: ${others.USD}, EUR: ${others.EUR}, GBP: ${others.GBP} },
    href: ${JSON.stringify(car.href)},
    categories: ${JSON.stringify(car.categories)},
  }`
  }

  const output = `import type { CarListing, CarCategory } from "../_types/car"

export const carCategories: CarCategory[] = [
  {
    slug: "sports",
    name: "Sports",
    iconPath: "/images/car-types/sports.svg",
    href: "/rent-sports-cars-dubai",
  },
  {
    slug: "convertible",
    name: "Convertible",
    iconPath: "/images/car-types/convertible.svg",
    href: "/rent-convertible-cars-dubai",
  },
  {
    slug: "luxury",
    name: "Luxury",
    iconPath: "/images/car-types/luxury.png",
    href: "/rent-luxury-cars-dubai",
  },
  {
    slug: "suv",
    name: "SUV",
    iconPath: "/images/car-types/suv.svg",
    href: "/rent-suv-cars-dubai",
  },
  {
    slug: "electric",
    name: "Electric",
    iconPath: "/images/car-types/electric.svg",
    href: "/rent-electric-cars-dubai",
  },
]

export const sportsCars: CarListing[] = [
${sportsCars.map(carToTS).join(",\n")}
]

export const convertibleCars: CarListing[] = [
${convertibleCars.map(carToTS).join(",\n")}
]

export const luxuryCars: CarListing[] = [
${luxuryCars.map(carToTS).join(",\n")}
]

export const suvCars: CarListing[] = [
${suvCars.map(carToTS).join(",\n")}
]
`

  writeFileSync(OUTPUT, output)
  console.log(`Written to ${OUTPUT}`)

  // Print summary
  console.log("\nCars by brand:")
  const byBrand: Record<string, number> = {}
  for (const car of cars) {
    byBrand[car.brand] = (byBrand[car.brand] || 0) + 1
  }
  for (const [brand, count] of Object.entries(byBrand).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${brand}: ${count}`)
  }
}

main()
