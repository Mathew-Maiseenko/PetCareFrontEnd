export const Colors = {
	textPrimary: '#000000',
	textSecondary: '#60646C',

	backgroundPrimary: '#ffffff',
	secondaryBackground: '#ffffff',

	placeholder: '#A8A8A8',
	borderPrimary: '#A8A8A8',
	buttonPrimary: '#FEBC46',
	buttonDisabled: '#FEBC4666',
} as const

export type ThemeColor = keyof typeof Colors
