"use client"

import { useState } from "react"
import Image from "next/image"
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
import BehanceProjects from "@/components/behance-projects"
import FeaturedWorksGrid from "@/components/featured-works-grid"

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

          {/* Projects Grid - 3 colunas fixas */}
          <div className="grid lg:grid-cols-3 gap-8">
            <FeaturedWorksGrid category={activeCategory} />
          </div>
        </div>
      </section>

      {/* Behance Portfolio Integration */}
      <section id="behance-projetos" className="py-20 px-4 md:px-8 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: "#434A54" }}>
            Projetos do Behance
          </h2>
          <BehanceProjects />
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {[
                {
                  name: "Figma",
                  logo: "data:image/png;base64,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",
                },
                { name: "Framer", logo: "/placeholder.svg?height=64&width=64" },
                { name: "Photoshop", logo: "/placeholder.svg?height=64&width=64" },
                { name: "Illustrator", logo: "/placeholder.svg?height=64&width=64" },
                { name: "After Effects", logo: "/placeholder.svg?height=64&width=64" },
                { name: "Sketch", logo: "/placeholder.svg?height=64&width=64" },
              ].map((software) => (
                <div key={software.name} className="text-center">
                  <div className="w-16 h-16 bg-white/50 rounded-lg flex items-center justify-center mb-2 p-2">
                    <Image
                      src={software.logo || "/placeholder.svg"}
                      alt={`${software.name} logo`}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm font-medium" style={{ color: "#434A54" }}>
                    {software.name}
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
