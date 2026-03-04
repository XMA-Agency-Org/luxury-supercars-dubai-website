import { SectionHeading } from "@/components/ui/section-heading"
import { Card } from "@/components/ui/card"
import { UserCheck, IdCard, Truck } from "lucide-react"

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

const DOCUMENT_CARDS = [
  {
    icon: <UserCheck className="w-8 h-8 text-primary-500" />,
    title: "AGE",
    description: "You should be at least 21 years old.",
  },
  {
    icon: <IdCard className="w-8 h-8 text-primary-500" />,
    title: "Driving License",
    description:
      "You should have a valid UAE driving license if you are UAE resident or You should have an International driving license.",
  },
  {
    icon: <Truck className="w-8 h-8 text-primary-500" />,
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
