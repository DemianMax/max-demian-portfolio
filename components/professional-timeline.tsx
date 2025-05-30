"use client"

import { useTimeline } from "@/hooks/useTimeline"

export default function ProfessionalTimeline() {
  const { timeline, loading, error } = useTimeline()

  if (loading) {
    return (
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8" style={{ color: "#434A54" }}>
            Trajetória Profissional
          </h2>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: "#ffcc00" }}></div>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8" style={{ color: "#434A54" }}>
            Trajetória Profissional
          </h2>
          <div className="text-center">
            <p className="text-red-600">Erro ao carregar timeline: {error}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8" style={{ color: "#434A54" }}>
          Trajetória Profissional
        </h2>
        <p className="text-xl text-center mb-16" style={{ color: "#768192" }}>
          Uma jornada de crescimento contínuo no universo do design e experiência do usuário.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#ffcc00] hidden md:block" />

          {timeline.map((item, index) => (
            <div
              key={item.id}
              className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
            >
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}>
                <div className="bg-white/80 p-6 rounded-lg shadow-lg relative">
                  {/* Timeline dot */}
                  <div
                    className="absolute top-6 w-4 h-4 bg-[#ffcc00] rounded-full border-4 border-white hidden md:block"
                    style={{
                      [index % 2 === 0 ? "right" : "left"]: "-2.5rem",
                    }}
                  />

                  <div className="mb-2">
                    <span
                      className="text-sm font-semibold px-3 py-1 rounded-full"
                      style={{ backgroundColor: "#ffcc00", color: "#434A54" }}
                    >
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-1" style={{ color: "#434A54" }}>
                    {item.position}
                  </h3>

                  <h4 className="text-lg font-semibold mb-2" style={{ color: "#2E86C1" }}>
                    {item.company}
                  </h4>

                  <p className="text-sm mb-3" style={{ color: "#768192" }}>
                    {item.location}
                  </p>

                  <p style={{ color: "#434A54" }}>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
