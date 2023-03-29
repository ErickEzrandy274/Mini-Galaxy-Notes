/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#6419E6",
					secondary: "#E53935",
					accent: "#1FB2A6",
					neutral: "#191D24",
					"base-100": "#2A303C",
					info: "#3ABFF8",
					success: "#36D399",
					warning: "#FBBD23",
					error: "#F87272",
				},
			},
		],
	},
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "sans-serif", ...defaultTheme.fontFamily.sans],
			},
			fontSize: {
				xs: "13px",
				sm: "14px",
			},
		},
	},
	plugins: [require("daisyui")],
};
