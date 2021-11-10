const Router = require("express").Router();

const CountyRouter = require("./CountryRoute");
const HomeRouter = require("./HomeRoute");
const UserRouter = require("./UserRoute");

Router.use("/countries", CountyRouter);
Router.use("/users", UserRouter);
Router.use("/", HomeRouter);

module.exports = Router;
