-- Contact form submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT,
  city TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived')),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Reviews / Avis clients
CREATE TABLE IF NOT EXISTS reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  author_name TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  content TEXT NOT NULL,
  source TEXT DEFAULT 'google' CHECK (source IN ('google', 'manual')),
  is_featured BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ DEFAULT now(),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Réalisations / Portfolio
CREATE TABLE IF NOT EXISTS realisations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL CHECK (category IN ('toiture', 'facade', 'gouttiere')),
  image_url TEXT NOT NULL,
  thumbnail_url TEXT,
  city TEXT,
  is_featured BOOLEAN DEFAULT false,
  completed_at DATE,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- RLS Policies

-- contact_submissions: public can insert, only authenticated can read
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert" ON contact_submissions
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated read" ON contact_submissions
  FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated update" ON contact_submissions
  FOR UPDATE TO authenticated
  USING (true);

-- reviews: public can read, only authenticated can manage
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read reviews" ON reviews
  FOR SELECT TO anon
  USING (true);

CREATE POLICY "Allow authenticated manage reviews" ON reviews
  FOR ALL TO authenticated
  USING (true);

-- realisations: public can read, only authenticated can manage
ALTER TABLE realisations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read realisations" ON realisations
  FOR SELECT TO anon
  USING (true);

CREATE POLICY "Allow authenticated manage realisations" ON realisations
  FOR ALL TO authenticated
  USING (true);

-- Indexes
CREATE INDEX idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX idx_contact_submissions_created ON contact_submissions(created_at DESC);
CREATE INDEX idx_reviews_featured ON reviews(is_featured) WHERE is_featured = true;
CREATE INDEX idx_realisations_category ON realisations(category);
CREATE INDEX idx_realisations_featured ON realisations(is_featured) WHERE is_featured = true;
