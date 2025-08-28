"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, Instagram, Globe } from "lucide-react"
import { useState, useRef, useEffect } from "react"

export default function LinktreePage() {
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
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/vertical-video-placeholder.png"
        >
          <source src="/videos/link-redes-sociales-web-links.mp4" type="video/mp4" />
        </video>

        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-end p-4 pb-8 sm:pb-12">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 mb-6 inline-block">
            <h1 className="font-montserrat font-extrabold text-2xl sm:text-3xl text-white mb-2">MM Inmobiliaria</h1>
            <p className="font-poppins text-white/90 text-sm sm:text-base">Tu propiedad ideal en las Sierras</p>
          </div>
        </div>

        {/* Links */}
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
                <Button
                  className={`w-full h-auto py-4 px-6 ${link.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl`}
                >
                  <div className="flex items-center justify-center space-x-4 w-full">
                    <IconComponent className="w-6 h-6 flex-shrink-0" />
                    <div className="text-left flex-1 min-w-0">
                      <div className="font-montserrat font-bold text-base sm:text-lg truncate">{link.title}</div>
                      <div className="font-poppins text-sm opacity-90 truncate">{link.subtitle}</div>
                    </div>
                  </div>
                </Button>
              </a>
            )
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-white/70">
          <p className="font-poppins text-xs sm:text-sm">© 2025 MM Inmobiliaria Serrana</p>
        </div>
      </div>

      {/* Loading indicator */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 bg-black flex items-center justify-center z-20">
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p className="font-poppins">Cargando...</p>
          </div>
        </div>
      )}
    </div>
  )
}
