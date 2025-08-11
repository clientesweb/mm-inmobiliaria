import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins, Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://mm-inmobiliaria.vercel.app"),
  title: "MM Inmobiliaria Serrana | Tu Propiedad Ideal en las Sierras de Córdoba",
  description:
    "Encuentra terrenos, casas y cabañas en las Sierras de Córdoba con MM Inmobiliaria Serrana. Expertos en inversión segura, tecnología 360° y experiencias turísticas.",
  themeColor: "#0D9488", // Color teal para el buscador
  openGraph: {
    title: "MM Inmobiliaria Serrana | Tu Propiedad Ideal en las Sierras de Córdoba",
    description:
      "Encuentra terrenos, casas y cabañas en las Sierras de Córdoba con MM Inmobiliaria Serrana. Expertos en inversión segura, tecnología 360° y experiencias turísticas.",
    url: "https://mm-inmobiliaria.vercel.app",
    siteName: "MM Inmobiliaria Serrana",
    images: [
      {
        url: "/og-image.jpg", // Ruta a tu imagen Open Graph
        width: 1200,
        height: 630,
        alt: "MM Inmobiliaria Serrana - Propiedades en las Sierras de Córdoba",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  icons: {
    icon: "/favicon.jpeg", // Ruta a tu favicon
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={`${inter.variable} ${poppins.variable} ${montserrat.variable}`}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
