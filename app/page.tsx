"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Mountain,
  Shield,
  Camera,
  Users,
  MapPin,
  Calendar,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  Mail,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { MobileMenu } from "@/components/mobile-menu"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import HeroSlider from "@/components/hero-slider"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const videoTags = [
    "¡NUEVAS EXPERIENCIAS!",
    "¡NUEVAS VENTAS!",
    "¡NUEVAS COMPRAS!",
    "¡NUEVOS HOGARES!",
    "¡NUEVOS SUEÑOS!",
  ]
  const [currentVideoTagIndex, setCurrentVideoTagIndex] = useState(0)

  useEffect(() => {
    const tagTimer = setInterval(() => {
      setCurrentVideoTagIndex((prev) => (prev + 1) % videoTags.length)
    }, 3000)
    return () => clearInterval(tagTimer)
  }, [videoTags.length])

  const WhyChooseUsSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const features = [
      {
        icon: Shield,
        color: "teal",
        title: "Inversión Segura",
        description: "Propiedades con documentación completa y asesoramiento legal especializado",
      },
      {
        icon: Mountain,
        color: "yellow",
        title: "Experiencias Turísticas",
        description: "Conoce el potencial turístico y de desarrollo de cada zona",
      },
      {
        icon: Camera,
        color: "blue",
        title: "Tecnología 360°",
        description: "Recorridos virtuales inmersivos con tecnología Matterport",
      },
      {
        icon: Users,
        color: "green",
        title: "Atención Personalizada",
        description: "Acompañamiento integral desde la búsqueda hasta la escrituración",
      },
    ]

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % features.length)
      }, 4000)
      return () => clearInterval(timer)
    }, [features.length])

    const getColorClasses = (color: string) => {
      const colors = {
        teal: "bg-teal-100 text-teal-600",
        yellow: "bg-yellow-100 text-yellow-600",
        blue: "bg-blue-100 text-blue-600",
        green: "bg-green-100 text-green-600",
      }
      return colors[color as keyof typeof colors] || colors.teal
    }

    return (
      <div className="relative">
        {/* Desktop View - Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="text-center">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${getColorClasses(feature.color)}`}
                >
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="font-montserrat font-extrabold text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 font-poppins">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Mobile/Tablet View - Slider */}
        <div className="lg:hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="text-center max-w-sm mx-auto">
                    <div
                      className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${getColorClasses(feature.color)}`}
                    >
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <h3 className="font-montserrat font-extrabold text-2xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-poppins">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-8 space-x-2">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide ? "bg-teal-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Header Responsivo Moderno */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Image
                src="/images/logo.jpeg"
                alt="MM Inmobiliaria Serrana"
                width={45}
                height={45}
                className="rounded-full ring-2 ring-teal-100"
              />
              <div className="hidden sm:block">
                <h1 className="font-montserrat font-extrabold text-lg text-teal-700 leading-tight">MM Inmobiliaria</h1>
                <p className="text-sm text-teal-600 -mt-1 font-poppins">Serrana</p>
              </div>
              <div className="sm:hidden">
                <h1 className="font-montserrat font-extrabold text-base text-teal-700">MM Inmobiliaria</h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="#propiedades"
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium font-poppins"
              >
                Propiedades
              </Link>
              <Link
                href="#servicios"
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium font-poppins"
              >
                Servicios
              </Link>
              <Link
                href="#nosotros"
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium font-poppins"
              >
                Nosotros
              </Link>
              <Link
                href="#contacto"
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium font-poppins"
              >
                Contacto
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${mobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
                ></span>
                <span
                  className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}
                ></span>
                <span
                  className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${mobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Nuevo componente de menú móvil */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Main Banner - Hero Section */}
      <HeroSlider />

      {/* Imagen de Tecnología 3D */}
      <div className="w-full mt-0 md:-mt-24">
        <Image
          src="/images/tecnologia-captura-3d.jpeg"
          alt="Tecnología de Captura 3D que te permite explorar cada propiedad como si estuvieras ahí"
          width={1920}
          height={720}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Virtual Tour Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-extrabold text-gray-900 mb-4">
              EXPERIENCIA INMERSIVA
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-poppins">
              Explora cada propiedad como si estuvieras ahí con nuestra tecnología de recorridos virtuales 360°
            </p>
          </div>
          <div className="relative w-full">
            <video
              className="w-full h-auto object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/placeholder.svg?height=400&width=600"
            >
              <source src="https://www.dualitydomain.com/MM/recorrido-virtual.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
            <Badge className="absolute top-4 left-4 bg-teal-600 text-white text-sm px-3 py-1 rounded-full font-poppins">
              {videoTags[currentVideoTagIndex]}
            </Badge>
          </div>
        </div>
      </section>

      {/* 4. Why Invest Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-teal-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-extrabold text-gray-900 mb-6">
              ¿Por qué invertir en MM Inmobiliaria Serrana?
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-poppins leading-relaxed">
              Descubre las razones detrás de nuestra propuesta única para invertir en las Sierras de Córdoba
            </p>
          </div>

          <div className="md:hidden mb-12">
            <div
              className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="flex-shrink-0 w-80 snap-center">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg h-full">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl mb-3 text-gray-900">PAZ</h3>
                  <p className="text-gray-600 font-poppins">Tranquilidad absoluta en entornos naturales únicos</p>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 snap-center">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg h-full">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mountain className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl mb-3 text-gray-900">TRANQUILIDAD</h3>
                  <p className="text-gray-600 font-poppins">Alejado del ruido urbano, conectado con la naturaleza</p>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 snap-center">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg h-full">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mountain className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl mb-3 text-gray-900">SEGURIDAD</h3>
                  <p className="text-gray-600 font-poppins">Comunidades seguras con vigilancia y accesos controlados</p>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 snap-center">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg h-full">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl mb-3 text-gray-900">CALIDAD DE VIDA</h3>
                  <p className="text-gray-600 font-poppins">Aire puro, espacios verdes y estilo de vida saludable</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-montserrat font-bold text-xl mb-3 text-gray-900">PAZ</h3>
              <p className="text-gray-600 font-poppins">Tranquilidad absoluta en entornos naturales únicos</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-montserrat font-bold text-xl mb-3 text-gray-900">TRANQUILIDAD</h3>
              <p className="text-gray-600 font-poppins">Alejado del ruido urbano, conectado con la naturaleza</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-montserrat font-bold text-xl mb-3 text-gray-900">SEGURIDAD</h3>
              <p className="text-gray-600 font-poppins">Comunidades seguras con vigilancia y accesos controlados</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-montserrat font-bold text-xl mb-3 text-gray-900">CALIDAD DE VIDA</h3>
              <p className="text-gray-600 font-poppins">Aire puro, espacios verdes y estilo de vida saludable</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-montserrat font-bold text-lg mb-3 text-teal-700">
                ALQUILERES TEMPORARIOS Y PERMANENTES
              </h4>
              <p className="text-gray-600 font-poppins">
                Opciones flexibles para todos los estilos de vida y necesidades
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-montserrat font-bold text-lg mb-3 text-teal-700">POST VENTA</h4>
              <p className="text-gray-600 font-poppins">
                Acompañamiento continuo después de tu compra para garantizar tu satisfacción
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-montserrat font-bold text-lg mb-3 text-teal-700">ASESORAMIENTO ESPECIALIZADO</h4>
              <p className="text-gray-600 font-poppins">
                Contamos con nuestro arquitecto y constructor para proyectos personalizados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tourism Experience */}
      <section className="py-8 sm:py-12 lg:py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-extrabold text-gray-900 mb-6">
                Experiencia de Turismo Inmobiliario
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 font-poppins">
                No solo vendemos propiedades, creamos experiencias. Conoce las sierras de Córdoba de la mano de expertos
                locales y descubre el potencial de cada zona.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center font-poppins">
                  <Mountain className="w-5 h-5 text-teal-600 mr-3" />
                  Tours guiados por las mejores zonas
                </li>
                <li className="flex items-center font-poppins">
                  <Users className="w-5 h-5 text-teal-600 mr-3" />
                  Encuentros con la comunidad local
                </li>
                <li className="flex items-center font-poppins">
                  <Mountain className="w-5 h-5 text-teal-600 mr-3" />
                  Visitas a propiedades en desarrollo
                </li>
              </ul>
              <div className="flex gap-4">
                <Button className="bg-teal-600 hover:bg-teal-700">
                  <Calendar className="w-4 h-4 mr-2" />
                  Agendar tour presencial
                </Button>
                <Button variant="outline">
                  <Camera className="w-4 h-4 mr-2" />
                  Tour virtual
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/images/landscape-river.webp" // Ruta a la nueva imagen de turismo
                  alt="Experiencia de turismo inmobiliario"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Selling Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-extrabold mb-6">
            CONTÁCTENOS PARA VENDER SU LOTE O PROPIEDAD
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto font-poppins">
            ¿Tienes una propiedad en las sierras? Nuestro equipo de expertos te ayudará a obtener el mejor precio del
            mercado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100 font-montserrat font-bold px-8 py-4"
              asChild
            >
              <a href="tel:+5493546564461">
                <Phone className="w-5 h-5 mr-2" />
                Llamar Ahora
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-teal-600 font-poppins px-8 py-4 bg-transparent"
              asChild
            >
              <a href="mailto:mminmobiliariaserrana@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Enviar Consulta
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 lg:mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/images/logo.jpeg"
                  alt="MM Inmobiliaria Serrana"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-montserrat font-extrabold text-lg">MM Inmobiliaria</h3>
                  <p className="text-sm text-gray-400 font-poppins">Serrana</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 font-poppins">
                Tu socio de confianza para invertir en las Sierras de Córdoba
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-montserrat">Propiedades</h4>
              <ul className="space-y-2 text-gray-400 font-poppins">
                <li>
                  <Link href="#" className="hover:text-white">
                    Terrenos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Casas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Cabañas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Lotes
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-montserrat">Servicios</h4>
              <ul className="space-y-2 text-gray-400 font-poppins">
                <li>
                  <Link href="#" className="hover:text-white">
                    Recorridos 3D
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Tours presenciales
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Asesoramiento legal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Financiación
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-montserrat">Contacto</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +54 9 354656446
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Villa General Belgrano, Córdoba
                </li>
              </ul>

              <div className="mt-6">
                <h5 className="font-semibold mb-3 font-montserrat">Síguenos</h5>
                <div className="flex space-x-4">
                  <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                  <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                  <Youtube className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-poppins">
              © 2025 MM Inmobiliaria Serrana. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0 font-poppins">
              <Link href="#" className="hover:text-white">
                Términos y Condiciones
              </Link>
              <Link href="#" className="hover:text-white">
                Política de Privacidad
              </Link>
              <Link href="#" className="hover:text-white">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  )
}
