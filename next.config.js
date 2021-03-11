const withImages = require("next-images");
const { i18n } = require("./next-i18next.config");

module.exports = {
	i18n,
	sassOptions: {},
	...withImages({
		webpack(config, options) {
			return config;
		},
	})
};
