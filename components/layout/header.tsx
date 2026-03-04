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
import { CurrencySelector } from "./_components/currency-selector"

function HamburgerButton({
  onClick,
  isExpanded,
}: {
  onClick: () => void
  isExpanded: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
      aria-label="Open menu"
      aria-expanded={isExpanded}
    >
      <span className="w-6 h-0.5 bg-neutral-50 rounded-full" />
      <span className="w-6 h-0.5 bg-neutral-50 rounded-full" />
      <span className="w-6 h-0.5 bg-neutral-50 rounded-full" />
    </button>
  )
}

function TopBar() {
  const primaryPhone = contactData.phones[0]

  return (
    <div className="border-b border-neutral-800 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:flex items-center justify-end gap-4 h-10">
          <HeaderSocials socials={contactData.socials} />
          <div className="w-px h-4 bg-neutral-700" />
          <PhoneLink
            href={primaryPhone.href}
            label={primaryPhone.label}
          />
          <div className="w-px h-4 bg-neutral-700" />
          <CurrencySelector />
        </div>
      </div>
    </div>
  )
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const primaryPhone = contactData.phones[0]

  return (
    <>
      <header className="sticky top-0 z-50 bg-neutral-950/95 backdrop-blur-md">
        <TopBar />
        <div className="border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <NextLink href="/" className="shrink-0">
                <Logo width={100} height={44} />
              </NextLink>

              <DesktopNav items={navigationItems} />

              <HamburgerButton
                onClick={() => setIsMobileMenuOpen(true)}
                isExpanded={isMobileMenuOpen}
              />
            </div>
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
