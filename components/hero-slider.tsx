"use client"

import Image from "next/image"

export default function HeroSlider() {
  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Desktop image */}
      <div className="hidden md:block">
        <Image
          src="/images/desktop-hero-banner.webp"
          alt="Viví e invertí en las sierras de Córdoba como nunca antes"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Mobile image */}
      <div className="block md:hidden">
        <Image
          src="/images/mobile-hero-banner.webp"
          alt="Viví e invertí en las sierras de Córdoba como nunca antes"
          width={768}
          height={1024}
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </div>
  )
}
