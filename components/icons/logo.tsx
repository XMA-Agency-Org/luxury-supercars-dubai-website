import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

export function Logo({ className, width = 160, height = 50 }: LogoProps) {
  return (
    <Image
      src="/images/branding/logo.png"
      alt="Luxury Supercars Dubai"
      width={width}
      height={height}
      className={cn("object-contain", className)}
      priority
    />
  )
}
