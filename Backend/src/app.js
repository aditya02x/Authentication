import express from 'express';
import authRouter from './routes/auth.route.js';
import morgan from 'morgan';
import dotenv from 'dotenv';




dotenv.config();
const app = express();

app.use("/api/v1/auth",authRouter);

app.use(express.json());
app.use(morgan('dev'));

export default app;