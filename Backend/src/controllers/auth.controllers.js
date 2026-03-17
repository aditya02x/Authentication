import User from "../models/User.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (req,res)=>{
    try {
        const {username,email,passowrd}=req.body;
        
        
    } catch (error) {
        console.error("Error in registerUser:", error);
    }
}