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
    }
  }
}
