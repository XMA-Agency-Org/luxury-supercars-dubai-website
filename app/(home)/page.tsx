import { HeroSection } from "./_components/hero-section"
import { CarTypeSlider } from "./_components/car-type-slider"
import { CarCategorySection } from "./_components/car-category-section"
import { AboutSection } from "./_components/about-section"
import { BrandMarquee } from "./_components/brand-marquee"
import { DocumentsSection } from "./_components/documents-section"
import { GoogleReviews } from "./_components/google-reviews"
import { VideoSection } from "./_components/video-section"
import { FaqAccordion } from "./_components/faq-accordion"
import { ContactSection } from "./_components/contact-section"
import { BlogSection } from "./_components/blog-section"
import { InstagramFeed } from "./_components/instagram-feed"
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll"

import {
  carCategories,
  sportsCars,
  convertibleCars,
  luxuryCars,
  suvCars,
} from "./_lib/car-data"
import { brands } from "./_lib/brand-data"
import { googleReviews } from "./_lib/testimonial-data"

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <RevealOnScroll>
        <CarTypeSlider carCategories={carCategories} />
      </RevealOnScroll>

      <RevealOnScroll>
        <CarCategorySection
          title={
            <>
              <strong className="text-primary-500">Sports Car</strong> Rental in
              Dubai
            </>
          }
          description="Experience the pinnacle of luxury and performance with Luxury Supercars Dubai, your premier destination for exotic car rentals. Whether you're exploring the vibrant streets of Dubai, cruising along the scenic coastline, or making a statement at a high-profile event, our fleet of world-class supercars is designed to elevate every journey."
          cars={sportsCars}
          viewAllHref="/rent-sports-cars-dubai"
          viewAllLabel="View All Sports Cars"
          layout="featured"
        />
      </RevealOnScroll>

      <RevealOnScroll>
        <CarCategorySection
          title={
            <>
              <strong className="text-primary-500">Convertible</strong> Car Rental
              in Dubai
            </>
          }
          description="Experience the thrill of the open road and the beauty of Dubai's skyline with our convertible car rental services. At Luxury Supercars Dubai, we offer a premium collection of convertible cars that combine style, luxury, and performance, making every drive a memorable experience."
          cars={convertibleCars}
          viewAllHref="/rent-convertible-cars-dubai"
          viewAllLabel="View All Convertible Cars"
          backgroundVariant="alternate"
        />
      </RevealOnScroll>

      <RevealOnScroll>
        <CarCategorySection
          title={
            <>
              <strong className="text-primary-500">Rent Luxury</strong> Cars in
              Dubai
            </>
          }
          description="Make your journey in Dubai unforgettable with our luxury car rental services. At Luxury Supercars Dubai, we specialize in providing a world-class fleet of high-end vehicles, perfect for those who value style, comfort, and performance."
          cars={luxuryCars}
          viewAllHref="/rent-luxury-cars-dubai"
          viewAllLabel="View All Luxury Cars"
          layout="reversed"
        />
      </RevealOnScroll>

      <RevealOnScroll>
        <CarCategorySection
          title={
            <>
              <strong className="text-primary-500">Rent SUVs</strong> in Dubai
            </>
          }
          description="Discover unmatched comfort and versatility with Luxury Supercars Dubai's SUV rental service. Perfect for family trips, group outings, or simply exploring Dubai in style, our premium SUVs offer space, luxury, and top-notch performance."
          cars={suvCars}
          viewAllHref="/rent-suv-cars-dubai"
          viewAllLabel="View All SUVs Cars"
          backgroundVariant="alternate"
        />
      </RevealOnScroll>

      <RevealOnScroll>
        <AboutSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <BrandMarquee brands={brands} />
      </RevealOnScroll>

      <RevealOnScroll>
        <DocumentsSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <GoogleReviews googleReviews={googleReviews} />
      </RevealOnScroll>

      <RevealOnScroll>
        <VideoSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <BlogSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <FaqAccordion />
      </RevealOnScroll>

      <RevealOnScroll>
        <ContactSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <InstagramFeed />
      </RevealOnScroll>
    </>
  )
}
