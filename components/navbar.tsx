"use client"

import { useState, useEffect } from "react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`w-full py-4 px-6 transition-all duration-300 z-50 ${
        isScrolled ? "fixed top-0 left-0 bg-black shadow-lg" : "absolute top-0 left-0 bg-black/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Max Demian</div>
        <div className="hidden md:flex space-x-8">
          {[
            { name: "Início", id: "hero" },
            { name: "Trabalhos", id: "trabalhos-destaque" },
            { name: "Behance", id: "behance-projetos" },
            { name: "Habilidades", id: "habilidades" },
            { name: "Sobre", id: "sobre" },
            { name: "Trajetória", id: "trajetoria" },
            { name: "Contato", id: "contato" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white hover:text-[#ffcc00] transition-colors font-medium"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Menu mobile */}
        <div className="md:hidden">
          <button
            onClick={() => {
              const menu = document.getElementById("mobile-menu")
              menu?.classList.toggle("hidden")
            }}
            className="text-white hover:text-[#ffcc00]"
          >
            Menu
          </button>
          <div
            id="mobile-menu"
            className="hidden absolute top-full left-0 right-0 bg-black p-4 flex flex-col space-y-4"
          >
            {[
              { name: "Início", id: "hero" },
              { name: "Trabalhos", id: "trabalhos-destaque" },
              { name: "Behance", id: "behance-projetos" },
              { name: "Habilidades", id: "habilidades" },
              { name: "Sobre", id: "sobre" },
              { name: "Trajetória", id: "trajetoria" },
              { name: "Contato", id: "contato" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id)
                  const menu = document.getElementById("mobile-menu")
                  menu?.classList.add("hidden")
                }}
                className="text-white hover:text-[#ffcc00] transition-colors font-medium text-left"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
