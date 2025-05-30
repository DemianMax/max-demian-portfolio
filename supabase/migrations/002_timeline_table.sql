-- Criar tabela de timeline profissional
CREATE TABLE timeline (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company TEXT NOT NULL,
  position TEXT NOT NULL,
  period TEXT NOT NULL,
  location TEXT NOT NULL,
  description TEXT NOT NULL,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar índice para ordenação
CREATE INDEX idx_timeline_order ON timeline(order_index);

-- Habilitar RLS
ALTER TABLE timeline ENABLE ROW LEVEL SECURITY;

-- Política para leitura pública
CREATE POLICY "Timeline é visível para todos" ON timeline
  FOR SELECT USING (true);

-- Inserir dados iniciais
INSERT INTO timeline (company, position, period, location, description, order_index) VALUES
(
  'Tech Solutions Corp',
  'Senior UX/UI Designer',
  '2020 - Presente',
  'São Paulo, SP',
  'Liderança em projetos de UX para sistemas B2B complexos, implementação de design systems e metodologias ágeis.',
  4
),
(
  'Digital Media Group',
  'UX Designer',
  '2017 - 2020',
  'São Paulo, SP',
  'Desenvolvimento de interfaces para plataformas digitais, pesquisa com usuários e otimização de conversão.',
  3
),
(
  'Jornal Regional Sul',
  'Designer Gráfico / Web Designer',
  '2010 - 2017',
  'Porto Alegre, RS',
  'Inovação em storytelling digital, criação de infográficos interativos e design para portais de notícias.',
  2
),
(
  'Agência Criativa',
  'Designer Júnior',
  '2005 - 2010',
  'Porto Alegre, RS',
  'Início da carreira focado em usabilidade e atendimento ao público, desenvolvimento de peças publicitárias.',
  1
);
