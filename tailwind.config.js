const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
	purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				primary: colors.indigo,
			},
			container: {
				center: true,
				padding: {
					"default": "1rem",
					"md": "2rem",
				},
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
	],
};
