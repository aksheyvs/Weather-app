import { Router } from "express";
import { getBilling } from "../controllers/billingController.js";

const billingRouter = Router();

billingRouter.get("/", getBilling);

export default billingRouter;