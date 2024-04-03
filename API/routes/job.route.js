import express from "express";
import { create } from "../controllers/job.controller.js";
import { getjobs } from "../controllers/job.controller.js";

const router = express.Router();

router.post("/create", create);
router.get("/getjobs", getjobs)

export default router;
