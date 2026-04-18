import { Router } from "express";
import chatbotRouter from "../routes/chatbot.route.js";

const router = Router();

router.use("/chat", chatbotRouter);

export default router;