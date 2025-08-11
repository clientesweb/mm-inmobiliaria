"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

interface CarouselSlide {
  id: number
  image: string
  alt: string
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    image: "/images/3d-capture-banner.jpeg", // Primero la de 3D
    alt: "Tecnología de Captura 3D",
  },
  {
    id: 2,
    image: "/images/vr-banner.jpeg", // Luego recorrido virtual
    alt: "Recorrido Virtual VR",
  },
  {
    id: 3,
    image: "/images/app-banner.jpeg", // Y finalmente descargar app
    alt: "Aplicación móvil MM Inmobiliaria",
  },
]

export function TechnologyCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Auto-slide every 5 seconds
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center"
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.alt}
              fill
              className="object-cover" // ¡Cambiado a object-cover para eliminar los espacios!
              priority={slide.id === 1} // Priorizamos la carga de la primera imagen
            />
          </div>
        ))}
      </div>
      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
