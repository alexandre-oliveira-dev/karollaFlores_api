import express, {NextFunction, Request, Response} from "express";
import routes from "./router/router";
import cors from "cors";

export const service = express();
export function App() {
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

  service.listen(process.env.PORT, () => console.log("api online"));
}
App();
