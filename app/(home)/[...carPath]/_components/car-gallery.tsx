"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { cn } from "@/lib/utils"

type CarGalleryProps = {
  images: string[]
  carName: string
}

function CarGallery({ images, carName }: CarGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const selectedImage = images[selectedIndex] ?? images[0]

  function goToNext() {
    setSelectedIndex((prev) => (prev + 1) % images.length)
  }

  function goToPrev() {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (images.length === 0) return null

  return (
    <>
      <div className="space-y-4">
        <div className="group relative">
          <div
            className="relative aspect-[16/10] overflow-clip rounded-2xl border border-neutral-800 cursor-pointer"
            onClick={() => setIsLightboxOpen(true)}
          >
            <Image
              src={selectedImage}
              alt={carName}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToPrev()
                }}
                className={cn(
                  "absolute left-3 top-1/2 -translate-y-1/2",
                  "p-2 rounded-full bg-neutral-950/80 border border-neutral-800",
                  "hover:border-primary-500 transition-colors",
                  "opacity-100 md:opacity-0 md:group-hover:opacity-100"
                )}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToNext()
                }}
                className={cn(
                  "absolute right-3 top-1/2 -translate-y-1/2",
                  "p-2 rounded-full bg-neutral-950/80 border border-neutral-800",
                  "hover:border-primary-500 transition-colors",
                  "opacity-100 md:opacity-0 md:group-hover:opacity-100"
                )}
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="hidden md:flex flex-wrap gap-3">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={cn(
                  "relative flex-none w-24 h-16 overflow-clip rounded-lg transition-all",
                  selectedIndex === index
                    ? "ring-2 ring-primary-500 ring-offset-2 ring-offset-neutral-950"
                    : "opacity-60 hover:opacity-100"
                )}
              >
                <Image
                  src={image}
                  alt={`${carName} view ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-sm flex items-center justify-center">
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 p-2.5 text-neutral-400 hover:text-neutral-50 transition-colors rounded-full hover:bg-neutral-800 z-10"
            aria-label="Close lightbox"
          >
            <X className="w-7 h-7" />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={goToPrev}
                className="absolute left-6 p-2.5 rounded-full bg-neutral-950/80 border border-neutral-800 hover:border-primary-500 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-6 p-2.5 rounded-full bg-neutral-950/80 border border-neutral-800 hover:border-primary-500 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div className="relative w-full max-w-5xl aspect-[16/10] mx-6">
            <Image
              src={selectedImage}
              alt={carName}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-neutral-400">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}

export { CarGallery }
