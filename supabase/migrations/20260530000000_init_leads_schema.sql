-- 1. Create leads table
CREATE TABLE public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    city TEXT,
    monthly_bill TEXT,
    roof_type TEXT,
    message TEXT,
    client_ip TEXT,
    is_spam BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Enable RLS on leads table
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- 3. No public policies on leads table for INSERT/SELECT/UPDATE/DELETE.
-- The Edge Function uses the Service Role key, which bypasses RLS.
-- This ensures that leads can only be inserted via our secure endpoint.
