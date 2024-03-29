import express, { NextFunction, Request, Response } from "express";
import { request } from "http";
import routes from "./routes";
import helmet from "helmet";

const app = express();

app.use(helmet());          // Adds extra headers to run the application safely
app.use(express.json());    // middleware


// app.get("/", (req: Request, res: Response) => {
//   // return res.send("Hello world");
//   //   return res.json({
//   //     success: true,
//   //     name: "Jana"
//   //   });
//   return res.redirect("http://example.com");
// });

app
  .route("/")
  .get((req: Request, res: Response) => {
    return res.send("A GET req");
  })
  .post((req: Request, res: Response) => {
    return res.send("A POST req");
  })
  .put((req: Request, res: Response) => {
    return res.send("A PUT req");
  })
  .all((req: Request, res: Response) => {
    return res.send("An X req");
  });

const handleMovieApi1 = (req: Request, res: Response, next: NextFunction) => {
  console.log("handleMovieApi1");
  next();
};

const handleMovieApi2 = (req: Request, res: Response, next: NextFunction) => {
  console.log("handleMovieApi2");
  console.log(req.params);
  console.log(req.params.movieId);
  console.log(req.params.directorId);
  return res.send(req.params);
};

app.get("/api/movies/:movieId/:directorId", [handleMovieApi1, handleMovieApi2]);

app.post("/api/data", (req: Request, res: Response) => {
  console.log(req.body);
  return res.sendStatus(200);
});

app.all("/api/all", (req: Request, res: Response) => {
  return res.sendStatus(300);
});

const throwsErr = async () => {
  throw new Error("Boom!!"); // 500 Internal Server Err
};

app.get("/error", async (req, res) => {
  try {
    await throwsErr();
    res.status(200).send("All good");
  } catch (e) {
    res.status(400).send("Something bad happened!");
  }
});

routes(app);

app.listen(3000, () => {
  console.log("App listening at 3000");
});
