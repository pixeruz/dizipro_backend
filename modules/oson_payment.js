require("dotenv").config();
const axios = require("axios").default;

class OSON_API {
	constructor(API_KEY) {
		this.API_KEY = API_KEY;
	}

	async createInvoice(
		transaction_id,
		amount,
		currency,
		user_email,
		comment,
		return_url,
		lifetime,
		language
	) {
		let response = await axios({
			url: "https://api.oson.uz/api/invoice/create",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				token: this.API_KEY,
			},
			method: "POST",
			data: {
				merchant_id: 1474,
				transaction_id,
				amount,
				currency,
				user_account: user_email,
				comment,
				return_url,
				lifetime,
				language,
			},
		});

		return response;
	}
}

async function test() {
	const oson = new OSON_API(process.env.OSON_AUTH_TOKEN);

	let x = await oson.createInvoice(
		"112",
		"2000",
		"UZS",
		"muhammadyunusuz@yandex.com",
		"Test uchun",
		"https://muhammadyunus.uz",
		30,
		"en"
	);

	x = await x.data;

	console.log(x);
}

test();
