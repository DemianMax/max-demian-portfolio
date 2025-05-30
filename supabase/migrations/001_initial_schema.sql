-- Criar tabela de projetos
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('ux-ui', 'infografia', 'ilustracao')),
  tags TEXT[] DEFAULT '{}',
  images TEXT[] DEFAULT '{}',
  content JSONB DEFAULT '[]',
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar tabela de mensagens de contato
CREATE TABLE contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar tabela de visualizações de projetos
CREATE TABLE project_views (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  visitor_ip TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar índices para performance
CREATE INDEX idx_projects_category ON projects(category);
CREATE INDEX idx_projects_published ON projects(published);
CREATE INDEX idx_project_views_project_id ON project_views(project_id);
CREATE INDEX idx_project_views_created_at ON project_views(created_at);

-- Habilitar RLS (Row Level Security)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_views ENABLE ROW LEVEL SECURITY;

-- Políticas de acesso (todos podem ler projetos publicados)
CREATE POLICY "Projetos publicados são visíveis para todos" ON projects
  FOR SELECT USING (published = true);

-- Todos podem inserir mensagens de contato
CREATE POLICY "Qualquer um pode enviar mensagem de contato" ON contact_messages
  FOR INSERT WITH CHECK (true);

-- Todos podem inserir visualizações
CREATE POLICY "Qualquer um pode registrar visualização" ON project_views
  FOR INSERT WITH CHECK (true);
