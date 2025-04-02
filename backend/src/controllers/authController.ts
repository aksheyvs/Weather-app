import { Request, Response } from "express"

export const login = (req: Request, res: Response) => {
    res.send("Login successful!");
};

export const register = (req: Request, res: Response) => {
    res.send("User registered!");
};