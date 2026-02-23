import NextLink from "next/link"
import Image from "next/image"
import { Logo } from "@/components/icons/logo"
import { contactData } from "@/app/(home)/_lib/contact-data"
import { PhoneIcon } from "@/components/icons/phone-icon"
import { LandlineIcon } from "@/components/icons/landline-icon"
import { EmailIcon } from "@/components/icons/email-icon"
import { MapPinIcon } from "@/components/icons/map-pin-icon"
import {
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
  TikTokIcon,
} from "@/components/icons/social-icons"

const footerDescription =
  "If you are looking to rent the latest luxury Car in Dubai, luxurysupercarsdubai.com is a one-stop destination for all. You can avail the widest range of the most exotic luxury cars, including everything from the latest Sports Cars, Convertible Cars, SUVs, Supercars, and Prestige Cars, all of which would surely provide you with a fascinating experience."

const footerBrandLinks = [
  { label: "Audi", href: "/brands/rent-audi-dubai" },
  { label: "BMW", href: "/brands/rent-bmw-dubai" },
  { label: "Mercedes Benz", href: "/brands/rent-mercedes-benz-dubai" },
  { label: "Lamborghini", href: "/brands/rent-lamborghini-dubai" },
  { label: "Rolls Royce", href: "/brands/rent-rolls-royce-dubai" },
  { label: "Bentley", href: "/brands/rent-bentley-dubai" },
  { label: "Ferrari", href: "/brands/rent-ferrari-dubai" },
  { label: "Porsche", href: "/brands/rent-porsche-dubai" },
]

const footerUsefulLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Fleet", href: "/our-fleet" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact Us", href: "/contact-us" },
]

const paymentMethods = [
  { name: "Visa", src: "/images/payments/visa.png" },
  { name: "Mastercard", src: "/images/payments/mastercard.png" },
  { name: "Amex", src: "/images/payments/amex.png" },
]

const legalLinks = [
  { label: "Booking T&C'S", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
]

function FooterSocialLinks() {
  const socialEntries = [
    { Icon: FacebookIcon, href: contactData.socials.facebook, label: "Facebook" },
    { Icon: InstagramIcon, href: contactData.socials.instagram, label: "Instagram" },
    { Icon: YouTubeIcon, href: contactData.socials.youtube, label: "YouTube" },
    { Icon: TikTokIcon, href: contactData.socials.tiktok, label: "TikTok" },
  ]

  return (
    <div className="flex items-center gap-3">
      {socialEntries.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 transition-colors duration-200 hover:text-primary-500"
          aria-label={label}
        >
          <Icon />
        </a>
      ))}
    </div>
  )
}

function FooterLinkList({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div>
      <h3 className="font-heading text-lg font-semibold text-neutral-50 mb-4">
        {title}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <NextLink
              href={link.href}
              className="text-neutral-400 text-sm font-body transition-colors duration-200 hover:text-primary-500"
            >
              {link.label}
            </NextLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

function FooterContactItem({
  icon,
  href,
  label,
  isExternal = false,
}: {
  icon: React.ReactNode
  href: string
  label: string
  isExternal?: boolean
}) {
  return (
    <a
      href={href}
      className="flex items-start gap-3 text-neutral-400 text-sm font-body transition-colors duration-200 hover:text-primary-500"
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
    >
      <span className="shrink-0 mt-0.5 text-primary-500">{icon}</span>
      {label}
    </a>
  )
}

export function Footer() {
  return (
    <footer className="bg-neutral-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          <div className="flex flex-col gap-6">
            <NextLink href="/">
              <Logo width={160} height={50} />
            </NextLink>
            <p className="text-neutral-400 text-sm leading-relaxed font-body">
              {footerDescription}
            </p>
            <FooterSocialLinks />
          </div>

          <div className="grid grid-cols-2 gap-8">
            <FooterLinkList title="Car Brands" links={footerBrandLinks} />
            <FooterLinkList title="Useful Links" links={footerUsefulLinks} />
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-neutral-50 mb-4">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4">
              {contactData.phones.map((phone) => (
                <FooterContactItem
                  key={phone.href}
                  icon={<PhoneIcon className="w-4 h-4" />}
                  href={phone.href}
                  label={phone.label}
                />
              ))}
              <FooterContactItem
                icon={<LandlineIcon className="w-4 h-4" />}
                href={contactData.landline.href}
                label={contactData.landline.label}
              />
              <FooterContactItem
                icon={<EmailIcon className="w-4 h-4" />}
                href={contactData.email.href}
                label={contactData.email.label}
              />
              <FooterContactItem
                icon={<MapPinIcon className="w-4 h-4" />}
                href={contactData.address.href}
                label={contactData.address.label}
                isExternal
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-neutral-800 pt-8">
          {paymentMethods.map((method) => (
            <Image
              key={method.name}
              src={method.src}
              alt={method.name}
              width={48}
              height={32}
              className="h-8 w-auto object-contain"
            />
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-800 pt-8">
          <div className="flex items-center gap-4">
            {legalLinks.map((link, index) => (
              <span key={link.label} className="flex items-center gap-4">
                <NextLink
                  href={link.href}
                  className="text-neutral-500 text-sm font-body transition-colors duration-200 hover:text-primary-500"
                >
                  {link.label}
                </NextLink>
                {index < legalLinks.length - 1 && (
                  <span className="text-neutral-700">|</span>
                )}
              </span>
            ))}
          </div>
          <p className="text-neutral-500 text-sm font-body">
            &copy; 2025 Luxury Super Car Rentals. All rights reserved.
          </p>
        </div>

        <div className="mt-8 flex justify-center border-t border-neutral-800 pt-8">
          <FooterSocialLinks />
        </div>
      </div>
    </footer>
  )
}
