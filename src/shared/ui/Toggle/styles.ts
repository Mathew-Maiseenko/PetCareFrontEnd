import { StyleSheet } from 'react-native'
import { Fonts } from '@/shared/styles'

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	labelRow: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	label: {
		fontSize: 18,
		fontFamily: Fonts.sans,
		lineHeight: 26,
	},
})
