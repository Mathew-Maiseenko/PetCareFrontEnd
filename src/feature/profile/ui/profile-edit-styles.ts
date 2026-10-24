import { StyleSheet } from 'react-native'

import { Colors, Fonts, Gaps } from '@/shared/styles'

export const AVATAR_SIZE = 120

export const profileEditStyles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: Colors.backgroundPrimary,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: Gaps.four,
		paddingVertical: Gaps.three,
	},
	headerButton: {
		padding: Gaps.one,
		minWidth: 40,
		alignItems: 'center',
	},
	scrollContent: {
		paddingHorizontal: Gaps.four,
		paddingBottom: Gaps.four,
		gap: Gaps.four,
	},
	avatarBlock: {
		alignItems: 'center',
		gap: Gaps.two,
		marginBottom: Gaps.two,
	},
	avatarPressable: {
		alignItems: 'center',
		gap: Gaps.two,
	},
	selectPhotoText: {
		fontSize: 16,
		color: Colors.iconAccent,
		fontFamily: Fonts.sans,
	},
	form: {},
	field: {
		gap: Gaps.one,
		width: '100%',
		marginBottom: Gaps.four,
	},
	label: {
		fontSize: 14,
		color: Colors.placeholder,
	},
	error: {
		color: 'red',
		fontSize: 12,
	},
	footer: {
		paddingHorizontal: Gaps.four,
		paddingBottom: Gaps.five,
		paddingTop: Gaps.two,
	},
	sourceOverlay: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.45)',
		justifyContent: 'flex-end',
	},
	sourceSheet: {
		backgroundColor: Colors.backgroundPrimary,
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16,
		paddingHorizontal: Gaps.four,
		paddingTop: Gaps.four,
		paddingBottom: Gaps.five,
		gap: Gaps.two,
	},
	sourceTitle: {
		fontSize: 18,
		fontWeight: '600',
		color: Colors.textPrimary,
		marginBottom: Gaps.one,
	},
	sourceOption: {
		paddingVertical: Gaps.three,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: Colors.borderPrimary,
	},
	sourceOptionText: {
		fontSize: 17,
		color: Colors.textPrimary,
		textAlign: 'center',
	},
	sourceCancel: {
		paddingVertical: Gaps.three,
		marginTop: Gaps.one,
	},
	sourceCancelText: {
		fontSize: 17,
		color: Colors.placeholder,
		textAlign: 'center',
	},
})
