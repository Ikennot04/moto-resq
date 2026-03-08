import express from "express";
import upload from "../../middlewear/multer.js";
import {
  signupUser,
  loginUser,
  logoutUser,
  getAllUsers,
  getUserById,
  updateUser,
  getUserVehicles,
  addUserVehicle,
} from "./user.controller.js";

const router = express.Router();

// auth
router.post("/auth/signup", upload.single("image"), signupUser);
router.post("/auth/signin", loginUser);
router.patch("/auth/logout/:id", logoutUser);

// users
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.patch("/:id", upload.single("image"), updateUser);

// user vehicles
router.get("/:id/vehicles", getUserVehicles);
router.post("/:id/vehicles", addUserVehicle);

export default router;
