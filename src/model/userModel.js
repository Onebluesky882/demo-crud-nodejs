import pool from "../config/db.js";

export const createUserService = async (name, email) => {
  const newUser = await pool.query(
    `INSERT INTO users (name , email) VALUES ($1 , $2) RETURNING *`,
    [name, email]
  );
  return newUser.rows[0];
};

export const getAllUserService = async () => {
  const res = await pool.query(`SELECT * FROM users`);

  return res.rows;
};
