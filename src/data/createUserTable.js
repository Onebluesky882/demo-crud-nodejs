import pool from "../config/db.js";
const createTable = async () => {
  const queryText = `
    
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    create_at TIMESTAMP DEFAULT NOW()
)
    
    `;

  try {
    pool.query(queryText);
    console.log("user table create successful");
  } catch (error) {
    console.log("error creating table");
  }
};

export default createTable;
