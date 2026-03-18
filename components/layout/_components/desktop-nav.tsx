"use client"

import { useState } from "react"
import NextLink from "next/link"
import type { NavItem } from "@/app/(home)/_types/navigation"
import { cn } from "@/lib/utils"
import { DropdownPanel } from "./dropdown-panel"

const NAV_LINK_TRANSPARENT = "text-white hover:text-primary-500 font-cta font-medium text-sm transition-colors duration-200 flex items-center gap-1 py-2"
const NAV_LINK_SOLID = "text-neutral-50 hover:text-primary-500 font-cta font-medium text-sm transition-colors duration-200 flex items-center gap-1 py-2"

interface DesktopNavProps {
  items: NavItem[]
  isTransparent?: boolean
}

function DesktopNavItem({ item, isTransparent }: { item: NavItem; isTransparent?: boolean }) {
  const [isHovered, setIsHovered] = useState(false)
  const hasDropdown = item.dropdown && item.dropdown.length > 0

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <NextLink
        href={item.href}
        className={isTransparent ? NAV_LINK_TRANSPARENT : NAV_LINK_SOLID}
        {...(hasDropdown && {
          "aria-haspopup": "menu" as const,
          "aria-expanded": isHovered,
        })}
      >
        {item.label}
        {hasDropdown && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={cn(
              "w-4 h-4 transition-transform duration-200",
              isHovered && "rotate-180"
            )}
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </NextLink>
      {hasDropdown && item.dropdown && (
        <DropdownPanel items={item.dropdown} isVisible={isHovered} />
      )}
    </div>
  )
}

export function DesktopNav({ items, isTransparent }: DesktopNavProps) {
  return (
    <nav className="hidden lg:flex items-center gap-6">
      {items.map((item) => (
        <DesktopNavItem key={item.label} item={item} isTransparent={isTransparent} />
      ))}
    </nav>
  )
}
