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
				padding: "10px",
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
			9: "90px",
			10: "100px",
			10.5: "105px",
			11: "110px",
			12: "120px",
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
		fontFamily: {
			sans: ["Montserrat", "sans-serif"],
			serif: ["Montserrat", "sans-serif"],
		},
		colors: {
			"transparent": "transparent",
			"black": "rgba(0, 0, 0, 1)",
			"white": "rgba(255, 255, 255, 1)",
			"gray": "rgba(128, 128, 128, 1)",
			"gold": "rgba(212, 153, 103, 1)",
			"dark-blue": "rgba(32, 39, 74, 1)",
			"blue": "rgba(69, 137, 187, 1)",
		},
		fontSize: {
			"sm": ["10px", "12px"],
			"base": ["12px", "15px"],
			"md": ["20px", "28px"],
			"lg": ["24px", "32px"],
			"h3": ["18px", "22px"],
			"h3-md": ["24x", "24px"],
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
	],
};
