import { Request, Response } from "express"

export const getWeather = (req: Request, res: Response) => {
    res.send("Weather API is working!");
};