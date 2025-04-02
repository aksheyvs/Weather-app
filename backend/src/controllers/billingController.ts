import { Request, Response } from "express"

export const getBilling = (req: Request, res: Response) => {
    res.send("Billing API is working!");
}