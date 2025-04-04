import { Router } from "express";
import weatherRouter from "./weatherRoutes.js";
import authRouter from "./authRoutes.js";
import userRouter from "./userRoutes.js";
import billingRouter from "./billingRoutes.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/billing", billingRouter);
router.use("/user", userRouter);
router.use("/weather", weatherRouter);

export default router;