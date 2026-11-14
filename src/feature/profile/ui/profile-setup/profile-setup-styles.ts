import { StyleSheet } from 'react-native'

import { Colors, Fonts, Gaps } from '@/shared/styles'

export const profileSetupStyles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: Colors.backgroundPrimary,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: Gaps.four,
		paddingTop: Gaps.three,
		paddingBottom: Gaps.two,
	},
	headerSide: {
		width: 32,
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	headerBack: {
		padding: Gaps.one,
	},
	headerBackIcon: {
		transform: [{ rotate: '90deg' }],
	},
	headerCenter: {
		flex: 1,
		alignItems: 'center',
	},
	headerClose: {
		width: 32,
		alignItems: 'flex-end',
		padding: Gaps.one,
	},
	content: {
		flex: 1,
		paddingHorizontal: Gaps.four,
	},
	footer: {
		paddingHorizontal: Gaps.four,
		paddingBottom: Gaps.five,
		paddingTop: Gaps.two,
		gap: Gaps.two,
	},
	stepTitle: {
		fontSize: 36,
		color: Colors.textPrimary,
		fontFamily: Fonts.sansBold,
		marginBottom: Gaps.one,
	},
	stepSubtitle: {
		fontSize: 15,
		color: Colors.placeholder,
		fontFamily: Fonts.sans,
		marginBottom: Gaps.four,
	},
	chips: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: Gaps.two,
		marginBottom: Gaps.four,
	},
	sheetRoot: {
		flex: 1,
		paddingHorizontal: Gaps.four,
		paddingTop: Gaps.four,
	},
	sheetHeader: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: Gaps.four,
	},
	sheetTitle: {
		fontSize: 36,
		color: Colors.textPrimary,
		fontFamily: Fonts.sansBold,
		flex: 1,
	},
	sheetClose: {
		padding: Gaps.one,
	},
	sheetList: {
		flex: 1,
	},
	sheetListContent: {
		paddingBottom: Gaps.three,
		gap: Gaps.three,
	},
	sheetRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		gap: Gaps.three,
	},
	sheetRowLabel: {
		flex: 1,
		fontSize: 20,
		color: Colors.textPrimary,
		fontFamily: Fonts.sansBold,
	},
	sheetFooter: {
		paddingTop: Gaps.two,
		paddingBottom: Gaps.two,
	},
	descriptionStep: {
		flex: 1,
	},
	descriptionInput: {
		flex: 1,
		minHeight: 200,
		fontSize: 15,
		lineHeight: 22,
		color: Colors.textPrimary,
		fontFamily: Fonts.sans,
		padding: 0,
		borderWidth: 0,
	},
})
