const express = require("express");

const createUserRoutes = (userController) => {
  const router = express.Router();
  router.get("/:id", userController.getUser);
  return router;
};

module.exports = createUserRoutes;
