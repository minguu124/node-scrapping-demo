import axios from "axios";

const Config = {
	name: "macys",
	productIdMarker: "ID=",
	categoryIdMarker: "CategoryID=",
	requestUrl: "https://www.macys.com/xapi/digital/v1/product/",
	separator: "&",
};

const onScrapping = (req, res) => {
	const url = req.body.body;

	if (!url) return;

	const productId = url.slice(
		url.indexOf(Config.productIdMarker) + Config.productIdMarker.length,
		url.indexOf(Config.separator) - 1
	);
	const categoryId = url.slice(
		url.indexOf(Config.categoryIdMarker) + Config.categoryIdMarker.length,
		url.length
	);

	const requestURL = Config.requestUrl + productId;

	axios({
		method: "get",
		url: requestURL,
		headers: { Accept: "*/*" },
		params: {
			CategoryID: categoryId,
		},
	})
		.then((response) => {
			console.log(JSON.stringify(response.data));
		})
		.catch((err) => {
			console.log(err);
		});
};

export default {
	onScrapping,
};
