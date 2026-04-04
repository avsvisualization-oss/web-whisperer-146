
INSERT INTO storage.buckets (id, name, public)
VALUES ('contact-uploads', 'contact-uploads', true);

CREATE POLICY "Anyone can upload contact files"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'contact-uploads');

CREATE POLICY "Anyone can read contact uploads"
ON storage.objects
FOR SELECT
USING (bucket_id = 'contact-uploads');
