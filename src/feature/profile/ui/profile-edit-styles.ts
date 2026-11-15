import { StyleSheet } from 'react-native'

import { Colors, Fonts, Gaps } from '@/shared/styles'

import { PROFILE_AVATAR_SIZE } from './styles'

export const AVATAR_SIZE = PROFILE_AVATAR_SIZE

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
	},
	headerButtonLeft: {
		padding: Gaps.one,
		alignItems: 'flex-start',
	},
	headerButtonRight: {
		padding: Gaps.one,
		alignItems: 'flex-end',
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
		fontSize: 15,
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
		fontSize: 15,
		color: Colors.placeholder,
		fontFamily: Fonts.sans,
	},
	error: {
		color: 'red',
		fontSize: 15,
		fontFamily: Fonts.sans,
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
		fontSize: 20,
		color: Colors.textPrimary,
		fontFamily: Fonts.sansBold,
		marginBottom: Gaps.one,
	},
	sourceOption: {
		paddingVertical: Gaps.three,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: Colors.borderPrimary,
	},
	sourceOptionText: {
		fontSize: 15,
		color: Colors.textPrimary,
		fontFamily: Fonts.sans,
		textAlign: 'center',
	},
	sourceCancel: {
		paddingVertical: Gaps.three,
		marginTop: Gaps.one,
	},
	sourceCancelText: {
		fontSize: 15,
		color: Colors.placeholder,
		fontFamily: Fonts.sans,
		textAlign: 'center',
	},
})
