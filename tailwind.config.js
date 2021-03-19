const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
	purge: ["./components/**/*.js", "./pages/**/*.js"],
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
		flex: {
			1: "1 1 0%",
			auto: "1 1 auto",
			initial: "0 1 auto",
			none: "none",
			2: "1 1 33%",
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
	],
};
