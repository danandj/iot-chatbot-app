import express from "express";
import indexRouter from "./routes/index.js";
import morgan from "morgan";
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/status", (_req, res) => {
    return res.status(200).json({
        message: "API Chatbot sudah aktif...",
        uptime: process.uptime(),
    });
});

//Menjalankan router untuk endpoint /api
app.use("/api", indexRouter);


// ==== Middleware untuk serve file static (frontend) ====
// Menggunakan '../public' karena app.js ada di dalam folder 'src'
app.use(express.static(path.join(__dirname, '../public')));

export default app;