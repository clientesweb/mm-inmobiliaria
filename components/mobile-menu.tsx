"use client"

import {
  Home,
  Camera,
  Users,
  Phone,
  MessageCircle,
  Calendar,
  MapPin,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 transition-opacity duration-300 z-[55] ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-[60] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Header del Menú */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/logo.jpeg"
                alt="MM Inmobiliaria Serrana"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h2 className="font-montserrat font-extrabold text-teal-700">MM Inmobiliaria</h2>
                <p className="text-sm text-teal-600 font-poppins">Serrana</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navegación */}
          <nav className="space-y-1 mb-8 flex-grow">
            <Link
              href="#propiedades"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors font-poppins"
              onClick={onClose}
            >
              <Home className="w-5 h-5 mr-3" />
              Propiedades
            </Link>
            <Link
              href="#servicios"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors font-poppins"
              onClick={onClose}
            >
              <Camera className="w-5 h-5 mr-3" />
              Servicios
            </Link>
            <Link
              href="#nosotros"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors font-poppins"
              onClick={onClose}
            >
              <Users className="w-5 h-5 mr-3" />
              Nosotros
            </Link>
            <Link
              href="#contacto"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors font-poppins"
              onClick={onClose}
            >
              <Phone className="w-5 h-5 mr-3" />
              Contacto
            </Link>
          </nav>

          {/* Botones CTA */}
          <div className="space-y-3 mb-8">
            <Button className="w-full bg-teal-600 hover:bg-teal-700 justify-center">
              <MessageCircle className="w-4 h-4 mr-2" />
              Contactar por WhatsApp
            </Button>
            <Button variant="outline" className="w-full justify-center bg-transparent">
              <Calendar className="w-4 h-4 mr-2" />
              Agendar reunión
            </Button>
          </div>

          {/* Información de Contacto y Redes Sociales */}
          <div className="mt-auto pt-6 border-t border-gray-200">
            <div className="space-y-3 text-sm text-gray-600 font-poppins mb-6">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +54 9 3541 123456
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                info@mminmobiliariaserrana.com
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Villa General Belgrano, Córdoba
              </div>
            </div>
            <div className="flex space-x-4 justify-center">
              <Facebook className="w-6 h-6 text-gray-600 hover:text-teal-600 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-600 hover:text-teal-600 cursor-pointer transition-colors" />
              <Youtube className="w-6 h-6 text-gray-600 hover:text-teal-600 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
