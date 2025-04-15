import { createClient } from '@supabase/supabase-js';

// No Vite, as variáveis de ambiente são acessadas via import.meta.env
// e são prefixadas com VITE_
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;