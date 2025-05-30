"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"

export interface TimelineItem {
  id: string
  company: string
  position: string
  period: string
  location: string
  description: string
  order_index: number
  created_at: string
}

export function useTimeline() {
  const [timeline, setTimeline] = useState<TimelineItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchTimeline() {
      try {
        setLoading(true)
        const { data, error } = await supabase
          .from("career_timeline")
          .select("*")
          .order("order_index", { ascending: false }) // Mais recente primeiro

        if (error) throw error

        setTimeline(data || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro ao carregar timeline")
        console.error("Erro ao buscar timeline:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchTimeline()
  }, [])

  return { timeline, loading, error }
}
