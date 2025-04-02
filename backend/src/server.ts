import express from "express"
import corsConfig from "./config/corsConfig";
import router from "./routes";
import dotenv from "dotenv"

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(corsConfig)
app.use("/", router);

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})

