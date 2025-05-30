-- Criar tabela de projetos do Behance
CREATE TABLE behance_projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  tools TEXT, -- Ferramentas usadas (ex: "Figma • Photoshop • After Effects")
  image_url TEXT,
  behance_url TEXT, -- Link para o projeto no Behance
  order_index INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar índice para ordenação
CREATE INDEX idx_behance_projects_order ON behance_projects(order_index);
CREATE INDEX idx_behance_projects_active ON behance_projects(is_active);

-- Habilitar RLS
ALTER TABLE behance_projects ENABLE ROW LEVEL SECURITY;

-- Política para leitura pública (apenas projetos ativos)
CREATE POLICY "Projetos do Behance ativos são visíveis para todos" ON behance_projects
  FOR SELECT USING (is_active = true);

-- Inserir dados de exemplo
INSERT INTO behance_projects (title, description, tools, image_url, behance_url, order_index) VALUES
(
  'Dashboard B2B Sistema de Gestão',
  'Interface completa para gestão empresarial com foco na experiência do usuário e otimização de fluxos de trabalho.',
  'Figma • Photoshop • After Effects',
  '/placeholder.svg?height=300&width=400',
  'https://www.behance.net/maxdemian',
  1
),
(
  'Infográfico Interativo Dados Corporativos',
  'Visualização de dados complexos transformada em narrativas visuais envolventes e interativas.',
  'Illustrator • After Effects • InDesign',
  '/placeholder.svg?height=300&width=400',
  'https://www.behance.net/maxdemian',
  2
),
(
  'Identidade Visual Tech Startup',
  'Desenvolvimento de identidade visual completa para startup de tecnologia, incluindo logo e sistema de comunicação.',
  'Illustrator • Photoshop • Figma',
  '/placeholder.svg?height=300&width=400',
  'https://www.behance.net/maxdemian',
  3
),
(
  'App Mobile E-commerce',
  'Design de aplicativo mobile para e-commerce com foco na experiência do usuário e otimização de conversão.',
  'Figma • Sketch • Principle',
  '/placeholder.svg?height=300&width=400',
  'https://www.behance.net/maxdemian',
  4
),
(
  'Design Editorial Revista Digital',
  'Layout e design para revista digital com foco em legibilidade e experiência de leitura otimizada.',
  'InDesign • Photoshop • Illustrator',
  '/placeholder.svg?height=300&width=400',
  'https://www.behance.net/maxdemian',
  5
);
