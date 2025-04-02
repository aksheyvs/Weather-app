import { Router } from "express";
import { getBilling } from "../controllers/billingController";

const billingRouter = Router();

billingRouter.get("/", getBilling);

export default billingRouter;