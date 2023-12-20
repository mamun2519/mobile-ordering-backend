import express from "express";
import { MobileController } from "./mobile.controller";

const router = express.Router();
router.post("/", MobileController.createMobile);
router.get("/", MobileController.getAllMobile);
router.get("/:id", MobileController.getSingleMobileById);
router.patch("/:id", MobileController.updateMobileById);
router.delete("/:id", MobileController.deleteMobileById);

export const MobileRoutes = router;
