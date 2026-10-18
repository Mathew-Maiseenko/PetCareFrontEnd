import { StyleSheet } from 'react-native'

import { Colors } from '@/shared/styles'

export const styles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	overlayPressable: {
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
	},
	overlay: {
		flex: 1,
		backgroundColor: Colors.textPrimary,
	},
	sheet: {
		width: '100%',
		backgroundColor: Colors.backgroundPrimary,
		borderTopLeftRadius: 24,
		borderTopRightRadius: 24,
		overflow: 'hidden',
		flexDirection: 'column',
	},
})
