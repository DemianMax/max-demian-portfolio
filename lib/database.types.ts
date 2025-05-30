export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string
          title: string
          description: string
          category: string
          tags: string[]
          images: string[]
          content: any[]
          published: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          title: string
          description: string
          category: string
          tags?: string[]
          images?: string[]
          content?: any[]
          published?: boolean
        }
        Update: {
          title?: string
          description?: string
          category?: string
          tags?: string[]
          images?: string[]
          content?: any[]
          published?: boolean
        }
      }
      contact_messages: {
        Row: {
          id: string
          name: string
          email: string
          message: string
          created_at: string
        }
        Insert: {
          name: string
          email: string
          message: string
        }
        Update: {
          name?: string
          email?: string
          message?: string
        }
      }
      project_views: {
        Row: {
          id: string
          project_id: string
          visitor_ip: string
          created_at: string
        }
        Insert: {
          project_id: string
          visitor_ip: string
        }
        Update: {
          project_id?: string
          visitor_ip?: string
        }
      }
      career_timeline: {
        Row: {
          id: string
          company: string
          position: string
          period: string
          location: string
          description: string
          order_index: number
          logo_url?: string
          company_url?: string
          created_at: string
          updated_at: string
        }
        Insert: {
          company: string
          position: string
          period: string
          location: string
          description: string
          order_index?: number
          logo_url?: string
          company_url?: string
        }
        Update: {
          company?: string
          position?: string
          period?: string
          location?: string
          description?: string
          order_index?: number
          logo_url?: string
          company_url?: string
        }
      }
      behance_projects: {
        Row: {
          id: string
          title: string
          description?: string
          tools?: string
          image_url?: string
          behance_url?: string
          order_index: number
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          title: string
          description?: string
          tools?: string
          image_url?: string
          behance_url?: string
          order_index?: number
          is_active?: boolean
        }
        Update: {
          title?: string
          description?: string
          tools?: string
          image_url?: string
          behance_url?: string
          order_index?: number
          is_active?: boolean
        }
      }
      featured_works: {
        Row: {
          id: string
          title: string
          description: string
          category: string
          image_url?: string
          tags: string[]
          project_url?: string
          order_index: number
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          title: string
          description: string
          category: string
          image_url?: string
          tags?: string[]
          project_url?: string
          order_index?: number
          is_active?: boolean
        }
        Update: {
          title?: string
          description?: string
          category?: string
          image_url?: string
          tags?: string[]
          project_url?: string
          order_index?: number
          is_active?: boolean
        }
      }
    }
  }
}
