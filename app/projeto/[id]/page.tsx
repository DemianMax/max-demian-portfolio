"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"

// Mock project data
const projectDetails = {
  1: {
    title: "Sistema B2B Dashboard",
    subtitle:
      "Interface completa para gestão empresarial com foco na experiência do usuário e otimização de fluxos de trabalho.",
    tags: ["#Figma", "#UserResearch", "#Prototipagem", "#DesignSystem"],
    content: [
      {
        type: "text",
        content:
          "Este projeto envolveu a criação de um dashboard completo para gestão empresarial, focando na experiência do usuário e na otimização de fluxos de trabalho complexos.",
      },
      {
        type: "image",
        src: "/placeholder.svg?height=400&width=800",
        alt: "Dashboard Overview",
      },
      {
        type: "text",
        content:
          "O processo de design começou com uma extensa pesquisa com usuários, onde identificamos os principais pontos de dor e necessidades dos gestores empresariais.",
      },
      {
        type: "image",
        src: "/placeholder.svg?height=400&width=800",
        alt: "User Research Process",
      },
      {
        type: "text",
        content:
          "Utilizamos o Figma para criar protótipos interativos de alta fidelidade, permitindo testes de usabilidade iterativos e refinamento contínuo da interface.",
      },
      {
        type: "image",
        src: "/placeholder.svg?height=400&width=800",
        alt: "Figma Prototypes",
      },
    ],
  },
  2: {
    title: "App Mobile E-commerce",
    subtitle: "Aplicativo de compras com experiência otimizada para conversão e jornada do usuário simplificada.",
    tags: ["#Sketch", "#UserTesting", "#ResponsiveDesign", "#B2C"],
    content: [
      {
        type: "text",
        content:
          "Desenvolvimento de um aplicativo mobile para e-commerce com foco na otimização da conversão e experiência de compra.",
      },
      {
        type: "image",
        src: "/placeholder.svg?height=400&width=800",
        alt: "Mobile App Screens",
      },
      {
        type: "text",
        content:
          "O projeto utilizou metodologias de design centrado no usuário, com testes A/B contínuos para otimização da jornada de compra.",
      },
    ],
  },
  3: {
    title: "Plataforma SaaS",
    subtitle: "Interface intuitiva para software de gestão empresarial com arquitetura de informação otimizada.",
    tags: ["#Framer", "#DesignThinking", "#Scrum", "#B2B"],
    content: [
      {
        type: "text",
        content:
          "Criação de uma plataforma SaaS completa utilizando metodologias ágeis e design thinking para resolver problemas complexos de gestão.",
      },
      {
        type: "image",
        src: "/placeholder.svg?height=400&width=800",
        alt: "SaaS Platform Interface",
      },
    ],
  },
  4: {
    title: "Relatório Anual Interativo",
    subtitle: "Infográfico digital com dados corporativos e storytelling visual envolvente.",
    tags: ["#Illustrator", "#AfterEffects", "#DataViz", "#Storytelling"],
    content: [
      {
        type: "text",
        content:
          "Desenvolvimento de um relatório anual interativo que transforma dados complexos em narrativas visuais envolventes.",
      },
      {
        type: "image",
        src: "/placeholder.svg?height=400&width=800",
        alt: "Interactive Annual Report",
      },
    ],
  },
  5: {
    title: "Guia de Processos",
    subtitle: "Visualização de fluxos complexos de forma simplificada e intuitiva.",
    tags: ["#Photoshop", "#InformationDesign", "#ProcessMapping"],
    content: [
      {
        type: "text",
        content:
          "Criação de guias visuais para processos empresariais complexos, simplificando a compreensão e execução.",
      },
      {
        type: "image",
        src: "/placeholder.svg?height=400&width=800",
        alt: "Process Guide Visualization",
      },
    ],
  },
  6: {
    title: "Dashboard Analytics",
    subtitle: "Representação visual de métricas e KPIs empresariais de forma clara e acionável.",
    tags: ["#Figma", "#DataVisualization", "#Analytics", "#KPI"],
    content: [
      {
        type: "text",
        content:
          "Desenvolvimento de dashboards analíticos que transformam dados brutos em insights acionáveis para tomada de decisão.",
      },
      {
        type: "image",
        src: "/placeholder.svg?height=400&width=800",
        alt: "Analytics Dashboard",
      },
    ],
  },
  7: {
    title: "Identidade Visual Corporativa",
    subtitle: "Conjunto de ilustrações para marca e comunicação empresarial coesa.",
    tags: ["#Illustrator", "#BrandDesign", "#VectorArt", "#Corporate"],
    content: [
      {
        type: "text",
        content:
          "Criação de identidade visual corporativa completa com ilustrações personalizadas e sistema de comunicação visual.",
      },
      {
        type: "image",
        src: "/placeholder.svg?height=400&width=800",
        alt: "Corporate Visual Identity",
      },
    ],
  },
  8: {
    title: "Animações para Web",
    subtitle: "Ilustrações animadas para interfaces digitais com micro-interações envolventes.",
    tags: ["#AfterEffects", "#WebAnimation", "#Motion", "#Interactive"],
    content: [
      {
        type: "text",
        content:
          "Desenvolvimento de animações e micro-interações para interfaces web, melhorando o engajamento e feedback visual.",
      },
      {
        type: "image",
        src: "/placeholder.svg?height=400&width=800",
        alt: "Web Animations",
      },
    ],
  },
  9: {
    title: "Editorial Digital",
    subtitle: "Ilustrações para conteúdo jornalístico e editorial com narrativa visual impactante.",
    tags: ["#Photoshop", "#Editorial", "#DigitalArt", "#Journalism"],
    content: [
      {
        type: "text",
        content:
          "Criação de ilustrações editoriais para conteúdo jornalístico digital, combinando arte e informação de forma impactante.",
      },
      {
        type: "image",
        src: "/placeholder.svg?height=400&width=800",
        alt: "Digital Editorial Illustrations",
      },
    ],
  },
}

export default function ProjectDetail() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<any>(null)

  useEffect(() => {
    const projectId = Number.parseInt(params.id as string)
    const projectData = projectDetails[projectId as keyof typeof projectDetails]
    setProject(projectData)
  }, [params.id])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#BDCBD6" }}>
        <div className="text-center">
          <h1 className="text-2xl font-bold" style={{ color: "#434A54" }}>
            Projeto não encontrado
          </h1>
          <Button
            onClick={() => router.push("/")}
            className="mt-4 rounded-full"
            style={{ backgroundColor: "#ffcc00", color: "#434A54" }}
          >
            Voltar ao Portfólio
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#BDCBD6" }}>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-bg.png" alt="Hero Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Olá, sou o Max.</h1>
          <p className="text-lg md:text-xl">UX/UI Designer, Ilustrador e Infografista.</p>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button
            onClick={() => router.push("/")}
            variant="outline"
            className="mb-8 rounded-full"
            style={{ borderColor: "#434A54", color: "#434A54" }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>

          {/* Project Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4" style={{ color: "#434A54" }}>
              {project.title}
            </h1>
            <p className="text-xl mb-6" style={{ color: "#768192" }}>
              {project.subtitle}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string, index: number) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Project Content */}
          <div className="space-y-12">
            {project.content.map((item: any, index: number) => (
              <div key={index}>
                {item.type === "text" ? (
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg leading-relaxed" style={{ color: "#434A54" }}>
                      {item.content}
                    </p>
                  </div>
                ) : (
                  <div className="relative">
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.alt}
                      width={800}
                      height={400}
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Back Button Bottom */}
          <div className="mt-16 text-center">
            <Button
              onClick={() => router.push("/")}
              className="rounded-full px-8 py-3"
              style={{ backgroundColor: "#ffcc00", color: "#434A54" }}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Portfólio
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
