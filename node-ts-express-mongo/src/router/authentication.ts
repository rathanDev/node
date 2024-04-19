import express from "express";
// import { register } from "../controllers/authentication";
import * as simple from "../controllers/simple";

export default (router: express.Router) => {
  router.post("/auth/register", simple.testSimpleApi);
};
