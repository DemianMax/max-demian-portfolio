"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ExternalLink, Eye, Heart } from "lucide-react"

interface BehanceProject {
  id: number
  name: string
  url: string
  covers: {
    "230": string
  }
  stats: {
    views: number
    appreciations: number
    comments: number
  }
  fields: string[]
  tags: string[]
}

export default function BehancePortfolio() {
  const [projects, setProjects] = useState<BehanceProject[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadProjects() {
      try {
        setLoading(true)

        // Simulando um delay de carregamento para melhor UX
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Dados mock dos projetos do Behance
        // Em produção, você substituiria isso por uma chamada real à API
        const mockProjects: BehanceProject[] = [
          {
            id: 1,
            name: "Dashboard B2B - Sistema de Gestão",
            url: "https://www.behance.net/maxdemian",
            covers: {
              "230": "/placeholder.svg?height=200&width=300",
            },
            stats: { views: 2450, appreciations: 189, comments: 23 },
            fields: ["UX/UI", "Web Design"],
            tags: ["figma", "ux", "ui", "dashboard"],
          },
          {
            id: 2,
            name: "Infográfico Interativo - Dados Corporativos",
            url: "https://www.behance.net/maxdemian",
            covers: {
              "230": "/placeholder.svg?height=200&width=300",
            },
            stats: { views: 1890, appreciations: 167, comments: 18 },
            fields: ["Graphic Design", "Infographics"],
            tags: ["infographic", "data", "visualization"],
          },
          {
            id: 3,
            name: "Identidade Visual - Tech Startup",
            url: "https://www.behance.net/maxdemian",
            covers: {
              "230": "/placeholder.svg?height=200&width=300",
            },
            stats: { views: 3200, appreciations: 256, comments: 34 },
            fields: ["Branding", "Logo Design"],
            tags: ["branding", "logo", "identity"],
          },
          {
            id: 4,
            name: "Animação Web - Landing Page",
            url: "https://www.behance.net/maxdemian",
            covers: {
              "230": "/placeholder.svg?height=200&width=300",
            },
            stats: { views: 1680, appreciations: 134, comments: 19 },
            fields: ["Animation", "Web Design"],
            tags: ["animation", "web", "motion"],
          },
          {
            id: 5,
            name: "App Mobile - E-commerce",
            url: "https://www.behance.net/maxdemian",
            covers: {
              "230": "/placeholder.svg?height=200&width=300",
            },
            stats: { views: 2150, appreciations: 198, comments: 25 },
            fields: ["Mobile Design", "UX/UI"],
            tags: ["mobile", "app", "ecommerce"],
          },
          {
            id: 6,
            name: "Design Editorial - Revista Digital",
            url: "https://www.behance.net/maxdemian",
            covers: {
              "230": "/placeholder.svg?height=200&width=300",
            },
            stats: { views: 1420, appreciations: 111, comments: 14 },
            fields: ["Editorial", "Print Design"],
            tags: ["editorial", "magazine", "layout"],
          },
          {
            id: 7,
            name: "Ilustração - Storytelling Visual",
            url: "https://www.behance.net/maxdemian",
            covers: {
              "230": "/placeholder.svg?height=200&width=300",
            },
            stats: { views: 1890, appreciations: 145, comments: 21 },
            fields: ["Illustration", "Digital Art"],
            tags: ["illustration", "storytelling", "digital"],
          },
          {
            id: 8,
            name: "Prototipação - Sistema SaaS",
            url: "https://www.behance.net/maxdemian",
            covers: {
              "230": "/placeholder.svg?height=200&width=300",
            },
            stats: { views: 1650, appreciations: 128, comments: 16 },
            fields: ["UX/UI", "Prototyping"],
            tags: ["prototype", "saas", "ux"],
          },
        ]

        setProjects(mockProjects)
      } catch (err) {
        console.error("Erro ao carregar projetos:", err)
        setProjects([]) // Array vazio em caso de erro
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 mb-4" style={{ borderColor: "#ffcc00" }}></div>
        <p style={{ color: "#768192" }}>Carregando projetos do Behance...</p>
      </div>
    )
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">Não foi possível carregar os projetos.</p>
        <p style={{ color: "#768192" }}>Visite meu perfil no Behance para ver todos os projetos.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {projects.map((project) => (
        <a
          key={project.id}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-lg bg-white/80 hover:bg-white transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          <div className="aspect-[4/3] relative overflow-hidden">
            <Image
              src={project.covers["230"] || "/placeholder.svg?height=200&width=300"}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Overlay com informações */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="text-white text-center p-4">
                <ExternalLink className="w-6 h-6 mx-auto mb-2" />
                <p className="text-sm font-semibold line-clamp-2">{project.name}</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="p-3">
            <h3 className="font-semibold text-sm mb-2 line-clamp-2" style={{ color: "#434A54" }}>
              {project.name}
            </h3>
            <div className="flex items-center justify-between text-xs" style={{ color: "#768192" }}>
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <Eye className="w-3 h-3" />
                  <span>{project.stats.views.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart className="w-3 h-3" />
                  <span>{project.stats.appreciations}</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mt-2">
              {project.tags.slice(0, 2).map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 rounded-full"
                  style={{ backgroundColor: "#ffcc00", color: "#434A54" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
