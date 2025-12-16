import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://hfndfmtxhqvubnfiwzlz.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmbmRmbXR4aHF2dWJuZml3emx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2Mjk4MDgsImV4cCI6MjA3NjIwNTgwOH0.n0NK_Ov03-UbDQYr5mio3ggYa5XTN-XI1kB6X81N4nA';
const supabaseScopedToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsImF1ZCI6ImF1dGhlbnRpY2F0ZWQiLCJyb2xlIjoiYW5vbiIsInRlbmFudF9pZCI6InE1SFdVZm5VN3ZYbkRlSFdLTFdlMGFIdWNadDEiLCJwcm9qZWN0X2lkIjoiMzY5OTI0MzAtMGYwZi00ZWRjLThjYzctN2RkNTQxZGFjZDU1IiwianRpIjoiNWVhZjFhZTUtYjc2ZS00ODIyLWI4MDktOGY1ZDVmM2ZiYzY4IiwiaWF0IjoxNzY1ODg5MjE5LCJleHAiOjE3NjU4OTE5MTl9.gbkKJKDPLmAG99mhy4iqBre6btcwc2Xu_ArWuroYXZM';

// Create Supabase client with scoped authentication
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  global: {
    headers: {
      Authorization: `Bearer ${supabaseScopedToken}`
    }
  }
});

// Tenant and Project IDs for this workspace
export const TENANT_ID = 'q5HWUfnU7vXnDeHWKLWe0aHucZt1';
export const PROJECT_ID = '36992430-0f0f-4edc-8cc7-7dd541dacd55';
