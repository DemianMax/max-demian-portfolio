"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Mail,
  Phone,
  Linkedin,
  ExternalLink,
  User,
  Palette,
  Video,
  Headphones,
  Lightbulb,
  Search,
  PenTool,
  Smartphone,
  Layout,
  Users,
  Zap,
} from "lucide-react"
import Navbar from "@/components/navbar"
import ProfessionalTimeline from "@/components/professional-timeline"

// Mock data for projects
const projects = {
  "ux-ui": [
    {
      id: 1,
      title: "Sistema B2B Dashboard",
      description: "Interface completa para gestão empresarial com foco na experiência do usuário.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["#Figma", "#UserResearch", "#Prototipagem", "#DesignSystem"],
    },
    {
      id: 2,
      title: "App Mobile E-commerce",
      description: "Aplicativo de compras com experiência otimizada para conversão.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["#Sketch", "#UserTesting", "#ResponsiveDesign", "#B2C"],
    },
    {
      id: 3,
      title: "Plataforma SaaS",
      description: "Interface intuitiva para software de gestão empresarial.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["#Framer", "#DesignThinking", "#Scrum", "#B2B"],
    },
  ],
  infografia: [
    {
      id: 4,
      title: "Relatório Anual Interativo",
      description: "Infográfico digital com dados corporativos e storytelling visual.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["#Illustrator", "#AfterEffects", "#DataViz", "#Storytelling"],
    },
    {
      id: 5,
      title: "Guia de Processos",
      description: "Visualização de fluxos complexos de forma simplificada.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["#Photoshop", "#InformationDesign", "#ProcessMapping"],
    },
    {
      id: 6,
      title: "Dashboard Analytics",
      description: "Representação visual de métricas e KPIs empresariais.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["#Figma", "#DataVisualization", "#Analytics", "#KPI"],
    },
  ],
  ilustracao: [
    {
      id: 7,
      title: "Identidade Visual Corporativa",
      description: "Conjunto de ilustrações para marca e comunicação empresarial.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["#Illustrator", "#BrandDesign", "#VectorArt", "#Corporate"],
    },
    {
      id: 8,
      title: "Animações para Web",
      description: "Ilustrações animadas para interfaces digitais.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["#AfterEffects", "#WebAnimation", "#Motion", "#Interactive"],
    },
    {
      id: 9,
      title: "Editorial Digital",
      description: "Ilustrações para conteúdo jornalístico e editorial.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["#Photoshop", "#Editorial", "#DigitalArt", "#Journalism"],
    },
  ],
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("ux-ui")
  const [currentSlide, setCurrentSlide] = useState(0)

  const portfolioImages = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length)
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#BDCBD6" }}>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex flex-col items-center justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-bg.png" alt="Hero Background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white px-4 mt-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">Olá, sou o Max.</h1>
          <p className="text-lg md:text-xl mb-6 animate-fade-in-delay">UX/UI Designer, Ilustrador e Infografista.</p>
          <p className="text-base md:text-lg max-w-2xl mx-auto mb-8 animate-fade-in-delay-2">
            Transformando complexidade em experiências intuitivas há mais de duas décadas.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector("#trabalhos-destaque")
              element?.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 animate-fade-in-delay-2"
            style={{ backgroundColor: "#ffcc00", color: "#434A54" }}
          >
            Ver Meus Trabalhos
          </button>
        </div>
      </section>

      {/* Featured Works */}
      <section id="trabalhos-destaque" className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: "#434A54" }}>
            Trabalhos em Destaque
          </h2>

          {/* Category Menu */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-4 bg-white/50 rounded-full p-2">
              <button
                onClick={() => setActiveCategory("ux-ui")}
                className={`px-6 py-3 rounded-full transition-all ${
                  activeCategory === "ux-ui"
                    ? "bg-[#ffcc00] text-[#434A54] font-semibold"
                    : "text-[#434A54] hover:bg-white/50"
                }`}
              >
                UX/UI Design
              </button>
              <button
                onClick={() => setActiveCategory("infografia")}
                className={`px-6 py-3 rounded-full transition-all ${
                  activeCategory === "infografia"
                    ? "bg-[#ffcc00] text-[#434A54] font-semibold"
                    : "text-[#434A54] hover:bg-white/50"
                }`}
              >
                Infografia
              </button>
              <button
                onClick={() => setActiveCategory("ilustracao")}
                className={`px-6 py-3 rounded-full transition-all ${
                  activeCategory === "ilustracao"
                    ? "bg-[#ffcc00] text-[#434A54] font-semibold"
                    : "text-[#434A54] hover:bg-white/50"
                }`}
              >
                Ilustração
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects[activeCategory as keyof typeof projects].map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm"
              >
                <div className="relative h-48">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: "#434A54" }}>
                    {project.title}
                  </h3>
                  <p className="mb-4" style={{ color: "#768192" }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link href={`/projeto/${project.id}`}>
                    <Button
                      className="w-full rounded-full font-semibold"
                      style={{ backgroundColor: "#ffcc00", color: "#434A54" }}
                    >
                      Veja Mais
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Behance Portfolio Integration */}
      <section id="behance-projetos" className="py-20 px-4 md:px-8 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: "#434A54" }}>
            Projetos do Behance
          </h2>

          {/* Lista horizontal de projetos */}
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {[
              {
                name: "Dashboard B2B Sistema de Gestão",
                tools: "Figma • Photoshop • After Effects",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                name: "Infográfico Interativo Dados Corporativos",
                tools: "Illustrator • After Effects • InDesign",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                name: "Identidade Visual Tech Startup",
                tools: "Illustrator • Photoshop • Figma",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                name: "App Mobile E-commerce",
                tools: "Figma • Sketch • Principle",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                name: "Design Editorial Revista Digital",
                tools: "InDesign • Photoshop • Illustrator",
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((project, index) => (
              <a
                key={index}
                href="https://www.behance.net/maxdemian"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex-shrink-0 w-80 h-60 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <Image src={project.image || "/placeholder.svg"} alt={project.name} fill className="object-cover" />

                {/* Overlay com gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Textos sobrepostos */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{project.name}</h3>
                  <p className="text-sm opacity-90">{project.tools}</p>
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
                className="rounded-full font-semibold px-8 py-3"
                style={{ backgroundColor: "#ffcc00", color: "#434A54" }}
              >
                Ver Portfólio Completo no Behance
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section id="habilidades" className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: "#434A54" }}>
            Habilidades Técnicas
          </h2>

          {/* Software Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center" style={{ color: "#434A54" }}>
              Softwares
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
              {["Figma", "Framer", "Photoshop", "Illustrator", "After Effects", "Sketch"].map((software) => (
                <div key={software} className="text-center">
                  <div className="w-16 h-16 bg-white/50 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold" style={{ color: "#434A54" }}>
                      {software.charAt(0)}
                    </span>
                  </div>
                  <p className="text-sm" style={{ color: "#768192" }}>
                    {software}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center" style={{ color: "#434A54" }}>
              Habilidades
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Ilustração", icon: Palette, level: 90 },
                { name: "Animação", icon: Video, level: 85 },
                { name: "Edição de vídeo", icon: Video, level: 80 },
                { name: "Edição de áudio", icon: Headphones, level: 75 },
              ].map((skill) => (
                <div key={skill.name} className="bg-white/50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <skill.icon className="w-6 h-6 mr-3" style={{ color: "#434A54" }} />
                    <span className="font-semibold" style={{ color: "#434A54" }}>
                      {skill.name}
                    </span>
                  </div>
                  <div className="w-full bg-white/50 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-1000"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: "#ffcc00",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Knowledge */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center" style={{ color: "#434A54" }}>
              Conhecimentos
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Design Thinking", icon: Lightbulb, level: 95 },
                { name: "User Experience", icon: User, level: 95 },
                { name: "UX Writing", icon: PenTool, level: 85 },
                { name: "UX Research", icon: Search, level: 90 },
                { name: "Prototipação", icon: Layout, level: 95 },
                { name: "Design Responsivo", icon: Smartphone, level: 90 },
                { name: "Design Gráfico", icon: Palette, level: 95 },
                { name: "Sistemas B2B e B2C", icon: Users, level: 90 },
                { name: "Projetos Ágeis com Scrum", icon: Zap, level: 85 },
              ].map((knowledge) => (
                <div key={knowledge.name} className="bg-white/50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <knowledge.icon className="w-6 h-6 mr-3" style={{ color: "#434A54" }} />
                    <span className="font-semibold text-sm" style={{ color: "#434A54" }}>
                      {knowledge.name}
                    </span>
                  </div>
                  <div className="w-full bg-white/50 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-1000"
                      style={{
                        width: `${knowledge.level}%`,
                        backgroundColor: "#ffcc00",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 px-4 md:px-8 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: "#434A54" }}>
            Olá eu sou Max Demian
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed" style={{ color: "#434A54" }}>
                  Formado em Publicidade e Propaganda, iniciei minha carreira focado em usabilidade e atendimento ao
                  público desde o primeiro estágio, antes de existirem siglas ou cursos especializados no assunto.
                  Inovei ao combinar ilustração com formas interativas de contar histórias, quando a internet ainda era
                  dominada por grandes portais de notícias, o que me levou a trabalhar no maior jornal do sul do país.
                </p>
                <p className="text-lg leading-relaxed mt-6" style={{ color: "#434A54" }}>
                  Mais tarde, minha trajetória me levou ao centro do país, onde continuei atuando com usabilidade em
                  diferentes meios de comunicação. Minha busca por aprimoramento profissional me direcionou a trabalhar
                  com sistemas complexos em grandes empresas de B2B e B2C.
                </p>
                <p className="text-lg leading-relaxed mt-6" style={{ color: "#434A54" }}>
                  Essa jornada me deu uma compreensão profunda das necessidades do usuário e a habilidade de transformar
                  complexidade em experiências intuitivas. Hoje, sigo comprometido em inovar e contribuir para projetos
                  que fazem a diferença, sempre focado em criar soluções que agreguem valor e facilitem a vida das
                  pessoas.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Max Demian"
                  width={400}
                  height={500}
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Timeline */}
      <ProfessionalTimeline />

      {/* Contact Section */}
      <section id="contato" className="py-20 px-4 md:px-8 bg-white/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16" style={{ color: "#434A54" }}>
            Vamos Conversar
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a
              href="mailto:max3demian@gmail.com"
              className="flex flex-col items-center p-6 bg-white/50 rounded-lg hover:bg-white/70 transition-colors group"
            >
              <Mail className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform" style={{ color: "#434A54" }} />
              <span className="font-semibold" style={{ color: "#434A54" }}>
                Email
              </span>
              <span className="text-sm mt-2" style={{ color: "#768192" }}>
                max3demian@gmail.com
              </span>
            </a>

            <a
              href="tel:11945554555"
              className="flex flex-col items-center p-6 bg-white/50 rounded-lg hover:bg-white/70 transition-colors group"
            >
              <Phone className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform" style={{ color: "#434A54" }} />
              <span className="font-semibold" style={{ color: "#434A54" }}>
                Telefone
              </span>
              <span className="text-sm mt-2" style={{ color: "#768192" }}>
                11 945554555
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/maxdemian/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white/50 rounded-lg hover:bg-white/70 transition-colors group"
            >
              <Linkedin
                className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform"
                style={{ color: "#434A54" }}
              />
              <span className="font-semibold" style={{ color: "#434A54" }}>
                LinkedIn
              </span>
              <span className="text-sm mt-2" style={{ color: "#768192" }}>
                maxdemian
              </span>
            </a>

            <a
              href="https://www.behance.net/maxdemian"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white/50 rounded-lg hover:bg-white/70 transition-colors group"
            >
              <ExternalLink
                className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform"
                style={{ color: "#434A54" }}
              />
              <span className="font-semibold" style={{ color: "#434A54" }}>
                Behance
              </span>
              <span className="text-sm mt-2" style={{ color: "#768192" }}>
                maxdemian
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-[#434A54]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white">© 2024 Max Demian. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
