"use client"

import { type ReactNode, useState, useEffect, useRef, memo } from "react"
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

const springConfig = { type: "spring" as const, stiffness: 120, damping: 24 }

const DESKTOP_SLIDES = [
  { src: "/Hero-ferarri-desert.png", alt: "Ferrari in Arabian desert dunes at golden hour" },
  { src: "/hero-lambo.png", alt: "Lamborghini with palm trees and Burj Khalifa in Dubai" },
  { src: "/images/hero/hero-bg.webp", alt: "Three supercars approaching on Dubai highway at sunset" },
]

const MOBILE_SLIDES = [
  { src: "/hero-desert-mobile.png", alt: "Blue supercar between Arabian desert dunes at golden hour" },
  { src: "/hero-marina-mobile.png", alt: "Black supercar on wet Dubai Marina boulevard at night" },
  { src: "/hero-mobile.jpg", alt: "Red supercar on Dubai highway at golden hour" },
]

const SLIDE_DURATION = 5000
const FADE_DURATION = 1.2

const HeroSlideshow = memo(function HeroSlideshow({ isMobile }: { isMobile: boolean }) {
  const shouldReduceMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)
  const slides = isMobile ? MOBILE_SLIDES : DESKTOP_SLIDES

  useEffect(() => {
    if (shouldReduceMotion) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, SLIDE_DURATION)

    return () => clearInterval(interval)
  }, [shouldReduceMotion, slides.length])

  return (
    <>
      {slides.map((slide, index) => (
        <motion.div
          key={slide.src}
          className="absolute inset-0"
          initial={false}
          animate={{
            opacity: index === activeIndex ? 1 : 0,
            scale: index === activeIndex ? (shouldReduceMotion ? 1 : 1.08) : 1,
          }}
          transition={{
            opacity: { duration: shouldReduceMotion ? 0 : FADE_DURATION },
            scale: { duration: SLIDE_DURATION / 1000, ease: [0, 0, 0.58, 1] },
          }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
        </motion.div>
      ))}
    </>
  )
})

type WordSegment = {
  text: string
  isAccent: boolean
}

function parseHeadlineSegments(segments: WordSegment[]): { word: string; isAccent: boolean }[] {
  const words: { word: string; isAccent: boolean }[] = []
  for (const segment of segments) {
    const segmentWords = segment.text.split(" ").filter(Boolean)
    for (const word of segmentWords) {
      words.push({ word, isAccent: segment.isAccent })
    }
  }
  return words
}

const wordRevealVariants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: springConfig,
  },
}

const accentWordVariants = {
  hidden: { y: "110%", opacity: 0, scale: 0.95 },
  visible: {
    y: "0%",
    opacity: 1,
    scale: 1,
    transition: springConfig,
  },
}

function AnimatedGoldLabel({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return (
      <p className="text-sm font-cta font-medium tracking-widest uppercase text-primary-400 mb-4">
        {children}
      </p>
    )
  }

  return (
    <motion.p
      className="text-sm font-cta font-medium tracking-widest uppercase text-primary-400 mb-4"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
    >
      {children}
    </motion.p>
  )
}

function AnimatedHeadline({ segments }: { segments: WordSegment[] }) {
  const shouldReduceMotion = useReducedMotion()
  const words = parseHeadlineSegments(segments)

  if (shouldReduceMotion) {
    return (
      <h1 className="font-heading text-5xl font-bold tracking-tight leading-[1.08] text-white md:text-6xl lg:text-7xl drop-shadow-[0_2px_12px_oklch(0.15_0_0/0.6)]">
        {segments.map((segment, i) =>
          segment.isAccent ? (
            <span key={i} className="text-primary-400">{segment.text}</span>
          ) : (
            <span key={i}>{segment.text}</span>
          )
        )}
      </h1>
    )
  }

  return (
    <motion.h1
      className="font-heading text-5xl font-bold tracking-tight leading-[1.08] text-white md:text-6xl lg:text-7xl drop-shadow-[0_2px_12px_oklch(0.15_0_0/0.6)]"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
    >
      {words.map((item, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className={`inline-block ${item.isAccent ? "text-primary-400" : ""}`}
            variants={item.isAccent ? accentWordVariants : wordRevealVariants}
          >
            {item.word}
          </motion.span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </motion.h1>
  )
}

function AnimatedHeroContent({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <>{children}</>
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.15, delayChildren: 0.8 }}
    >
      {children}
    </motion.div>
  )
}

const childSpringVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: { duration: 0.3 },
      y: springConfig,
    },
  },
}

function AnimatedHeroChild({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={childSpringVariants} className={className}>
      {children}
    </motion.div>
  )
}

function AnimatedBookingForm({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <>{children}</>
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        opacity: { duration: 0.3, delay: 0.6 },
        x: { ...springConfig, delay: 0.6 },
      }}
    >
      {children}
    </motion.div>
  )
}

function HeroParallaxWrapper({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 150])

  if (shouldReduceMotion) {
    return (
      <div ref={ref} className="absolute inset-0">
        {children}
      </div>
    )
  }

  return (
    <div ref={ref} className="absolute inset-0">
      <motion.div
        style={{ y: backgroundY }}
        className="absolute top-[-150px] right-0 bottom-0 left-0"
      >
        {children}
      </motion.div>
    </div>
  )
}

function ScrollIndicator() {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) return null

  return (
    <motion.div
      className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 0.3 }}
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
        className="flex flex-col items-center gap-1 text-white/50"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </motion.div>
  )
}

export {
  HeroSlideshow,
  AnimatedGoldLabel,
  AnimatedHeadline,
  AnimatedHeroContent,
  AnimatedHeroChild,
  AnimatedBookingForm,
  HeroParallaxWrapper,
  ScrollIndicator,
}
export type { WordSegment }
