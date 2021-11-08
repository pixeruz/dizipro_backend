module.exports = class UserController {
	static async UserCreateAccountPostController(req, res, next) {
		try {
			// const user = await req.db.users.create
		} catch (error) {
			next(error);
		}
	}
};
