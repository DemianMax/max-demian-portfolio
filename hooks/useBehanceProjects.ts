"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"

export interface BehanceProject {
  id: string
  title: string
  description?: string
  tools?: string
  image_url?: string
  behance_url?: string
  order_index: number
  is_active: boolean
  created_at: string
}

export function useBehanceProjects() {
  const [projects, setProjects] = useState<BehanceProject[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true)
        const { data, error } = await supabase
          .from("behance_projects")
          .select("*")
          .eq("is_active", true)
          .order("order_index", { ascending: true })

        if (error) throw error

        setProjects(data || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro ao carregar projetos do Behance")
        console.error("Erro ao buscar projetos do Behance:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return { projects, loading, error }
}
