import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nqwwfxevnsvqtxzmoeis.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xd3dmeGV2bnN2cXR4em1vZWlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ0Mzc0MzIsImV4cCI6MjAwMDAxMzQzMn0.y4xKonW_zBMS0fskMl6Ri8tsfAE7b2W3e4lnfaHg00Y'

 export const supabase = createClient(supabaseUrl, supabaseKey)

