console.log("Hellow NodeJs devs");

import express from "express";

const app = express();
app.use(express.json());        // middleware

app.get("/", (req, res) => {
  return res.send("Hello world");
});

app.post("/api/data", (req, res) => {
  console.log(req.body);
  return res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("App listening at 3000");
});
