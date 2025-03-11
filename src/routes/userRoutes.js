import express from "express";
import { createUser, getAllUser } from "../controller/userController.js";

const router = express.Router();

router.get("/users", getAllUser);
// router.get("/user/:id", getUserById);
router.post("/user", createUser);
// router.put("/user/:id", updateUser);
// router.delete("/user/:id", deleteUser);

export default router;
