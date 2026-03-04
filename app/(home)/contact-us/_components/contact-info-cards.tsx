import { Phone, Mail, MapPin } from "lucide-react"
import { ContactIconCircle } from "../../_components/contact-icon-circle"
import { contactData } from "../../_lib/contact-data"

function ContactInfoCards() {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <ContactIconCircle variant="solid">
          <Phone className="w-5 h-5" />
        </ContactIconCircle>
        <div>
          <h3 className="font-heading text-lg font-semibold mb-2">Phone</h3>
          {contactData.phones.map((phone) => (
            <a
              key={phone.href}
              href={phone.href}
              className="block text-neutral-400 hover:text-primary-500 transition-colors"
            >
              {phone.label}
            </a>
          ))}
          <a
            href={contactData.landline.href}
            className="block text-neutral-400 hover:text-primary-500 transition-colors"
          >
            {contactData.landline.label}
          </a>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <ContactIconCircle variant="solid">
          <Mail className="w-5 h-5" />
        </ContactIconCircle>
        <div>
          <h3 className="font-heading text-lg font-semibold mb-2">Email</h3>
          <a
            href={contactData.email.href}
            className="text-neutral-400 hover:text-primary-500 transition-colors"
          >
            {contactData.email.label}
          </a>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <ContactIconCircle variant="solid">
          <MapPin className="w-5 h-5" />
        </ContactIconCircle>
        <div>
          <h3 className="font-heading text-lg font-semibold mb-2">Address</h3>
          <a
            href={contactData.address.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-primary-500 transition-colors"
          >
            {contactData.address.label}
          </a>
        </div>
      </div>
    </div>
  )
}

export { ContactInfoCards }
