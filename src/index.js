import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import userRouter from "./routes/userRoutes.js";

dotenv.config();

const port = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", userRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
