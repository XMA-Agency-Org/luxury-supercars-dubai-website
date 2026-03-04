"use client"

import { useState } from "react"
import NextLink from "next/link"
import Image from "next/image"
import type { NavItem } from "@/app/(home)/_types/navigation"
import { cn } from "@/lib/utils"
import { PhoneIcon } from "@/components/icons/phone-icon"
import {
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
  TikTokIcon,
} from "@/components/icons/social-icons"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navigationItems: NavItem[]
  phoneHref: string
  phoneLabel: string
  socials: {
    facebook: string
    instagram: string
    youtube: string
    tiktok: string
  }
}

function MobileDropdownSection({
  item,
}: {
  item: NavItem
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        className="flex items-center justify-between w-full py-3 text-neutral-50 font-cta font-medium text-lg cursor-pointer"
        aria-expanded={isExpanded}
      >
        {item.label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={cn(
            "w-5 h-5 transition-transform duration-200",
            isExpanded && "rotate-180"
          )}
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={cn(
          "grid transition-all duration-300",
          isExpanded
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="grid grid-cols-2 gap-2 pb-3 pl-2">
            {item.dropdown?.map((dropdownItem) => (
              <NextLink
                key={dropdownItem.href}
                href={dropdownItem.href}
                className="flex items-center gap-2 rounded-lg px-3 py-2 transition-colors duration-150 hover:bg-neutral-800"
              >
                {dropdownItem.iconPath && (
                  <Image
                    src={dropdownItem.iconPath}
                    alt={dropdownItem.label}
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                )}
                <span className="text-sm text-neutral-300 font-cta">
                  {dropdownItem.label}
                </span>
              </NextLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function MobileMenu({
  isOpen,
  onClose,
  navigationItems,
  phoneHref,
  phoneLabel,
  socials,
}: MobileMenuProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-neutral-950 transition-all duration-300 lg:hidden",
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-end p-4">
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-neutral-50 cursor-pointer"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 pb-8">
          <div className="flex flex-col divide-y divide-neutral-800">
            {navigationItems.map((item) =>
              item.dropdown && item.dropdown.length > 0 ? (
                <MobileDropdownSection key={item.label} item={item} />
              ) : (
                <NextLink
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="py-3 text-neutral-50 font-cta font-medium text-lg transition-colors duration-200 hover:text-primary-500"
                >
                  {item.label}
                </NextLink>
              )
            )}
          </div>

          <div className="mt-8 flex flex-col gap-6">
            <a
              href={phoneHref}
              className="flex items-center gap-2 text-primary-500 font-cta font-medium"
            >
              <PhoneIcon className="w-5 h-5" />
              {phoneLabel}
            </a>

            <div className="flex items-center gap-4">
              <a
                href={socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 transition-colors duration-200 hover:text-primary-500"
              >
                <FacebookIcon />
              </a>
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 transition-colors duration-200 hover:text-primary-500"
              >
                <InstagramIcon />
              </a>
              <a
                href={socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 transition-colors duration-200 hover:text-primary-500"
              >
                <YouTubeIcon />
              </a>
              <a
                href={socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 transition-colors duration-200 hover:text-primary-500"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
