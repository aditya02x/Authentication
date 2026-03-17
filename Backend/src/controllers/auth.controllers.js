import User from "../models/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // validation
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    // check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "User already exists"
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    await User.create({
      username,
      email,
      password: hashedPassword
    });

    return res.status(201).json({
      message: "User registered successfully"
    });

  } catch (error) {
    console.error("Error in registerUser:", error);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
};

export { registerUser };