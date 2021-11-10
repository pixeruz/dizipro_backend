const { generateCrypt } = require("../modules/bcrypt");
const UserValidations = require("../validations/UserValidations");

module.exports = class UserController {
	static async UserCreateAccountPostController(req, res, next) {
		try {
			const data = await UserValidations.UserCreateAccountValidation(
				req.body,
				res.error
			);

			const user = await req.db.users.create(data);

			console.log(user);
		} catch (error) {
			if (error.message.startsWith("notNull Violation")) {
				error.code = 400;
				error.message = "Country is invalid";
			} else if (error.message.includes("Validation error")) {
				error.code = 400;
				error.message = "Email already exists";
			}

			next(error);
		}
	}
};
