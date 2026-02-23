import {
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
  TikTokIcon,
} from "@/components/icons/social-icons"

interface HeaderSocialsProps {
  socials: {
    facebook: string
    instagram: string
    youtube: string
    tiktok: string
  }
}

export function HeaderSocials({ socials }: HeaderSocialsProps) {
  return (
    <div className="flex items-center gap-3">
      <a
        href={socials.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-400 transition-colors duration-200 hover:text-primary-500"
        aria-label="Facebook"
      >
        <FacebookIcon className="w-4 h-4" />
      </a>
      <a
        href={socials.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-400 transition-colors duration-200 hover:text-primary-500"
        aria-label="Instagram"
      >
        <InstagramIcon className="w-4 h-4" />
      </a>
      <a
        href={socials.youtube}
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-400 transition-colors duration-200 hover:text-primary-500"
        aria-label="YouTube"
      >
        <YouTubeIcon className="w-4 h-4" />
      </a>
      <a
        href={socials.tiktok}
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-400 transition-colors duration-200 hover:text-primary-500"
        aria-label="TikTok"
      >
        <TikTokIcon className="w-4 h-4" />
      </a>
    </div>
  )
}
