"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, Instagram, Globe } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"

export default function LinktreeClientPage() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const handleLoadedData = () => setIsVideoLoaded(true)
      video.addEventListener("loadeddata", handleLoadedData)
      return () => video.removeEventListener("loadeddata", handleLoadedData)
    }
  }, [])

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
      {/* <CHANGE> Video banner centrado con logo superpuesto */}
      <div className="w-full h-64 sm:h-80 md:h-96 relative overflow-hidden rounded-b-3xl shadow-2xl">
        <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/recorrido-virtual-ew2dhUGdBBqDUoFqr5glBWcEfCDEeX.mp4" type="video/mp4" />
        </video>

        {/* Logo centrado sobre el video */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
            <Image
              src="/images/logo.jpeg"
              alt="MM Inmobiliaria Serrana Logo"
              width={120}
              height={120}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
            />
          </div>
        </div>
      </div>

      {/* <CHANGE> Contenido principal con nuevo diseño y colores del branding */}
      <div className="relative z-10 px-4 py-8">
        {/* Título */}
        <div className="text-center mb-8">
          <h1 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-teal-800 mb-2">
            MM Inmobiliaria Serrana
          </h1>
          <p className="font-poppins text-teal-600 text-lg sm:text-xl">Tu propiedad ideal en las Sierras</p>
        </div>

        {/* Links con colores del branding */}
        <div className="space-y-4 max-w-md mx-auto w-full">
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
                <Button className="w-full h-auto py-4 px-6 bg-teal-600 hover:bg-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl border-2 border-amber-400/20 hover:border-amber-400/40">
                  <div className="flex items-center justify-center space-x-4 w-full">
                    <IconComponent className="w-6 h-6 flex-shrink-0 text-amber-200" />
                    <div className="text-left flex-1 min-w-0">
                      <div className="font-montserrat font-bold text-base sm:text-lg truncate">{link.title}</div>
                      <div className="font-poppins text-sm opacity-90 truncate text-amber-100">{link.subtitle}</div>
                    </div>
                  </div>
                </Button>
              </a>
            )
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-teal-700">
          <p className="font-poppins text-sm">© 2025 MM Inmobiliaria Serrana</p>
          <p className="font-poppins text-xs mt-1 text-teal-600">Propiedades en las Sierras de Córdoba</p>
        </div>
      </div>

      {/* Loading indicator */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-amber-50 flex items-center justify-center z-20">
          <div className="text-teal-800 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
            <p className="font-poppins">Cargando...</p>
          </div>
        </div>
      )}
    </div>
  )
}
