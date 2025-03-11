import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import pool from "./config/db.js";
import createTable from "./data/createUserTable.js";
import userRoutes from "./routers/userRoutes.js";
import errorHandling from "./middlewares/errorHandling.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
// create Table before starting

// middleware
app.use(express.json());
app.use(cors());

//Routes
app.use("/api", userRoutes);

//error handling middleware
app.use(errorHandling);

createTable();

//testing handing middleware
app.get("/", async (req, res) => {
  const result = await pool.query("SELECT current_database()");

  res.send(`the database name is : ${result.rows[0].current_database}`);
});

// server running
app.listen(port, () => {
  console.log(`server is running on http:localhost:${port}`);
});
