import express from "express";
import { submitapplication } from "../controllers/application.controller.js";

const router = express.Router();

router.post("/submitapplication", submitapplication);

export default router;
