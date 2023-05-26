import { createClient } from '@supabase/supabase-js';
import assert from 'assert';

assert(process.env.SUPABASE_URL, 'Missing env var: SUPABASE_URL');
assert(process.env.SUPABASE_ANON_KEY, 'Missing env var: SUPABASE_ANON_KEY');
export const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);