import express from "express";
import upload from "../../middlewear/multer.js";
import { createTechnician } from "./technician.controller.js";

const router = express.Router();

router.post("/", upload.single("image"), createTechnician);

export default router;
