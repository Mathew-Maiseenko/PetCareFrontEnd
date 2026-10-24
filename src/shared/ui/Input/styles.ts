import { StyleSheet } from 'react-native'

import { Colors } from '@/shared/styles'

export const styles = StyleSheet.create({
	inputContainer: {
		width: '100%',
		position: 'relative',
		borderColor: Colors.borderPrimary,
		borderWidth: 1,
		borderRadius: 10,
		overflow: 'hidden',
		backgroundColor: Colors.secondaryBackground,
	},
	input: {
		color: Colors.textPrimary,
		backgroundColor: 'transparent',
		width: '100%',
		height: 55,
		fontSize: 18,
		paddingLeft: 20,
		paddingRight: 20,
	},

	rightMenu: {
		position: 'absolute',
		top: 0,
		right: 15,
		justifyContent: 'center',
		height: '100%',
	},
})
