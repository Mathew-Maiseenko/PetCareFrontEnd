import { StyleSheet } from 'react-native'

import { Colors, Fonts } from '@/shared/styles'

export const styles = StyleSheet.create({
	button: {
		backgroundColor: Colors.buttonPrimary,
		padding: 12,
		borderRadius: 15,
	},
	buttonSecondary: {
		backgroundColor: Colors.buttonSecondary,
	},
	buttonFull: {
		width: '100%',
	},
	buttonPressed: {
		opacity: 0.4,
	},
	buttonDisabled: {
		backgroundColor: Colors.buttonDisabled,
	},
	text: {
		color: Colors.textPrimary,
		fontFamily: Fonts.sansBold,
		fontSize: 20,
		textAlign: 'center',
	},
	textDisabled: {
		color: Colors.textSecondary,
	},
})
