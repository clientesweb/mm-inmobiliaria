"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, Instagram, Globe } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"

export default function LinktreeClient() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const videoTags = [
    "¡NUEVAS EXPERIENCIAS!",
    "¡NUEVAS VENTAS!",
    "¡NUEVAS COMPRAS!",
    "¡NUEVOS HOGARES!",
    "¡NUEVOS SUEÑOS!",
    "¡EXPERIENCIA INMERSIVA!",
    "¡RECORRIDOS 360°!",
  ]
  const [currentVideoTagIndex, setCurrentVideoTagIndex] = useState(0)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const handleLoadedData = () => setIsVideoLoaded(true)
      video.addEventListener("loadeddata", handleLoadedData)
      return () => video.removeEventListener("loadeddata", handleLoadedData)
    }
  }, [])

  useEffect(() => {
    const tagTimer = setInterval(() => {
      setCurrentVideoTagIndex((prev) => (prev + 1) % videoTags.length)
    }, 2500)
    return () => clearInterval(tagTimer)
  }, [videoTags.length])

  const links = [
    {
      title: "Visitar Sitio Web",
      subtitle: "Explora todas nuestras propiedades",
      href: "https://mm-inmobiliaria.vercel.app/",
      icon: Globe,
      color: "bg-teal-600 hover:bg-teal-700",
    },
    {
      title: "Llamar Ahora",
      subtitle: "+54 9 3546 47-6146",
      href: "tel:+5493546476146",
      icon: Phone,
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      title: "Enviar Email",
      subtitle: "mminmobiliaria.contacto@gmail.com",
      href: "mailto:mminmobiliaria.contacto@gmail.com",
      icon: Mail,
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      title: "Síguenos en Instagram",
      subtitle: "@mminmobiliariaserrana",
      href: "https://www.instagram.com/mminmobiliariaserrana?igsh=MW5ocXd6d3FkZjVsbw==",
      icon: Instagram,
      color: "bg-pink-600 hover:bg-pink-700",
    },
  ]

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f5f1eb 0%, #e8ddd4 50%, #d4c4b0 100%)",
      }}
    >
      <div className="w-full h-56 xs:h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] relative overflow-hidden rounded-b-3xl shadow-2xl">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/logo.jpeg"
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/recorrido-virtual-ew2dhUGdBBqDUoFqr5glBWcEfCDEeX.mp4" type="video/mp4" />
        </video>

        <Badge className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 bg-teal-600/90 backdrop-blur-sm text-white text-xs sm:text-sm md:text-base px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full font-montserrat font-bold shadow-lg border-2 border-amber-400/30 animate-pulse">
          {videoTags[currentVideoTagIndex]}
        </Badge>

        {/* Logo centrado sobre el video con mejor responsividad */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-[#f5f1eb]/95 backdrop-blur-sm rounded-2xl p-3 sm:p-4 md:p-6 shadow-xl border-2 border-amber-400/20">
            <Image
              src="/images/logo.jpeg"
              alt="MM Inmobiliaria Serrana Logo"
              width={150}
              height={150}
              className="w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 object-contain"
              priority
            />
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
      </div>

      <div className="relative z-10 px-3 xs:px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
        {/* Título con mejor responsividad */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h1 className="font-montserrat font-extrabold text-2xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-teal-800 mb-2 sm:mb-3 leading-tight">
            MM Inmobiliaria Serrana
          </h1>
          <p className="font-poppins text-teal-600 text-base sm:text-lg md:text-xl lg:text-2xl">
            Tu propiedad ideal en las Sierras
          </p>
          <p className="font-poppins text-teal-500 text-sm sm:text-base md:text-lg mt-1 sm:mt-2">
            Recorridos virtuales 360° • Experiencias inmersivas
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4 md:space-y-5 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto w-full">
          {links.map((link, index) => {
            const IconComponent = link.icon
            return (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : "_self"}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block"
              >
                <Button className="w-full h-auto py-3 sm:py-4 md:py-5 px-4 sm:px-6 md:px-8 bg-teal-600 hover:bg-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] rounded-xl sm:rounded-2xl border-2 border-amber-400/20 hover:border-amber-400/40 group">
                  <div className="flex items-center justify-center space-x-3 sm:space-x-4 md:space-x-5 w-full">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex-shrink-0 text-amber-200 group-hover:text-amber-100 transition-colors duration-300" />
                    <div className="text-left flex-1 min-w-0">
                      <div className="font-montserrat font-bold text-sm sm:text-base md:text-lg lg:text-xl truncate group-hover:text-amber-50 transition-colors duration-300">
                        {link.title}
                      </div>
                      <div className="font-poppins text-xs sm:text-sm md:text-base opacity-90 truncate text-amber-100 group-hover:text-amber-50 transition-colors duration-300">
                        {link.subtitle}
                      </div>
                    </div>
                  </div>
                </Button>
              </a>
            )
          })}
        </div>

        <div className="text-center mt-8 sm:mt-10 md:mt-12 lg:mt-16 text-teal-700">
          <p className="font-poppins text-xs sm:text-sm md:text-base">© 2025 MM Inmobiliaria Serrana</p>
          <p className="font-poppins text-xs sm:text-sm mt-1 text-teal-600">Propiedades en las Sierras de Córdoba</p>
          <a
            href="https://dualitydomain.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-poppins text-xs mt-1 text-teal-500 hover:text-teal-600 transition-colors duration-300 inline-block"
          >
            Powered By Duality Domain
          </a>
        </div>
      </div>

      {/* Loading indicator mejorado */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-amber-50 flex items-center justify-center z-20">
          <div className="text-teal-800 text-center">
            <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 border-b-2 border-teal-600 mx-auto mb-4"></div>
            <p className="font-poppins text-sm sm:text-base md:text-lg">Cargando experiencia inmersiva...</p>
          </div>
        </div>
      )}
    </div>
  )
}
