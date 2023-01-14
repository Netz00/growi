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
				brands: {
					primary: {
						100: '#B0C5B0',
						200: '#8BB4A6',
						300: '#67A1A1',
						400: '#498D9F',
						500: '#3D7799',
						600: '#455E8C',
					},
				},
				creators: {
					primary: {
						100: '#EB7F57',
						200: '#D76777',
						300: '#AC5F8C',
						400: '#765C8C',
						500: '#475578',
						600: '#2F4858',
					},
				},
			},
			lineHeight: {
				hero: '4.5rem',
			},
			fontFamily: {
				bellota: ['Bellota', 'sans-cursive'],
			},
			backgroundImage: () => ({
				'gradient-instagram':
					'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
			}),
		},
	},
	plugins: [],
};
