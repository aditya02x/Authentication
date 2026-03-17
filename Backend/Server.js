import app from "./src/app.js";
import authRouter from "./src/routes/auth.route.js";

import dotenv from "dotenv";
dotenv.config();

import connectdb from "./src/db/db.js";

connectdb();

// ✅ USE ROUTES
app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("✅ Server is Running on PORT", PORT);
});