"use client"

import { useFeaturedWorks } from "@/hooks/useFeaturedWorks"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface FeaturedWorksGridProps {
  category: string
}

export default function FeaturedWorksGrid({ category }: FeaturedWorksGridProps) {
  const { works, loading, error } = useFeaturedWorks(category)

  if (loading) {
    return (
      <div className="col-span-full flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: "#ffcc00" }}></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="col-span-full text-center py-12">
        <p className="text-red-600 mb-4">Erro ao carregar trabalhos: {error}</p>
      </div>
    )
  }

  if (works.length === 0) {
    return (
      <div className="col-span-full text-center py-12">
        <p style={{ color: "#768192" }}>Nenhum trabalho encontrado nesta categoria.</p>
      </div>
    )
  }

  return (
    <>
      {works.map((work) => (
        <Card
          key={work.id}
          className="overflow-hidden transition-shadow duration-300 hover:shadow-xl bg-white/90 border-0"
        >
          {/* Imagem em destaque - altura reduzida */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={work.image_url || "/placeholder.svg?height=300&width=600"}
              alt={work.title}
              fill
              className="object-cover"
            />
            {/* Overlay sutil */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          <CardContent className="p-5">
            <h3 className="text-lg font-bold mb-2 line-clamp-2" style={{ color: "#434A54" }}>
              {work.title}
            </h3>
            <p className="text-sm mb-3 line-clamp-2" style={{ color: "#768192" }}>
              {work.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {work.tags.slice(0, 3).map((tag, index) => (
                <span key={index} className="text-xs font-medium" style={{ color: "#768192" }}>
                  #{tag}
                </span>
              ))}
            </div>

            <Link href={work.project_url || "#"}>
              <Button
                className="w-full rounded-full font-semibold transition-colors hover:bg-[#86711d]"
                style={{ backgroundColor: "#ffcc00", color: "#434A54" }}
              >
                Ver Projeto
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </>
  )
}
