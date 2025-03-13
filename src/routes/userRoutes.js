import express from "express";
import {
  createUser,
  getAllUser,
  updateUser,
  getUserById,
  deleteUser,
} from "../controller/userController.js";

import validateUser from "../middleware/inputValidator.js";

const router = express.Router();

router.get("/users", getAllUser);
router.get("/user/:id", getUserById);
router.post("/user", validateUser, createUser);
router.put("/user/:id", validateUser, updateUser);
router.delete("/user/:id", deleteUser);

export default router;
