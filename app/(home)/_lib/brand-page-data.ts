export type BrandPageConfig = {
  slug: string
  name: string
  description: string
  metaTitle: string
  metaDescription: string
}

export const brandPages: Record<string, BrandPageConfig> = {
  "rent-aston-martin-dubai": {
    slug: "rent-aston-martin-dubai",
    name: "Aston Martin",
    description:
      "Experience British automotive excellence with our Aston Martin rental collection. Known for timeless elegance and powerful performance, Aston Martin represents the pinnacle of luxury grand touring.",
    metaTitle: "Rent Aston Martin in Dubai | Luxury Supercars Dubai",
    metaDescription:
      "Rent an Aston Martin in Dubai. Experience British luxury and performance. Free delivery across Dubai.",
  },
  "rent-audi-dubai": {
    slug: "rent-audi-dubai",
    name: "Audi",
    description:
      "Drive the latest Audi models in Dubai. From the sporty RS range to the luxurious A8, Audi combines cutting-edge technology with refined German engineering.",
    metaTitle: "Rent Audi in Dubai | Luxury Supercars Dubai",
    metaDescription:
      "Rent premium Audi vehicles in Dubai. RS models, Q series SUVs, and more. Competitive daily rates.",
  },
  "rent-bentley-dubai": {
    slug: "rent-bentley-dubai",
    name: "Bentley",
    description:
      "Indulge in the ultimate luxury with our Bentley collection. Each Bentley is handcrafted to perfection, offering unparalleled comfort, prestige, and performance.",
    metaTitle: "Rent Bentley in Dubai | Luxury Supercars Dubai",
    metaDescription:
      "Rent a Bentley in Dubai. Continental GT, Bentayga, and more. The ultimate in British luxury.",
  },
  "rent-bmw-dubai": {
    slug: "rent-bmw-dubai",
    name: "BMW",
    description:
      "Experience the ultimate driving machine with our BMW rental collection. From the powerful X6 M Competition to elegant sedans, BMW delivers exhilarating performance.",
    metaTitle: "Rent BMW in Dubai | Luxury Supercars Dubai",
    metaDescription:
      "Rent BMW vehicles in Dubai. X6 M Competition, 7 Series, and more. German engineering at its finest.",
  },
  "rent-bugatti-dubai": {
    slug: "rent-bugatti-dubai",
    name: "Bugatti",
    description:
      "Drive the world's most exclusive hypercar brand. Bugatti represents the absolute pinnacle of automotive engineering, speed, and luxury.",
    metaTitle: "Rent Bugatti in Dubai | Luxury Supercars Dubai",
    metaDescription:
      "Rent a Bugatti in Dubai. Experience unmatched speed and luxury with the world's most exclusive hypercar.",
  },
  "rent-cadillac-dubai": {
    slug: "rent-cadillac-dubai",
    name: "Cadillac",
    description:
      "Experience bold American luxury with our Cadillac collection. Known for their distinctive style and powerful presence, Cadillac vehicles make a statement on Dubai's roads.",
    metaTitle: "Rent Cadillac in Dubai | Luxury Supercars Dubai",
    metaDescription:
      "Rent a Cadillac in Dubai. Bold American luxury meets Dubai's vibrant streets. Premium service guaranteed.",
  },
  "rent-ferrari-dubai": {
    slug: "rent-ferrari-dubai",
    name: "Ferrari",
    description:
      "Live the dream with a Ferrari rental in Dubai. From the iconic prancing horse emblem to the thunderous engine roar, every moment in a Ferrari is extraordinary.",
    metaTitle: "Rent Ferrari in Dubai | Luxury Supercars Dubai",
    metaDescription:
      "Rent a Ferrari in Dubai. Experience Italian racing heritage and passion on Dubai's finest roads.",
  },
  "rent-lamborghini-dubai": {
    slug: "rent-lamborghini-dubai",
    name: "Lamborghini",
    description:
      "Unleash raw Italian power with our Lamborghini fleet. From the Huracan to the Revuelto, every Lamborghini delivers an adrenaline-fueled driving experience like no other.",
    metaTitle: "Rent Lamborghini in Dubai | Luxury Supercars Dubai",
    metaDescription:
      "Rent a Lamborghini in Dubai. Huracan STO, Revuelto, and more. Unleash Italian supercar power.",
  },
  "rent-maserati-dubai": {
    slug: "rent-maserati-dubai",
    name: "Maserati",
    description:
      "Experience the elegance of Maserati in Dubai. Italian craftsmanship meets luxurious performance in every Maserati model, offering a refined yet thrilling driving experience.",
    metaTitle: "Rent Maserati in Dubai | Luxury Supercars Dubai",
    metaDescription:
      "Rent a Maserati in Dubai. Italian elegance and performance combined. Premium rental service.",
  },
  "rent-mclaren-dubai": {
    slug: "rent-mclaren-dubai",
    name: "McLaren",
    description:
      "Push the limits with our McLaren collection. Born from Formula 1 racing heritage, McLaren supercars deliver breathtaking performance and cutting-edge aerodynamics.",
    metaTitle: "Rent McLaren in Dubai | Luxury Supercars Dubai",
    metaDescription:
      "Rent a McLaren in Dubai. 750S Spyder and more. F1-inspired performance on Dubai's roads.",
  },
  "rent-mercedes-benz-dubai": {
    slug: "rent-mercedes-benz-dubai",
    name: "Mercedes Benz",
    description:
      "Drive the best or nothing with our Mercedes-Benz collection. From the iconic G63 AMG to the elegant Maybach, Mercedes combines luxury, innovation, and performance.",
    metaTitle: "Rent Mercedes Benz in Dubai | Luxury Supercars Dubai",
    metaDescription:
      "Rent a Mercedes Benz in Dubai. G63 AMG, Maybach, and more. German luxury and engineering excellence.",
  },
  "rent-porsche-dubai": {
    slug: "rent-porsche-dubai",
    name: "Porsche",
    description:
      "Experience precision engineering with our Porsche fleet. From the iconic 911 to powerful SUVs, every Porsche delivers an engaging and exhilarating driving experience.",
    metaTitle: "Rent Porsche in Dubai | Luxury Supercars Dubai",
    metaDescription:
      "Rent a Porsche in Dubai. 911 Turbo S, Cayenne, and more. German precision on Dubai's roads.",
  },
  "rent-range-rover-dubai": {
    slug: "rent-range-rover-dubai",
    name: "Range Rover",
    description:
      "Command any terrain in style with our Range Rover collection. The perfect blend of luxury and capability, Range Rover is the SUV of choice for Dubai's discerning drivers.",
    metaTitle: "Rent Range Rover in Dubai | Luxury Supercars Dubai",
    metaDescription:
      "Rent a Range Rover in Dubai. Luxury SUV rental with free delivery. Perfect for any occasion.",
  },
  "rent-rolls-royce-dubai": {
    slug: "rent-rolls-royce-dubai",
    name: "Rolls Royce",
    description:
      "Experience the epitome of luxury motoring with our Rolls Royce collection. Every detail is crafted to perfection, delivering an experience that is truly beyond compare.",
    metaTitle: "Rent Rolls Royce in Dubai | Luxury Supercars Dubai",
    metaDescription:
      "Rent a Rolls Royce in Dubai. Dawn, Ghost, Phantom, and more. The ultimate luxury car experience.",
  },
}

export function getBrandPageSlugs(): string[] {
  return Object.keys(brandPages)
}
