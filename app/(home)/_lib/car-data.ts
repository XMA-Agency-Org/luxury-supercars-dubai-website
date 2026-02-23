import type { CarListing, CarCategory } from "../_types/car"

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
  {
    slug: "lamborghini-huracan-sto-orange",
    name: "Lamborghini Huracan STO",
    description:
      "The 2025 Lamborghini Huracan STO is like a race car that you can actually drive on the street. It's based on the regular Huracan, but everything about it is more extreme.",
    imagePath: "/images/cars/lamborghini-huracan-sto-orange.jpg",
    specs: { engineType: "V10", acceleration: "3.0 seconds", doors: 2, seats: 2 },
    prices: { AED: 4000, USD: 1090, EUR: 1000, GBP: 860 },
    href: "/rent-lamborghini-dubai/lamborghini-huracan-sto-orange",
  },
  {
    slug: "lamborghini-revuelto",
    name: "Lamborghini Revuelto",
    description:
      "The Lamborghini Revuelto is an electrifying mix of untamed performance and advanced hybrid innovation!",
    imagePath: "/images/cars/lamborghini-revuelto.jpg",
    specs: { engineType: "V12", acceleration: "2.5 seconds", doors: 2, seats: 2 },
    prices: { AED: 12000, USD: 3267, EUR: 3000, GBP: 2580 },
    href: "/rent-lamborghini-dubai/lamborghini-revuelto",
  },
  {
    slug: "lamborghini-huracan-tecnica",
    name: "Lamborghini Huracan Tecnica",
    description:
      "Renting the Lamborghini Huracán Tecnica is an absolute dream. It's the kind of car that makes every drive feel like an event.",
    imagePath: "/images/cars/lamborghini-huracan-tecnica.webp",
    specs: { engineType: "V10", acceleration: "3.2 seconds", doors: 2, seats: 2 },
    prices: { AED: 3500, USD: 953, EUR: 875, GBP: 752 },
    href: "/rent-lamborghini-dubai/lamborghini-huracan-tecnica",
  },
  {
    slug: "mclaren-750s-spyder",
    name: "Mclaren 750S Spyder",
    description:
      "McLaren 750S, an enhanced version of the renowned 720S— is faster, sharper, and more dramatic than its predecessor.",
    imagePath: "/images/cars/mclaren-750s-spyder.jpg",
    specs: { engineType: "V8", acceleration: "2.8 seconds", doors: 2, seats: 2 },
    prices: { AED: 5000, USD: 1361, EUR: 1250, GBP: 1075 },
    href: "/rent-mclaren-dubai/mclaren-750s-spyder",
  },
]

export const convertibleCars: CarListing[] = [
  {
    slug: "rolls-royce-dawn-white",
    name: "Rolls Royce Dawn White",
    description:
      "Experience the ultimate luxury with the 2021 Rolls Royce Dawn. Rent it today in Dubai and experience opulence and comfort.",
    imagePath: "/images/cars/rolls-royce-dawn-white.jpeg",
    specs: { engineType: "V12", acceleration: "4.7 seconds", doors: 2, seats: 4 },
    prices: { AED: 3000, USD: 817, EUR: 750, GBP: 645 },
    href: "/rent-rolls-royce-dubai/rolls-royce-dawn-white",
  },
  {
    slug: "rolls-royce-dawn-black",
    name: "Rolls Royce Dawn Black",
    description:
      "Enjoy a luxury ride with the Rolls-Royce Dawn. Rent it now in Dubai from Luxury Supercars Dubai.",
    imagePath: "/images/cars/rolls-royce-dawn-black.webp",
    specs: { engineType: "V12", acceleration: "4.7 seconds", doors: 2, seats: 4 },
    prices: { AED: 3000, USD: 817, EUR: 750, GBP: 645 },
    href: "/rent-rolls-royce-dubai/rolls-royce-dawn-black",
  },
  {
    slug: "porsche-911-turbo-s",
    name: "Porsche 911 Turbo S",
    description:
      "The Porsche 911 Turbo S has gained its place as one of the favourites of any car enthusiast.",
    imagePath: "/images/cars/porsche-911-turbo-s.jpg",
    specs: { engineType: "3.7L F-6", acceleration: "3.2 seconds", doors: 2, seats: 4 },
    prices: { AED: 3500, USD: 953, EUR: 875, GBP: 752 },
    href: "/rent-porsche-dubai/porsche-911-turbo-s",
  },
  {
    slug: "porsche-911-carerra-s-spyder",
    name: "Porsche 911 Carerra S Spyder",
    description:
      "The Porsche 911 Carerra S Spyder sports car fits 3 passengers and 1 medium-sized bags.",
    imagePath: "/images/cars/porsche-911-carerra-s-spyder.jpeg",
    specs: { engineType: "3.0L F-6", acceleration: "3.5 seconds", doors: 2, seats: 2 },
    prices: { AED: 1600, USD: 436, EUR: 400, GBP: 344 },
    href: "/rent-porsche-dubai/porsche-911-carerra-s-spyder",
  },
]

export const luxuryCars: CarListing[] = [
  {
    slug: "mercedes-amg-g63-matte-gray",
    name: "Mercedes Benz AMG G63",
    description:
      "The G63 stands out with its bold design, wide body, square lines, and massive wheels, demanding attention wherever it goes.",
    imagePath: "/images/cars/mercedes-amg-g63-matte-gray.jpeg",
    specs: { engineType: "V8", acceleration: "4.5 seconds", doors: 4, seats: 5 },
    prices: { AED: 1800, USD: 490, EUR: 450, GBP: 387 },
    href: "/rent-mercedes-benz-dubai/mercedes-benz-amg-g63-matte-gray",
  },
  {
    slug: "lamborghini-huracan-sto",
    name: "Lamborghini Huracan STO",
    description:
      "Discover the thrill of its brand new Huracán STO, a road-legal super sports car with a racing heart.",
    imagePath: "/images/cars/lamborghini-huracan-sto.webp",
    specs: { engineType: "V10", acceleration: "3.0 seconds", doors: 2, seats: 2 },
    prices: { AED: 4000, USD: 1090, EUR: 1000, GBP: 860 },
    href: "/rent-lamborghini-dubai/lamborghini-huracan-sto",
  },
  {
    slug: "rolls-royce-dawn-white-luxury",
    name: "Rolls Royce Dawn White",
    description:
      "Experience the ultimate luxury with the 2021 Rolls Royce Dawn. Rent it today in Dubai and experience opulence and comfort.",
    imagePath: "/images/cars/rolls-royce-dawn-white.jpeg",
    specs: { engineType: "V12", acceleration: "4.7 seconds", doors: 2, seats: 4 },
    prices: { AED: 3000, USD: 817, EUR: 750, GBP: 645 },
    href: "/rent-rolls-royce-dubai/rolls-royce-dawn-white",
  },
  {
    slug: "mercedes-gls600-maybach",
    name: "Mercedes GLS600 Maybach",
    description:
      "Drive in style with the luxurious Mercedes GLS600 Maybach in Dubai. Rent now!",
    imagePath: "/images/cars/mercedes-gls600-maybach.jpeg",
    specs: { engineType: "V8", acceleration: "4.9 seconds", doors: 4, seats: 4 },
    prices: { AED: 2500, USD: 681, EUR: 625, GBP: 537 },
    href: "/rent-mercedes-benz-dubai/mercedes-gls600-maybach",
  },
]

export const suvCars: CarListing[] = [
  {
    slug: "bmw-x6-m-competition-red",
    name: "BMW X6 M Competition Red",
    description:
      "Experience the power of the BMW X6 M Competition in Dubai! Rent this luxury car for an unforgettable ride.",
    imagePath: "/images/cars/bmw-x6-m-competition-red.webp",
    specs: { engineType: "V8", acceleration: "3.9 seconds", doors: 4, seats: 5 },
    prices: { AED: 1500, USD: 409, EUR: 375, GBP: 322 },
    href: "/rent-bmw-dubai/bmw-x6-m-competition-red",
  },
  {
    slug: "mercedes-g63-amg-white",
    name: "Mercedes Benz G63 AMG",
    description:
      "The 2020 Mercedes-AMG G63 comes with a twin-turbocharged 4.0-liter V-8 engine that makes 577 horsepower.",
    imagePath: "/images/cars/mercedes-g63-amg-white.jpeg",
    specs: { engineType: "V8", acceleration: "4.5 seconds", doors: 4, seats: 5 },
    prices: { AED: 1800, USD: 490, EUR: 450, GBP: 387 },
    href: "/rent-mercedes-benz-dubai/mercedes-benz-g63-amg-white",
  },
  {
    slug: "bentley-bentayga-brown",
    name: "Bentley Bentayga",
    description:
      "The Bentley Bentayga is the best luxury SUV option for both daily drive and special occasions.",
    imagePath: "/images/cars/bentley-bentayga-brown.jpg",
    specs: { engineType: "V8", acceleration: "4.5 seconds", doors: 4, seats: 5 },
    prices: { AED: 2200, USD: 599, EUR: 550, GBP: 473 },
    href: "/rent-bentley-dubai/bentley-bentayga-brown",
  },
  {
    slug: "mercedes-g63-amg-black",
    name: "Mercedes Benz G63 AMG",
    description:
      "Rent a luxurious 2021 Mercedes-Benz G63 AMG in Dubai with Luxury Supercars Dubai.",
    imagePath: "/images/cars/mercedes-g63-amg-black.webp",
    specs: { engineType: "V8", acceleration: "4.5 seconds", doors: 4, seats: 5 },
    prices: { AED: 1800, USD: 490, EUR: 450, GBP: 387 },
    href: "/rent-mercedes-benz-dubai/mercedes-benz-g63-amg",
  },
]
