module.exports = async (sequelize, Sequelize, Joi, CustomError) => {
	return await sequelize.define("users", {
		user_id: {
			type: Sequelize.UUID,
			defaultValue: Sequelize.UUIDV4(),
			primaryKey: true,
		},
		user_name: {
			type: Sequelize.STRING,
			allowNull: false,
			schema: Joi.string()
				.min(2)
				.max(64)
				.required()
				.error(new CustomError(400, "Name is invalid")),
		},
		user_email: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
			schema: Joi.string()
				.email()
				.required()
				.lowercase()
				.error(new CustomError(400, "Email is invalid")),
		},
		user_gender: {
			type: Sequelize.ENUM,
			values: ["male", "female"],
			allowNull: false,
			schema: Joi.string()
				.valid("male", "female")
				.required()
				.error(new CustomError(400, "Gender is invalid")),
		},
		user_password: {
			type: Sequelize.STRING,
			allowNull: false,
			schema: Joi.string()
				.required()
				.min(4)
				.error(new CustomError(400, "Password is invalid")),
		},
	});
};
