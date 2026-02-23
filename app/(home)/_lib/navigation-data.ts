import type { NavItem } from "../_types/navigation"

export const navigationItems: NavItem[] = [
  { label: "About Us", href: "/about-us" },
  {
    label: "Cars Types",
    href: "#",
    dropdown: [
      {
        label: "Luxury Cars",
        href: "/rent-luxury-cars-dubai",
        iconPath: "/images/car-types/luxury.png",
      },
      {
        label: "Convertible Cars",
        href: "/rent-convertible-cars-dubai",
        iconPath: "/images/car-types/convertible.svg",
      },
      {
        label: "Sports Cars",
        href: "/rent-sports-cars-dubai",
        iconPath: "/images/car-types/sports.svg",
      },
      {
        label: "Electric Cars",
        href: "/rent-electric-cars-dubai",
        iconPath: "/images/car-types/electric.svg",
      },
      {
        label: "SUV Cars",
        href: "/rent-suv-cars-dubai",
        iconPath: "/images/car-types/suv.svg",
      },
    ],
  },
  {
    label: "Cars Brands",
    href: "#",
    dropdown: [
      {
        label: "Aston Martin",
        href: "/brands/rent-aston-martin-dubai",
        iconPath: "/images/brands/aston-martin.png",
      },
      {
        label: "Audi",
        href: "/brands/rent-audi-dubai",
        iconPath: "/images/brands/audi.png",
      },
      {
        label: "Bentley",
        href: "/brands/rent-bentley-dubai",
        iconPath: "/images/brands/bentley.png",
      },
      {
        label: "BMW",
        href: "/brands/rent-bmw-dubai",
        iconPath: "/images/brands/bmw.png",
      },
      {
        label: "Cadillac",
        href: "/brands/rent-cadillac-dubai",
        iconPath: "/images/brands/cadillac.png",
      },
      {
        label: "Ferrari",
        href: "/brands/rent-ferrari-dubai",
        iconPath: "/images/brands/ferrari.png",
      },
      {
        label: "Lamborghini",
        href: "/brands/rent-lamborghini-dubai",
        iconPath: "/images/brands/lamborghini.png",
      },
      {
        label: "Rolls Royce",
        href: "/brands/rent-rolls-royce-dubai",
        iconPath: "/images/brands/rolls-royce.png",
      },
      {
        label: "Maserati",
        href: "/brands/rent-maserati-dubai",
        iconPath: "/images/brands/maserati.png",
      },
      {
        label: "McLaren",
        href: "/brands/rent-mclaren-dubai",
        iconPath: "/images/brands/mclaren.svg",
      },
      {
        label: "Mercedes Benz",
        href: "/brands/rent-mercedes-benz-dubai",
        iconPath: "/images/brands/mercedes.png",
      },
      {
        label: "Porsche",
        href: "/brands/rent-porsche-dubai",
        iconPath: "/images/brands/porsche.png",
      },
      {
        label: "Range Rover",
        href: "/brands/rent-range-rover-dubai",
        iconPath: "/images/brands/range-rover.png",
      },
    ],
  },
  { label: "Our Fleet", href: "/our-fleet" },
  { label: "Services", href: "/services" },
  { label: "FAQs", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
]
