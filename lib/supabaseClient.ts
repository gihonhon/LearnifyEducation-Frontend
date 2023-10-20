import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://evdoeowyehtzevoknscs.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2ZG9lb3d5ZWh0emV2b2tuc2NzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzMzU4MDIsImV4cCI6MjAxMTkxMTgwMn0.rHmn9IK28Rq7cT5kTj9P2_IjC6Z_74dyZ3VErWPKOB4';
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
