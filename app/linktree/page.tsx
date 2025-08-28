import type { Metadata } from "next"
import LinktreeClient from "./LinktreeClient"

export const metadata: Metadata = {
  title: "MM Inmobiliaria Serrana - Enlaces de Contacto | Propiedades en las Sierras",
  description:
    "Conecta con MM Inmobiliaria Serrana. Tu inmobiliaria de confianza en las Sierras de Córdoba. Contactanos por WhatsApp, email o síguenos en redes sociales.",
  keywords: "inmobiliaria, sierras, córdoba, propiedades, casas, terrenos, alquileres, ventas, contacto",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/logo.jpeg", sizes: "32x32", type: "image/jpeg" },
      { url: "/images/logo.jpeg", sizes: "16x16", type: "image/jpeg" },
    ],
    apple: [{ url: "/images/logo.jpeg", sizes: "180x180", type: "image/jpeg" }],
  },
  openGraph: {
    title: "MM Inmobiliaria Serrana - Enlaces de Contacto",
    description: "Tu inmobiliaria de confianza en las Sierras de Córdoba",
    url: "https://mm-inmobiliaria.vercel.app/linktree",
    siteName: "MM Inmobiliaria Serrana",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "MM Inmobiliaria Serrana Logo",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MM Inmobiliaria Serrana - Enlaces de Contacto",
    description: "Tu inmobiliaria de confianza en las Sierras de Córdoba",
    images: ["/images/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function LinktreePage() {
  return <LinktreeClient />
}
