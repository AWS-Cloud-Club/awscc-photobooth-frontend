import { Lightbulb } from 'phosphor-svelte';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				awsccDark: {
					primary: '#471C6F',
					secondary: '#A989C7',
					accent: '#42467F',
					neutral: '#2C2A37',
					'base-100': '#101920',
					info: '#84A9C3',
					success: '#86DD5B',
					warning: '#DDD35B',
					error: '#DD5B5B'
				},
				awsccLight: {
					primary: '#471C6F',
					secondary: '#A989C7',
					accent: '#42467F',
					neutral: '#E0D5E7',
					'base-100': '#F7F4F9',
					info: '#84A9C3',
					success: '#86DD5B',
					warning: '#DDD35B',
					error: '#DD5B5B'
				}
			},
			'pastel',
			'night'
		]
	},
	plugins: [require('daisyui')]
};
