const { HomeGetController } = require("../controllers/HomeController");

const HomeRouter = require("express").Router();

HomeRouter.get("/", HomeGetController);

module.exports = HomeRouter;
