import * as express from "express";
import { Request, Response } from "express";
import * as morgan from "morgan";
import * as moment from "moment";

const app = express();
app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {
    return res.json({
        timestamp: moment().format(),
    });
});

export default app;
