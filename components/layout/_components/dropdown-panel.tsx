import Image from "next/image"
import NextLink from "next/link"
import type { NavDropdownItem } from "@/app/(home)/_types/navigation"
import { cn } from "@/lib/utils"

interface DropdownPanelProps {
  items: NavDropdownItem[]
  isVisible: boolean
}

export function DropdownPanel({ items, isVisible }: DropdownPanelProps) {
  return (
    <div
      className={cn(
        "absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200",
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      )}
    >
      <div className="bg-surface rounded-xl border border-neutral-800 shadow-lg shadow-black/20 p-4 max-w-full min-w-160">
        <div role="menu" className="grid grid-cols-3 gap-2">
          {items.map((item) => (
            <NextLink
              key={item.href}
              href={item.href}
              role="menuitem"
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-neutral-900"
            >
              {item.iconPath && (
                <Image
                  src={item.iconPath}
                  alt={item.label}
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              )}
              <span className="text-sm text-neutral-200 font-cta whitespace-nowrap">
                {item.label}
              </span>
            </NextLink>
          ))}
        </div>
      </div>
    </div>
  )
}
