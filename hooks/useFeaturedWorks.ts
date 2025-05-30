"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"

export interface FeaturedWork {
  id: string
  title: string
  description: string
  category: "ux-ui" | "infografia" | "ilustracao"
  image_url?: string
  tags: string[]
  project_url?: string
  order_index: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export function useFeaturedWorks(category = "ux-ui") {
  const [works, setWorks] = useState<FeaturedWork[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchWorks() {
      try {
        setLoading(true)
        const { data, error } = await supabase
          .from("featured_works")
          .select("*")
          .eq("category", category)
          .eq("is_active", true)
          .order("order_index", { ascending: true })

        if (error) throw error

        setWorks(data || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro ao carregar trabalhos em destaque")
        console.error("Erro ao buscar trabalhos em destaque:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchWorks()
  }, [category])

  return { works, loading, error }
}
