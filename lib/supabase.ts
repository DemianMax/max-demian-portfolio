import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos para o banco de dados
export interface Project {
  id: string
  title: string
  description: string
  category: "ux-ui" | "infografia" | "ilustracao"
  tags: string[]
  images: string[]
  content: any[]
  published: boolean
  created_at: string
  updated_at: string
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  message: string
  created_at: string
}

export interface ProjectView {
  id: string
  project_id: string
  visitor_ip: string
  created_at: string
}
