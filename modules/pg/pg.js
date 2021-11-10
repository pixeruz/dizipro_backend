const { Sequelize } = require("sequelize");
const CountryModel = require("../../models/CountryModel");
const init = require("./init");
const { CustomError } = require("../../helpers/CustomError");
const UserModel = require("../../models/UserModel");
const Relations = require("../../models/Relations");
const UserSessionsModel = require("../../models/UserSessionsModel");

if (!process.env.PG_CONNECTION_URL) {
	throw new Error("PG CONNECTION STRING NOT FOUND");
}

const sequelize = new Sequelize(process.env.PG_CONNECTION_URL, {
	logging: false,
});

module.exports = async function pg() {
	try {
		await sequelize.authenticate();

		let db = {};

		db.countries = await CountryModel(sequelize, Sequelize);
		db.users = await UserModel(sequelize, Sequelize);
		db.sessions = await UserSessionsModel(sequelize, Sequelize);

		await Relations(db);

		await sequelize.sync({ force: false });

		// await init(db);

		return db;
	} catch (error) {
		console.log("SQL_ERROR:", error);
	}
};
