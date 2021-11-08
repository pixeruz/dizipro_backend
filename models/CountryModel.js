module.exports = async (sequelize, Sequelize, Joi, CustomError) => {
	return await sequelize.define("countries", {
		country_id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		country_name: {
			type: Sequelize.STRING,
			allowNull: false,
			schema: Joi.string()
				.min(4)
				.required()
				.error(new CustomError(400, "Name is invalid")),
		},
		country_code: {
			type: Sequelize.STRING,
			allowNull: false,
			schema: Joi.string()
				.required()
				.error(new CustomError(400, "Code is invalid")),
		},
	});
};
