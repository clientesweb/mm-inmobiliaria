"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

// Desktop slides
const desktopSlides = [
  {
    src: "/images/desktop-hero-banner.webp",
    alt: "Viví e invertí en las sierras de Córdoba como nunca antes",
  },
  {
    src: "/images/landscape-autumn.webp",
    alt: "Paisaje otoñal con río y montañas en las sierras de Córdoba",
  },
  {
    src: "/images/landscape-river.webp",
    alt: "Vista aérea del río y puente en las sierras de Córdoba",
  },
]

const mobileSlides = [
  {
    src: "/images/mobile-hero-banner.webp",
    alt: "Viví e invertí en las sierras de Córdoba como nunca antes",
  },
  {
    src: "/images/mobile-landscape-autumn.webp",
    alt: "Paisaje otoñal con río y montañas en las sierras de Córdoba",
  },
  {
    src: "/images/mobile-landscape-town.webp",
    alt: "Vista aérea del pueblo y río en las sierras de Córdoba",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % desktopSlides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      <div className="hidden md:block">
        {desktopSlides.map((slide, index) => (
          <div
            key={`desktop-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src || "/placeholder.svg"}
              alt={slide.alt}
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      <div className="block md:hidden">
        {mobileSlides.map((slide, index) => (
          <div
            key={`mobile-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src || "/placeholder.svg"}
              alt={slide.alt}
              width={768}
              height={1024}
              className="w-full h-full object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {desktopSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Ir a la imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
