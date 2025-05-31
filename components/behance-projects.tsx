"use client"

import { useBehanceProjects } from "@/hooks/useBehanceProjects"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function BehanceProjects() {
  const { projects, loading, error } = useBehanceProjects()

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 mb-4" style={{ borderColor: "#ffcc00" }}></div>
        <p style={{ color: "#768192" }}>Carregando projetos do Behance...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">Erro ao carregar projetos: {error}</p>
        <p style={{ color: "#768192" }}>Visite meu perfil no Behance para ver todos os projetos.</p>
      </div>
    )
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p style={{ color: "#768192" }}>Nenhum projeto encontrado.</p>
      </div>
    )
  }

  return (
    <>
      {/* Lista horizontal de projetos */}
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.behance_url || "https://www.behance.net/maxdemian"}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex-shrink-0 w-80 h-60 rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl"
          >
            <Image
              src={project.image_url || "/placeholder.svg?height=300&width=400"}
              alt={project.title}
              fill
              className="object-cover"
            />

            {/* Overlay com gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Textos sobrepostos */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="font-bold text-lg mb-2 line-clamp-2">{project.title}</h3>
              {project.tools && <p className="text-sm opacity-90">{project.tools}</p>}
              {project.description && <p className="text-xs opacity-75 mt-1 line-clamp-2">{project.description}</p>}
            </div>

            {/* Ícone de link no hover */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ExternalLink className="w-6 h-6 text-white" />
            </div>
          </a>
        ))}
      </div>

      <div className="text-center mt-8">
        <a href="https://www.behance.net/maxdemian" target="_blank" rel="noopener noreferrer">
          <Button
            className="rounded-full font-semibold px-8 py-3 transition-colors hover:bg-[#86711d]"
            style={{ backgroundColor: "#ffcc00", color: "#434A54" }}
          >
            Ver Portfólio Completo no Behance
            <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
        </a>
      </div>
    </>
  )
}
