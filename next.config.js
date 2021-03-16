const withImages = require("next-images");
const { i18n } = require("./next-i18next.config");

module.exports = {
	i18n,
	sassOptions: {},
	...withImages({
		webpack(config, options) {
			config.module.rules.push({
				test: /\.(graphql|gql)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'graphql-tag/loader'
					}
				]
			})
			return config;
		},
	}),
	env: {
		HASURA_ENDPOINT: "https://gql.fscch.ru/v1/graphql",
		HASURA_ADMIN_SECRET: "pass-hasura-fssch",
	},
};
