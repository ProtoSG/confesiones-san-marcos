/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary : '#f9f25e',
				secundary: '#ED2B2B',
				dark: '#222222'
			}
		},
	},
	plugins: [],
}
