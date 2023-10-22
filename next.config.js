module.exports = {
	i18n: {
		locales: ['en-US', 'fr', 'nl-NL'],

		defaultLocale: 'en-US',

		domains: [
			{
				domain: 'pmdnawaz.vercel.app/',
				defaultLocale: 'en-US',
			},
			{
				domain: 'example.fr',
				defaultLocale: 'fr',

				http: true,
			},
		],
	},
};
