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

export const getUserByIdService = async (id) => {
  const user = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);

  if (user.length === 0) {
    console.log("not found user");
  }
  return user.rows[0];
};

export const updateUserService = async (id, name, email) => {
  try {
    const updateUser = await pool.query(
      `UPDATE users SET name=$1 , email=$2 WHERE id = $3 RETURNING *`,
      [name, email, id]
    );
    return updateUser.rows[0];
  } catch (error) {
    throw new Error(`Database Error: ${error.message}`);
  }
};

export const deleteUserService = async (id) => {
  const user = await pool.query(`DELETE FROM users WHERE id = $1 RETURNING *`, [
    id,
  ]);

  if (user.length === 0) {
    console.log("not found user");
  }
  return user.rows[0];
};
