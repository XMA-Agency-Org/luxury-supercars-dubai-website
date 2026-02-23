import { PhoneIcon } from "@/components/icons/phone-icon"
import { cn } from "@/lib/utils"

interface PhoneLinkProps {
  href: string
  label: string
  className?: string
}

export function PhoneLink({ href, label, className }: PhoneLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "flex items-center gap-2 text-primary-500 font-cta font-medium text-sm transition-colors duration-200 hover:text-primary-400",
        className
      )}
    >
      <PhoneIcon className="w-4 h-4" />
      {label}
    </a>
  )
}
