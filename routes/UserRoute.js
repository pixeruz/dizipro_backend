const UserController = require("../controllers/UserController");

const UserRouter = require("express").Router();

UserRouter.post("/account", UserController.UserCreateAccountPostController);

module.exports = UserRouter;
