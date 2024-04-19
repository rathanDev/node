import express from "express";
// import { register } from "../controllers/authentication";
// import test from '../controllers/simple';

export default (router: express.Router) => {
  router.post(
    "/auth/register",
    (req: express.Request, res: express.Response) => {
      res.status(200).send("OneAtATime");
    }
  );
};
