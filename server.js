require("dotenv").config();
const express = require("express");
const { databaseMiddleware } = require("./middlewares/databaseMiddleware");
const Routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 8080;

async function server() {
	try {
		app.listen(PORT, () => console.log(`SERVER READY AT ${PORT}`));
		app.use(express.json());
		app.use(express.urlencoded({ extended: true }));
		app.use(databaseMiddleware);
		app.use("/v1", Routes);
	} catch (error) {
		console.log("SERVER_ERROR:", error);
	}
}

server();
