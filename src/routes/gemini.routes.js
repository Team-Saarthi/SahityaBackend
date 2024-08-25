import { Router } from "express";
import { chatWithGemini } from "../controllers/gemini.controller.js";

const router = Router();

router.route("/chat").post(chatWithGemini);

export default router;
