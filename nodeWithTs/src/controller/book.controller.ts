import { Request, Response, NextFunction } from "express";

const getBookHandler = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.params);
  console.log(req.params.bookId);
  console.log(req.params.authorId);
  return res.send(req.params);
};

export default getBookHandler;
