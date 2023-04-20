import { Router } from "express";

import { chatController } from "../controllers/chatController/chatController";
import { ChatRouters } from "../constants/routers";

export const chatRoute = new (Router as any)();

chatRoute.post(ChatRouters.CHAT_MESSAGE, chatController.setMessage);
chatRoute.get(ChatRouters.CHAT_MESSAGES, chatController.getMessages);
