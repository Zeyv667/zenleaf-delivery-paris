ALTER TABLE public.commandes RENAME COLUMN email TO variete;

DROP POLICY IF EXISTS "Anyone can submit an order request" ON public.commandes;

CREATE POLICY "Anyone can submit an order request" ON public.commandes FOR INSERT TO anon, authenticated WITH CHECK (
  length(pseudo) BETWEEN 2 AND 50
  AND length(numero) BETWEEN 8 AND 20
  AND length(variete) BETWEEN 3 AND 255
  AND (details IS NULL OR length(details) <= 1000)
);
