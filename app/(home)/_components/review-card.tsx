import Image from "next/image"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { StarIcon } from "@/components/icons/star-icon"
import type { GoogleReview } from "../_types/testimonial"

type ReviewCardProps = {
  review: GoogleReview
  className?: string
}

function StarsRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon
          key={index}
          filled={index < rating}
          className="text-primary-500"
        />
      ))}
    </div>
  )
}

function ReviewCard({ review, className }: ReviewCardProps) {
  return (
    <Card className={cn("rounded-xl p-5", className)}>
      <div className="flex items-center gap-3 mb-3">
        <Image
          src={review.profilePicUrl}
          alt={review.name}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-neutral-50 font-medium text-sm">{review.name}</p>
          <p className="text-neutral-600 text-xs">{review.timeAgo}</p>
        </div>
      </div>
      <StarsRow rating={review.rating} />
      <p className="text-neutral-400 text-sm mt-3 line-clamp-4 leading-relaxed">
        {review.text}
      </p>
    </Card>
  )
}

export { ReviewCard }
