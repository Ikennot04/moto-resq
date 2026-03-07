import express from "express";
import upload from "../../middlewear/multer.js";
import { signupUser, loginUser } from "./user.controller.js";

const router = express.Router();

// auth
router.post("/auth/signup", upload.single("images"), signupUser);
router.post("/auth/signin", loginUser);

export default router;