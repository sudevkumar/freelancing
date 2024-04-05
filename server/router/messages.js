import express from "express";
import {
  createNewMessage,
  deleteAMessage,
  getAllMessage,
  getSingleMessage,
} from "../controller/messages.js";

const router = express.Router();
router.post("/send", createNewMessage);
router.get("/get", getAllMessage);
router.get("/get/:id", getSingleMessage);
router.delete("/delete/:id", deleteAMessage);

export default router;
