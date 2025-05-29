import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Max Demian - UX/UI Designer, Ilustrador e Infografista",
  description:
    "Portfólio profissional de Max Demian, UX/UI Designer com mais de duas décadas de experiência em design, ilustração e infografia. Especialista em transformar complexidade em experiências intuitivas.",
  keywords: "UX Design, UI Design, Ilustração, Infografia, Design Thinking, User Research, Prototipagem, São Paulo",
  authors: [{ name: "Max Demian" }],
  openGraph: {
    title: "Max Demian - UX/UI Designer",
    description: "Transformando complexidade em experiências intuitivas há mais de duas décadas.",
    type: "website",
    locale: "pt_BR",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
