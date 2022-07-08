import express, { Request, Response } from "express";

const app = express();
app.use(express.json()); // middleware

app.get("/", (req: Request, res: Response) => {
  // return res.send("Hello world");
  //   return res.json({
  //     success: true,
  //     name: "Jana"
  //   });
  return res.redirect("http://example.com");
});

app.post("/api/data", (req: Request, res: Response) => {
  console.log(req.body);
  return res.sendStatus(200);
});

app.all("/api/all", (req: Request, res: Response) => {
  return res.sendStatus(300);
});

app.listen(3000, () => {
  console.log("App listening at 3000");
});
