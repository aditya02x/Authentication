import { Router } from "express";
import { registerUser } from "../controllers/auth.controllers.js";

const authRouter = Router();

/** 
 * POST /api/auth/register
 */
authRouter.post("/register", registerUser);

export default authRouter;