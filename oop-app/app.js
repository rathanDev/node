const express = require("express");
const UserService = require("./services/userService");
const UserController = require("./controllers/UserController");
const createUserRoutes = require("./routes/userRoutes");

const app = express();

const PORT = 3000;

const userService = new UserService();
const userController = new UserController(userService);
const userRoutes = createUserRoutes(userController);

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
