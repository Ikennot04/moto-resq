import express from "express";
import upload from "../../middlewear/multer.js";
import {
  createTechnician,
  getAllTechnicians,
  getTechnicianById,
} from "./technician.controller.js";

const router = express.Router();

router.post("/", upload.single("image"), createTechnician);
router.get("/", getAllTechnicians);
router.get("/:id", getTechnicianById);

export default router;
