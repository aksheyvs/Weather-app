import cors from "cors";
import dotenv from "dotenv"

dotenv.config();

const allowedOrigins = process.env.CORS_ORIGINS?.split(",") || ["http://localhost:3000/"];

const corsConfig = cors({
    origin: (origin, callback) =>
        (!origin || allowedOrigins.includes(origin)) ? callback(null, true) : callback(new Error("Not allowed by cors")),
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
});

export default corsConfig;