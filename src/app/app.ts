import cors from "cors";
import express, { Application, Request, Response } from "express";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/v1/cars");

const globalController = (req: Request, res: Response) => {
  res.send("This is global controller");
};

app.get("/", globalController);

export default app;
