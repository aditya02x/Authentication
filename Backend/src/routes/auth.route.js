import express from "express";
import { registerUser, getMe } from "../controllers/auth.controllers.js";

const authRouter = express.Router();

authRouter.post("/register", registerUser);
authRouter.get("/get-me", getMe);

export default authRouter;