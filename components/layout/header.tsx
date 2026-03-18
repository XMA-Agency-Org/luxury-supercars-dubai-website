"use client"

import { useState, useEffect } from "react"
import NextLink from "next/link"
import { Logo } from "@/components/icons/logo"
import { navigationItems } from "@/app/(home)/_lib/navigation-data"
import { contactData } from "@/app/(home)/_lib/contact-data"
import { DesktopNav } from "./_components/desktop-nav"
import { MobileMenu } from "./_components/mobile-menu"
import { HeaderSocials } from "./_components/header-socials"
import { PhoneLink } from "./_components/phone-link"
import { CurrencySelector } from "./_components/currency-selector"
import { cn } from "@/lib/utils"

const HAMBURGER_TRANSPARENT = "w-6 h-0.5 rounded-full transition-colors duration-300 bg-white"
const HAMBURGER_SOLID = "w-6 h-0.5 rounded-full transition-colors duration-300 bg-neutral-50"
const DIVIDER_TRANSPARENT = "w-px h-4 transition-colors duration-300 bg-white/25"
const DIVIDER_SOLID = "w-px h-4 transition-colors duration-300 bg-neutral-800"
const HEADER_TRANSPARENT = "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent"
const HEADER_SOLID = "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-surface/95 backdrop-blur-md border-b border-neutral-800"

function HamburgerButton({
  onClick,
  isExpanded,
  scrolled,
}: {
  onClick: () => void
  isExpanded: boolean
  scrolled: boolean
}) {
  const lineClass = scrolled ? HAMBURGER_SOLID : HAMBURGER_TRANSPARENT

  return (
    <button
      type="button"
      onClick={onClick}
      className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
      aria-label="Open menu"
      aria-expanded={isExpanded}
    >
      <span className={lineClass} />
      <span className={lineClass} />
      <span className={lineClass} />
    </button>
  )
}

function TopBar({ scrolled }: { scrolled: boolean }) {
  const primaryPhone = contactData.phones[0]
  const dividerClass = scrolled ? DIVIDER_SOLID : DIVIDER_TRANSPARENT

  return (
    <div className={cn(
      "transition-colors duration-300 border-b",
      scrolled ? "border-neutral-800 bg-neutral-950" : "border-white/15"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:flex items-center justify-end gap-4 h-10">
          <HeaderSocials socials={contactData.socials} isTransparent={!scrolled} />
          <div className={dividerClass} />
          <PhoneLink
            href={primaryPhone.href}
            label={primaryPhone.label}
          />
          <div className={dividerClass} />
          <CurrencySelector isTransparent={!scrolled} />
        </div>
      </div>
    </div>
  )
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const primaryPhone = contactData.phones[0]

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header className={scrolled ? HEADER_SOLID : HEADER_TRANSPARENT}>
        <TopBar scrolled={scrolled} />
        <div className={cn(
          "transition-colors duration-300 border-b",
          scrolled ? "border-neutral-800" : "border-white/15"
        )}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <NextLink href="/" className="shrink-0">
                <Logo width={100} height={44} />
              </NextLink>

              <DesktopNav items={navigationItems} isTransparent={!scrolled} />

              <HamburgerButton
                onClick={() => setIsMobileMenuOpen(true)}
                isExpanded={isMobileMenuOpen}
                scrolled={scrolled}
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
