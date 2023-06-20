/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			fontFamily: { sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans] },
			colors: {
				primary: '#4475F2',
				textColor: {
					headline: '#14183E',
					subHeadline: '#18191F',
					hero: '#181E4B',
					paragraph: '#5E6282',
					smallText: '#9A9EA6',
					cardTitle: '#042521',
				},
			},
			boxShadow: {
				heroButton: '0px 20px 35px rgba(68, 117, 242, 0.21)',
				galeri:
					' 0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802)',
			},
		},
	},
	plugins: [],
};
