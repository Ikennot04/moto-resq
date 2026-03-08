import { TechnicianService } from "./technician.server.js";

export const createTechnician = async (req, res) => {
  try {
    const technicianData = JSON.parse(req?.body?.data);
    const profile_image = req.file?.filename;

    const technician = await TechnicianService.createTechnician(
      technicianData,
      profile_image,
    );
    res.status(201).json({ success: true, data: technician });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
