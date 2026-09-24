import type { Request, Response } from "express";
import { getAdminOverview } from "./admin.service.js";

export async function getAdminOverviewController(
  _req: Request,
  res: Response,
) {
  try {
    const overview = await getAdminOverview();

    return res.status(200).json(overview);
  } catch (error) {
    console.error("Admin overview error:", error);

    return res.status(500).json({
      error: "INTERNAL_SERVER_ERROR",
      message: "Unable to retrieve admin overview.",
    });
  }
}