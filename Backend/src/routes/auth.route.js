import { Router } from "express";
import { registerUser } from "../controllers/auth.controllers";

const authRouter = Router();
/** 
 * POST /api/auth/register
 */

authRouter.post("/register", registerUser);

export default authRouter;