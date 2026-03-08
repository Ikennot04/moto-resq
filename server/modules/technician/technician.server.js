import path from "path";
import fs from "fs/promises";
import validator from "validator";
import bcrypt from "bcrypt";

import Technician from "./technician.model.js";

async function deleteTechnicianImageIfExists(imgPath) {
  if (!imgPath) return;
  try {
    await fs.unlink(imgPath);
  } catch (err) {
    if (err.code !== "ENOENT")
      console.error("Failed to delete technician image:", err);
  }
}

export const TechnicianService = {
  async createTechnician(data, profileImage) {
    const img_path = profileImage
      ? path.join("images", "technician", profileImage)
      : null;

    if (!data?.email || !validator.isEmail(data.email)) {
      await deleteTechnicianImageIfExists(img_path);
      throw new Error("Invalid email format");
    }
    if (!data?.password || !validator.isStrongPassword(data.password)) {
      await deleteTechnicianImageIfExists(img_path);
      throw new Error(
        "Password must contain one capital letter and one special character",
      );
    }

    const existing = await Technician.findOne({
      email: data.email.toLowerCase(),
    });
    if (existing) {
      await deleteTechnicianImageIfExists(img_path);
      throw new Error("Email already registered");
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(data.password, salt);

    try {
      console.log({
        ...data,
        password: hashPassword,
        profile_image: profileImage || undefined,
      });
      const technician = await Technician.create({
        ...data,
        password: hashPassword,
        profile_image: profileImage,
      });

      const result = technician.toObject();
      return result;
    } catch (err) {
      await deleteTechnicianImageIfExists(img_path);
      throw err;
    }
  },
};
