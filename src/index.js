import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import userRouter from "./routes/userRoutes.js";
import errorHandling from "./middleware/haddleError.js";
dotenv.config();

const port = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", userRouter);
app.use(errorHandling);
// app.use("/api/v2", (req, res, next) => {
//   if (
//     res.header["content-type"] &&
//     res.header["content-type"] === "application/json"
//   ) {
//     req.body = JSON.parse(Buffer.from(req.body).toString("utf-8"));
//   }
//   next();
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
