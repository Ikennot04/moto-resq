import express from "express";
import upload from "../../middlewear/multer.js";
import { signupUser, loginUser, logoutUser } from "./user.controller.js";

const router = express.Router();

// auth
router.post("/auth/signup", upload.single("images"), signupUser);
router.post("/auth/signin", loginUser);
router.patch("/auth/logout/:id", logoutUser);

export default router;