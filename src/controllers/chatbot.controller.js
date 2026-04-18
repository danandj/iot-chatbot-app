import {
    chatGemini,
} from "../services/chatbot.service.js";

export const conversationChat = (_req, res) => {
    chatGemini(_req, res);
};