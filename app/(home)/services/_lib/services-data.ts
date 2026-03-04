import type { LucideIcon } from "lucide-react"
import { Gift, UserCheck, CalendarClock, Heart } from "lucide-react"

export type ServiceItem = {
  title: string
  description: string
  icon: LucideIcon
  href: string
}

export const services: ServiceItem[] = [
  {
    title: "Gift Voucher",
    description:
      "Give the gift of luxury with our supercar rental gift vouchers. Perfect for birthdays, anniversaries, and special occasions. Choose any car from our fleet and let your loved ones experience the thrill of driving a supercar in Dubai.",
    icon: Gift,
    href: "/contact-us",
  },
  {
    title: "Chauffeur Service",
    description:
      "Sit back and relax while our professional chauffeurs take the wheel. Available with any vehicle in our fleet, our chauffeur service is perfect for business meetings, airport transfers, and special events.",
    icon: UserCheck,
    href: "/contact-us",
  },
  {
    title: "Long Term Rental",
    description:
      "Enjoy exclusive rates on long-term luxury car rentals in Dubai. Whether you need a car for a month or longer, we offer flexible contracts with competitive pricing and full support throughout your rental period.",
    icon: CalendarClock,
    href: "/contact-us",
  },
  {
    title: "Wedding Cars",
    description:
      "Make your special day unforgettable with our stunning wedding car collection. From elegant Rolls Royces to head-turning Lamborghinis, we provide beautifully decorated cars to complement your wedding celebrations.",
    icon: Heart,
    href: "/contact-us",
  },
]
