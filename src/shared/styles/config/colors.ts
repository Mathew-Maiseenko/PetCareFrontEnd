export const Colors = {
	textPrimary: '#000000',
	textSecondary: '#60646C',

	backgroundPrimary: '#ffffff',
	secondaryBackground: '#ffffff',

	placeholder: '#A8A8A8',
	borderPrimary: '#A8A8A8',
	buttonPrimary: '#FEBC46',
	buttonSecondary: '#F2F2F2',
	buttonDisabled: '#FEBC4666',

	icon: '#9D9D9D',
	iconAccent: '#DD991E',
} as const

export type ThemeColor = keyof typeof Colors
