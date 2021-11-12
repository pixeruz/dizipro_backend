const { Sequelize } = require("sequelize");
const CountryModel = require("../../models/CountryModel");
const init = require("./init");
const { CustomError } = require("../../helpers/CustomError");
const UserModel = require("../../models/UserModel");
const Relations = require("../../models/Relations");
const UserSessionsModel = require("../../models/UserSessionsModel");
const EmailAttempts = require("../../models/EmailAttempts");
const BanModel = require("../../models/BanModel");

if (!process.env.PG_CONNECTION_URL) {
	throw new Error("PG CONNECTION STRING NOT FOUND");
}

const sequelize = new Sequelize(process.env.PG_CONNECTION_URL, {
	logging: true,
});

module.exports = async function pg() {
	try {
		await sequelize.authenticate();

		let db = {};

		db.countries = await CountryModel(sequelize, Sequelize);
		db.users = await UserModel(sequelize, Sequelize);
		db.sessions = await UserSessionsModel(sequelize, Sequelize);
		db.attempts = await EmailAttempts(sequelize, Sequelize);
		db.user_bans = await BanModel(sequelize, Sequelize);

		await Relations(db);

		// await sequelize.sync({ force: true });

		// await init(db);

		return db;
	} catch (error) {
		console.log("SQL_ERROR:", error);
	}
};
