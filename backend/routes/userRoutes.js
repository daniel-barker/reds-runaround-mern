import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", authUser);
router.post("/register", registerUser);
router.get("/logout", logoutUser);

export default router;
