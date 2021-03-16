const withImages = require("next-images");
const { i18n } = require("./next-i18next.config");

module.exports = {
	i18n,
	sassOptions: {},
	...withImages({
		webpack(config, options) {
			return config;
		},
	}),
	env: {
		HASURA_ENDPOINT: "https://gql.fscch.ru/v1/graphql",
		HASURA_ADMIN_SECRET: "pass-hasura-fssch",
	},
};
