import { Router } from "express";
import weatherRouter from "./weatherRoutes";
import authRouter from "./authRoutes";
import userRouter from "./userRoutes";
import billingRouter from "./billingRoutes";

const router = Router();

router.use("/auth", authRouter);
router.use("/billing", billingRouter);
router.use("/user", userRouter);
router.use("/weather", weatherRouter);

export default router;