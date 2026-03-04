import { Mail, MapPin } from "lucide-react"
import { PhoneIcon } from "@/components/icons/phone-icon"
import { ContactIconCircle } from "./contact-icon-circle"
import { contactData } from "../_lib/contact-data"

function ContactInfoBar() {
  return (
    <section className="bg-neutral-900 py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-3">
        <div className="flex items-center gap-4">
          <ContactIconCircle>
            <PhoneIcon />
          </ContactIconCircle>
          <div>
            <h3 className="text-lg font-bold text-neutral-50">Phone</h3>
            <p className="text-sm text-neutral-400">
              <a href={contactData.phones[0].href} className="hover:text-primary-500 transition-colors">
                {contactData.phones[0].label}
              </a>
              {" - "}
              <a href={contactData.phones[1].href} className="hover:text-primary-500 transition-colors">
                {contactData.phones[1].label}
              </a>
            </p>
            <p className="text-sm text-neutral-400">
              Landline:{" "}
              <a href={contactData.landline.href} className="hover:text-primary-500 transition-colors">
                {contactData.landline.label}
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ContactIconCircle>
            <Mail className="h-5 w-5" />
          </ContactIconCircle>
          <div>
            <h3 className="text-lg font-bold text-neutral-50">Email</h3>
            <a
              href={contactData.email.href}
              className="text-sm text-neutral-400 hover:text-primary-500 transition-colors"
            >
              {contactData.email.label}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ContactIconCircle>
            <MapPin className="h-5 w-5" />
          </ContactIconCircle>
          <div>
            <h3 className="text-lg font-bold text-neutral-50">Address</h3>
            <a
              href={contactData.address.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 hover:text-primary-500 transition-colors"
            >
              {contactData.address.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export { ContactInfoBar }
