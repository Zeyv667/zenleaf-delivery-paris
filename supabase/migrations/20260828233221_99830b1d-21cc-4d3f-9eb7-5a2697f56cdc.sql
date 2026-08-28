CREATE TABLE public.commandes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  pseudo TEXT NOT NULL,
  numero TEXT NOT NULL,
  email TEXT NOT NULL,
  details TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
GRANT INSERT ON public.commandes TO anon, authenticated;
GRANT ALL ON public.commandes TO service_role;
ALTER TABLE public.commandes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit an order request" ON public.commandes FOR INSERT TO anon, authenticated WITH CHECK (
  length(pseudo) BETWEEN 2 AND 50
  AND length(numero) BETWEEN 8 AND 20
  AND length(email) BETWEEN 3 AND 255
  AND (details IS NULL OR length(details) <= 1000)
);