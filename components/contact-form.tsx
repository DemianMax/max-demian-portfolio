"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { supabase } from "@/lib/supabase"
import { Mail, Phone, Linkedin, ExternalLink } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const { error } = await supabase.from("contact_messages").insert([formData])

      if (error) throw error

      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error)
      alert("Erro ao enviar mensagem. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-8">
          <h3 className="font-bold">Mensagem enviada com sucesso!</h3>
          <p>Obrigado pelo contato. Responderei em breve!</p>
        </div>
        <Button
          onClick={() => setSubmitted(false)}
          className="rounded-full"
          style={{ backgroundColor: "#ffcc00", color: "#434A54" }}
        >
          Enviar Nova Mensagem
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8" style={{ color: "#434A54" }}>
        Vamos Conversar
      </h2>

      {/* Formulário de Contato */}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h3 className="text-2xl font-semibold mb-6" style={{ color: "#434A54" }}>
            Envie uma Mensagem
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: "#434A54" }}>
                Nome
              </label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: "#434A54" }}>
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: "#434A54" }}>
                Mensagem
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full h-32"
                placeholder="Conte-me sobre seu projeto ou como posso ajudar..."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full font-semibold py-3"
              style={{ backgroundColor: "#ffcc00", color: "#434A54" }}
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </form>
        </div>

        {/* Informações de Contato */}
        <div>
          <h3 className="text-2xl font-semibold mb-6" style={{ color: "#434A54" }}>
            Outras Formas de Contato
          </h3>
          <div className="space-y-6">
            <a
              href="mailto:max3demian@gmail.com"
              className="flex items-center p-4 bg-white/50 rounded-lg hover:bg-white/70 transition-colors group"
            >
              <Mail className="w-6 h-6 mr-4 group-hover:scale-110 transition-transform" style={{ color: "#434A54" }} />
              <div>
                <span className="font-semibold block" style={{ color: "#434A54" }}>
                  Email
                </span>
                <span className="text-sm" style={{ color: "#768192" }}>
                  max3demian@gmail.com
                </span>
              </div>
            </a>

            <a
              href="tel:11945554555"
              className="flex items-center p-4 bg-white/50 rounded-lg hover:bg-white/70 transition-colors group"
            >
              <Phone className="w-6 h-6 mr-4 group-hover:scale-110 transition-transform" style={{ color: "#434A54" }} />
              <div>
                <span className="font-semibold block" style={{ color: "#434A54" }}>
                  Telefone
                </span>
                <span className="text-sm" style={{ color: "#768192" }}>
                  11 945554555
                </span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/maxdemian/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-white/50 rounded-lg hover:bg-white/70 transition-colors group"
            >
              <Linkedin
                className="w-6 h-6 mr-4 group-hover:scale-110 transition-transform"
                style={{ color: "#434A54" }}
              />
              <div>
                <span className="font-semibold block" style={{ color: "#434A54" }}>
                  LinkedIn
                </span>
                <span className="text-sm" style={{ color: "#768192" }}>
                  maxdemian
                </span>
              </div>
            </a>

            <a
              href="https://www.behance.net/maxdemian"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-white/50 rounded-lg hover:bg-white/70 transition-colors group"
            >
              <ExternalLink
                className="w-6 h-6 mr-4 group-hover:scale-110 transition-transform"
                style={{ color: "#434A54" }}
              />
              <div>
                <span className="font-semibold block" style={{ color: "#434A54" }}>
                  Behance
                </span>
                <span className="text-sm" style={{ color: "#768192" }}>
                  maxdemian
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
