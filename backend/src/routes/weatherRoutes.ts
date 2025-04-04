import { Router } from "express";
import { getWeather } from "../controllers/weatherController.js";

const weatherRouter = Router();

weatherRouter.get("/", getWeather);


export default weatherRouter;