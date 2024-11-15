/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				indigo: {
					50: '#E0E8F9',
					100: '#BED0F7',
					200: '#98AEEB',
					300: '#7B93DB',
					400: '#647ACB',
					500: '#4C63B6',
					600: '#4055A8',
					700: '#35469C',
					800: '#2D3A8C',
					900: '#19216C'
				},
				orange: {
					50: '#FFE8D9',
					100: '#FFD0B5',
					200: '#FFB088',
					300: '#FF9466',
					400: '#F9703E',
					500: '#F35627',
					600: '#DE3A11',
					700: '#C52707',
					800: '#AD1D07',
					900: '#841003'
				},
				gray: {
					50: '#F5F7FA',
					100: '#E4E7EB',
					200: '#CBD2D9',
					300: '#9AA5B1',
					400: '#7B8794',
					500: '#616E7C',
					600: '#52606D',
					700: '#3E4C59',
					800: '#323F4B',
					900: '#1F2933'
				}
			}
		}
	},
	plugins: []
}
