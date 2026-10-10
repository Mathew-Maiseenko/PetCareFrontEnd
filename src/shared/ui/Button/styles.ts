import { StyleSheet } from 'react-native'

import { Colors } from '@/shared/styles'

export const styles = StyleSheet.create({
	button: {
		backgroundColor: Colors.buttonPrimary,
		padding: 12,
		borderRadius: 15,
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
		fontWeight: 700,
		fontSize: 20,
		textAlign: 'center',
	},
	textDisabled: {
		color: Colors.textSecondary,
	},
})
