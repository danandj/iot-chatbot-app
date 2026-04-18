import { Router } from "express";
import {
    conversationChat,
} from "../controllers/chatbot.controller.js";

const router = Router();

router.post("/", conversationChat);

export default router;