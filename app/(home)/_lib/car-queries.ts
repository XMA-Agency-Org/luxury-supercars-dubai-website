import type { CarListing } from "../_types/car"
import {
  sportsCars,
  convertibleCars,
  luxuryCars,
  suvCars,
} from "./car-data"

const allCarsMap = new Map<string, CarListing>()
for (const car of [...sportsCars, ...convertibleCars, ...luxuryCars, ...suvCars]) {
  allCarsMap.set(car.slug, car)
}
const allCars: CarListing[] = [...allCarsMap.values()]

function getAllCars(): CarListing[] {
  return allCars
}

function getCarsByCategory(slug: string): CarListing[] {
  return allCars.filter((car) => car.categories.includes(slug))
}

function getCarsByBrand(brandSlug: string): CarListing[] {
  return allCars.filter((car) => {
    const carBrandPath = car.href.split("/")[1]
    return carBrandPath === brandSlug
  })
}

function getCarBySlug(slug: string): CarListing | undefined {
  return allCarsMap.get(slug)
}

function getCarByHref(href: string): CarListing | undefined {
  return allCars.find((car) => car.href === href)
}

function getSimilarCars(car: CarListing, limit = 4): CarListing[] {
  const sameBrand = allCars.filter(
    (c) => c.slug !== car.slug && c.brand === car.brand
  )
  if (sameBrand.length >= limit) return sameBrand.slice(0, limit)

  const sameCategory = allCars.filter(
    (c) =>
      c.slug !== car.slug &&
      !sameBrand.includes(c) &&
      c.categories.some((cat) => car.categories.includes(cat))
  )
  return [...sameBrand, ...sameCategory].slice(0, limit)
}

function getBrandFromHref(href: string): string {
  const segment = href.split("/")[1] ?? ""
  return segment
    .replace("rent-", "")
    .replace("-dubai", "")
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}

export {
  getAllCars,
  getCarsByCategory,
  getCarsByBrand,
  getCarBySlug,
  getCarByHref,
  getSimilarCars,
  getBrandFromHref,
}
