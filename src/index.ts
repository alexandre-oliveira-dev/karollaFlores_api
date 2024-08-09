import express, {NextFunction, Request, Response} from "express";
import routes from "./router/router";
import cors from "cors";
import "express-async-errors";


export const service = express();
service.use(cors({origin: "*"}));
service.use((req: Request, res: Response, next: NextFunction) => {
  express.json()(req, res, next);
});
service.use(routes);
service.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal server error.",
  });
});

service.get("/", (req: Request, res: Response) => {
  return res.json({message: "ok"});
});

service.listen(5000, () => console.log("api online"));
