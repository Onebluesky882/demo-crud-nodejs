import pool from "../config/db.js";

export const addColumnTable = async () => {
  try {
    await pool.query(`
        ALTER TABLE users 
        ADD COLUMN created_at TIMESTAMP DEFAULT NOW();
      `);
    console.log("✅ Column 'created_at' added successfully!");
  } catch (error) {
    console.error("❌ Failed to add column:", error.message);
  }
};
