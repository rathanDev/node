const express = require("express");
const UserRepo = require("./repositories/UserRepository");
const UserService = require("./services/UserService");
const UserController = require("./controllers/UserController");
const createUserRoutes = require("./routes/userRoutes");
// const errorHandler = require("./middlewares/errorHandler");

// const logger = require("./utils/logger");

const app = express();
// app.use(express.json());

const PORT = 3000;

const userRepo = new UserRepo();
const userService = new UserService(userRepo);
const userController = new UserController(userService);
const userRoutes = createUserRoutes(userController);

app.use("/users", userRoutes);
// app.use(errorHandler);

// logger.info("Prepare app");
module.exports = app;
