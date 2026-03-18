import { Clock } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { businessHours } from "../_lib/contact-page-data"

function BusinessHours() {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" })

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <Clock className="w-6 h-6 text-primary-500" />
          <SectionHeading>Business Hours</SectionHeading>
        </div>
        <div className="max-w-xl rounded-2xl border border-neutral-800 bg-surface p-6">
          <div className="space-y-3">
            {businessHours.map((item) => (
              <div
                key={item.day}
                className={`flex items-center justify-between py-2 px-3 rounded-lg ${
                  item.day === today
                    ? "bg-primary-500/10 text-primary-500"
                    : "text-neutral-500"
                }`}
              >
                <span className="font-medium">{item.day}</span>
                <span>{item.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { BusinessHours }
