import { Express, Request, Response, NextFunction } from "express";
import getBookHandler from "./controller/book.controller";

const routes = (app: Express) => {
  app.get("/api/books/:bookId/:authorId", getBookHandler);
};

export default routes;
