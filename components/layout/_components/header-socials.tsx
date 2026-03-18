import {
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
  TikTokIcon,
} from "@/components/icons/social-icons"

const LINK_TRANSPARENT = "text-white/70 transition-colors duration-200 hover:text-primary-500"
const LINK_SOLID = "text-neutral-500 transition-colors duration-200 hover:text-primary-500"

interface HeaderSocialsProps {
  socials: {
    facebook: string
    instagram: string
    youtube: string
    tiktok: string
  }
  isTransparent?: boolean
}

export function HeaderSocials({ socials, isTransparent }: HeaderSocialsProps) {
  const linkClass = isTransparent ? LINK_TRANSPARENT : LINK_SOLID

  return (
    <div className="flex items-center gap-3">
      <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className={linkClass} aria-label="Facebook">
        <FacebookIcon className="w-4 h-4" />
      </a>
      <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className={linkClass} aria-label="Instagram">
        <InstagramIcon className="w-4 h-4" />
      </a>
      <a href={socials.youtube} target="_blank" rel="noopener noreferrer" className={linkClass} aria-label="YouTube">
        <YouTubeIcon className="w-4 h-4" />
      </a>
      <a href={socials.tiktok} target="_blank" rel="noopener noreferrer" className={linkClass} aria-label="TikTok">
        <TikTokIcon className="w-4 h-4" />
      </a>
    </div>
  )
}
