import { Router } from "express";
import { registerUser } from "../controllers/auth.controllers.js";

const authRouter = Router();

/** 
 * POST /api/auth/register
 */
authRouter.post("/register", registerUser);

/**
 * get /api/auth/get-me
 * 

 * 
 */
authRouter.get("/get-me",authControllers.getMe)

export default authRouter;