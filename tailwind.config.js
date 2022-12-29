module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontSize: {
			xs: '0.75rem',
			sm: '0.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
		},
		extend: {
			colors: {
				primary: {
					100: '#E6F6FE',
					200: '#D9EDDF',
					300: '#CDFBE4',
					400: '#31C48D',
					500: '#00AC95',
					600: '#009293',
					700: '#007988',
					800: '#206073',
					900: '#2F4858',
				},
				gray: {
					100: '#f7fafc',
					200: '#edf2f7',
					300: '#e2e8f0',
					400: '#cbd5e0',
					500: '#a0aec0',
					600: '#718096',
					700: '#4a5568',
					800: '#2d3748',
					900: '#1a202c',
				},
			},
			lineHeight: {
				hero: '4.5rem',
			},
			fontFamily: {
				bellota: ['Bellota', 'sans-cursive'],
			},
		},
	},
	plugins: [],
};
