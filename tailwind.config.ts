module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			animation: {
				'meteor-effect': 'meteor 5s linear infinite',
			},
			backgroundColor: {
				'custom-gradient': 'linear-gradient(to bottom right, #EE9CA7, #FFDDE1)',
			},
			keyframes: {
				meteor: {
					'0%': { transform: 'rotate(215deg) translateX(0)', opacity: 1 },
					'70%': { opacity: 1 },
					'100%': {
						transform: 'rotate(215deg) translateX(-500px)',
						opacity: 0,
					},
				},
			},
			backgroundColor: {
				'custom-gradient': 'linear-gradient(to bottom right, #EE9CA7, #FFDDE1)',
			},
		},
	},
	plugins: [],
};
