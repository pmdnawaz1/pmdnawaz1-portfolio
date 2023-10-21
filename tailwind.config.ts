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
				'custom-green': '#38EF7D',
				'custom-blue': '#11998E',
			},
			backgroundImage: {
				'custom-gradient': 'linear-gradient(to bottom right, #FFECD2, #FCB69F)',
				'custom-card-gradient':
					'linear-gradient(to bottom right, #0f2027, #203a43, #2c5364)',
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
		},
	},
	plugins: [],
};
