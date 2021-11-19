const PaymentController = require("../controllers/PaymentController");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

const PaymentRouter = require("express").Router();

PaymentRouter.use(AuthMiddleware);

PaymentRouter.post(
	"/:project_id",
	PaymentController.PaymentCreatePostController
);

module.exports = PaymentRouter;
