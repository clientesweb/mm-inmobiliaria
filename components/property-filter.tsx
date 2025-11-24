"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

export default function PropertyFilter() {
  return (
    <section className="py-8 sm:py-12 bg-white shadow-md -mt-16 relative z-10">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-montserrat font-extrabold text-center mb-6 text-gray-900">
            Encuentra tu propiedad ideal
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Tipo de propiedad" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="terreno">Terreno</SelectItem>
                <SelectItem value="casa">Casa</SelectItem>
                <SelectItem value="cabana">Cabaña</SelectItem>
                <SelectItem value="lote">Lote</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Ubicación" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="belgrano">Villa General Belgrano</SelectItem>
                <SelectItem value="cumbrecita">La Cumbrecita</SelectItem>
                <SelectItem value="carlos-paz">Carlos Paz</SelectItem>
                <SelectItem value="calamuchita">Valle de Calamuchita</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Rango de precio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-50k">Hasta $50.000</SelectItem>
                <SelectItem value="50k-100k">$50.000 - $100.000</SelectItem>
                <SelectItem value="100k-150k">$100.000 - $150.000</SelectItem>
                <SelectItem value="150k+">Más de $150.000</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Tamaño" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-500">Hasta 500 m²</SelectItem>
                <SelectItem value="500-1000">500 - 1.000 m²</SelectItem>
                <SelectItem value="1000-1500">1.000 - 1.500 m²</SelectItem>
                <SelectItem value="1500+">Más de 1.500 m²</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-center">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 px-8 font-montserrat font-bold">
              <Search className="w-5 h-5 mr-2" />
              Buscar propiedades
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
