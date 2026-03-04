export type BusinessCard = {
  title: string
  description: string
  imagePath: string
}

export type PressArticle = {
  title: string
  imagePath: string
  href: string
}

export type SocialEmbed = {
  platform: string
  embedUrl: string
  title: string
}

export const aboutIntro = {
  heading: "About Luxury Supercars Dubai",
  paragraphs: [
    "Luxury Supercars Dubai is the premier destination for luxury and supercar rentals in Dubai, UAE. Founded with a passion for exceptional automobiles and world-class service, we offer an unmatched fleet of the world's most prestigious vehicles.",
    "Our commitment to excellence extends beyond our vehicles. From the moment you contact us to the second you return your keys, every interaction is designed to exceed your expectations. We believe luxury is not just about the car — it's about the entire experience.",
    "With years of experience in Dubai's luxury automotive market, our team of experts ensures that every rental is seamless, personalized, and unforgettable. Whether you're visiting Dubai for business or pleasure, we make your journey extraordinary.",
  ],
}

export const ceoSection = {
  name: "Ahmed Amwell",
  title: "Founder & CEO",
  videoId: "TjB258kdQFc",
  description:
    "Ahmed Amwell is the visionary behind Luxury Supercars Dubai, bringing years of passion for luxury automobiles and customer service excellence to Dubai's premium car rental industry.",
}

export const businessCards: BusinessCard[] = [
  {
    title: "Luxury Supercars Dubai",
    description: "Premium supercar and luxury car rental services in Dubai",
    imagePath: "/images/about/showroom.webp",
  },
  {
    title: "24/7 Concierge Service",
    description: "Round-the-clock support for all your rental needs",
    imagePath: "/images/about/showroom.webp",
  },
  {
    title: "Free Delivery Across Dubai",
    description: "Complimentary delivery to your hotel, airport, or any location",
    imagePath: "/images/about/showroom.webp",
  },
]

export const aboutMeSection = {
  heading: "The Man Behind the Wheel",
  paragraphs: [
    "With a lifelong passion for supercars and luxury automobiles, Ahmed Amwell founded Luxury Supercars Dubai to share his love of exceptional vehicles with visitors and residents of Dubai.",
    "What started as a small collection has grown into one of Dubai's most trusted luxury car rental companies, serving thousands of satisfied clients from around the world.",
  ],
  imagePath: "/images/about/showroom.webp",
}

export const tabNavItems = [
  { id: "about", label: "About" },
  { id: "ceo", label: "CEO" },
  { id: "business", label: "Business" },
  { id: "press", label: "Press" },
  { id: "social", label: "Social" },
]
