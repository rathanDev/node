const express = require("express");
// const UserController = require("../controllers/UserController");
// const router = express.router()

const createUserRoutes = (userController) => {
    const router = express.Router();
    router.get("/:id", userController.getUser);
    return router;
}

module.exports = createUserRoutes;