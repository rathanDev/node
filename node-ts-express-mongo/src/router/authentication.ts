import express from "express";
import { login, register } from "../controllers/authentication";
import * as simple from "../controllers/simple";

// export default (router: express.Router) => {
//   router.post("/auth/register", simple.testSimpleApi);
// };

export default (router: express.Router) => {
  router.post("/auth/register", register);
  router.post("/auth/login", login);
};
