import express from "express";
import { refreshToken } from "../controllers/auth.controllers.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { registerUser, getMe } from "../controllers/auth.controllers.js";

const authRouter = express.Router();


authRouter.post("/register", registerUser);
authRouter.get("/get-me", getMe);
authRouter.get("/refresh-token", refreshToken);

export default authRouter;