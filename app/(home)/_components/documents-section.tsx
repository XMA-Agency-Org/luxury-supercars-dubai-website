import { SectionHeading } from "@/components/ui/section-heading"
import { Card } from "@/components/ui/card"

type DocumentCardProps = {
  icon: React.ReactNode
  title: string
  description: string
}

function DocumentCard({ icon, title, description }: DocumentCardProps) {
  return (
    <Card className="p-8 text-center">
      <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary-500/10 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-neutral-400 text-sm">{description}</p>
    </Card>
  )
}

function AgeBadge() {
  return (
    <span className="text-2xl font-bold text-primary-500">21+</span>
  )
}

function DrivingLicenseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8 text-primary-500"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  )
}

function DeliveryTruckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8 text-primary-500"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 13.52 8H14" />
      <path d="M17 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 15.52 8H14" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  )
}

const DOCUMENT_CARDS = [
  {
    icon: <AgeBadge />,
    title: "AGE",
    description: "You should be at least 21 years old.",
  },
  {
    icon: <DrivingLicenseIcon />,
    title: "Driving License",
    description:
      "You should have a valid UAE driving license if you are UAE resident or You should have an International driving license.",
  },
  {
    icon: <DeliveryTruckIcon />,
    title: "Free Delivery",
    description:
      "We offer a free delivery to our customers to their desired location.",
  },
]

export function DocumentsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <SectionHeading className="text-center mb-10">
        What <strong className="text-primary-500">documents</strong> Are Needed
        To <strong className="text-primary-500">Rent</strong> A Car in Dubai
      </SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {DOCUMENT_CARDS.map((card) => (
          <DocumentCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  )
}
