import  express  from "express";
import { sendMessage,getMessages } from "../controliers/message.controlier.js";
import protectRoute from "../middleware/protectRoute.js";


const router =express.Router();

router.get("/:id",protectRoute,getMessages)

router.post("/send/:id",protectRoute,sendMessage)

export default router;