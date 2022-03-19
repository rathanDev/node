import express, { NextFunction, Request, Response } from "express";
import routes from "./routes";
// import helmet from "helmet";

const app = express();
app.use(express.json());

const middleware =
  ({ name }: { name: string }) =>
  (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    req.name = name;
    next();
  };

app.use(middleware({ name: "IDoTech" }));

function handGetBookOne(req: Request, res: Response, next: NextFunction) {
  console.log(req.params);
  next();
}

function handleGetBookTwo(req: Request, res: Response, next: NextFunction) {
  console.log("2nd handler");
  return res.send(req.params);
}

app.get("/api/books/:bookId/:authorId", [handGetBookOne, handleGetBookTwo]);

app
  .route("/")
  .get((req: Request, res: Response) => {
    return res.send("You make a GET req");
  })
  .post((req: Request, res: Response) => {
    return res.send("You make a POST req");
  })
  .put((req: Request, res: Response) => {
    return res.send("A PUT req");
  })
  .all((req: Request, res: Response) => {
    return res.send("You make a X req");
  });

app.get("/", (req, res) => {
  //   return res.json({
  //     success: true,
  //     name: "IDoTech"
  //   });
  console.log("Redirecting");
  return res.redirect("https://google.com");
});

app.post("/api/data", (req: Request, res: Response) => {
  console.dir(req.body);
  return res.sendStatus(200);
});

app.all("/api/all", (req, res) => {
  return res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("App listening");
});

console.log("Hello express");
