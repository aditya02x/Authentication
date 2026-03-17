import app from "./src/app.js";

import dotenv from "dotenv";
dotenv.config();
import connectdb from "./src/db/db.js";

connectdb();


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("✅ Server is Running on PORT",PORT);
})
