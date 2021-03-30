const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
	purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
	theme: {
		borderColor: theme => ({
			...theme("colors"),
			main: "#D49967",
		}),
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
		screens: {
			md: "768px",
			lg: "1440px",
		},
		spacing: {
			px: "1px",
			0: "0",
			0.5: "5px",
			1: "10px",
			1.5: "15px",
			2: "20px",
			2.5: "25px",
			3: "30px",
			3.5: "35px",
			4: "40px",
			5: "50px",
			6: "60px",
			7: "70px",
			8: "80px",
			9: "2.25rem",
			10: "2.5rem",
			11: "2.75rem",
			12: "3rem",
			14: "3.5rem",
			16: "4rem",
			20: "5rem",
			24: "6rem",
			28: "7rem",
			32: "8rem",
			36: "9rem",
			40: "10rem",
			44: "11rem",
			48: "12rem",
			52: "13rem",
			56: "14rem",
			60: "15rem",
			64: "16rem",
			72: "18rem",
			80: "20rem",
			96: "24rem",
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
	],
};
