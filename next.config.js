const withImages = require("next-images");
const { i18n } = require("./next-i18next.config");

module.exports = {
	i18n,
	sassOptions: {},
	...withImages({
		webpack(config) {
			config.module.rules.push({
				test: /\.(graphql|gql)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "graphql-tag/loader",
					},
				],
			});

			return config;
		},
	}),
	env: {
		HASURA_ENDPOINT: process.env.NEXT_PUBLIC_HASURA_ENDPOINT,
		HASURA_ADMIN_SECRET: process.env.NEXT_PUBLIC_HASURA_SECRET,
	},
};
