"use client"

import { useState } from "react"
import NextLink from "next/link"
import { Logo } from "@/components/icons/logo"
import { navigationItems } from "@/app/(home)/_lib/navigation-data"
import { contactData } from "@/app/(home)/_lib/contact-data"
import { DesktopNav } from "./_components/desktop-nav"
import { MobileMenu } from "./_components/mobile-menu"
import { HeaderSocials } from "./_components/header-socials"
import { PhoneLink } from "./_components/phone-link"

function HamburgerButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
      aria-label="Open menu"
    >
      <span className="w-6 h-0.5 bg-neutral-50 rounded-full" />
      <span className="w-6 h-0.5 bg-neutral-50 rounded-full" />
      <span className="w-6 h-0.5 bg-neutral-50 rounded-full" />
    </button>
  )
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const primaryPhone = contactData.phones[0]

  return (
    <>
      <header className="sticky top-0 z-50 bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            <NextLink href="/" className="shrink-0">
              <Logo width={100} height={44} />
            </NextLink>

            <DesktopNav items={navigationItems} />

            <div className="hidden lg:flex items-center gap-4">
              <PhoneLink
                href={primaryPhone.href}
                label={primaryPhone.label}
              />
              <div className="w-px h-5 bg-neutral-700" />
              <HeaderSocials socials={contactData.socials} />
            </div>

            <HamburgerButton onClick={() => setIsMobileMenuOpen(true)} />
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigationItems={navigationItems}
        phoneHref={primaryPhone.href}
        phoneLabel={primaryPhone.label}
        socials={contactData.socials}
      />
    </>
  )
}
