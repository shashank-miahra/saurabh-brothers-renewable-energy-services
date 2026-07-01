import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const { Client } = pg;

async function test() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false } // Required for Supabase connecting over standard port
  });

  try {
    await client.connect();
    console.log("Connected to database successfully!");

    // Create table if not exists
    await client.query(`
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        email VARCHAR(255),
        city VARCHAR(255),
        monthly_bill VARCHAR(100),
        roof_type VARCHAR(100),
        message TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log("Table 'leads' ensured.");

    // Insert a test row
    const res = await client.query(`
      INSERT INTO leads (name, phone, city, monthly_bill, message)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `, ["PG Test Name", "9876543210", "Lucknow", "₹2500 - ₹4000", "Testing PG connection"]);
    
    console.log("Inserted row:", res.rows[0]);
  } catch (err) {
    console.error("Database error:", err);
  } finally {
    await client.end();
  }
}
test();
