import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  {
    auth: { persistSession: false, autoRefreshToken: false },
  }
);

async function test() {
  const { data, error } = await supabase
    .from('leads')
    .insert({
      name: "Test Form DB",
      phone: "9876543210",
      city: "Lucknow",
      monthly_bill: "₹2500 - ₹4000",
      message: "Testing DB connection from forms"
    })
    .select();
    
  if (error) {
    console.error("Database connection or insert failed:", error);
    process.exit(1);
  }
  
  console.log("Successfully inserted into leads table:");
  console.log(data);
}
test();
