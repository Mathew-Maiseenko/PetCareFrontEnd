import { StyleSheet } from 'react-native'

import { Colors, Fonts, Gaps } from '@/shared/styles'

export const PROFILE_AVATAR_SIZE = 162
export const PROFILE_CARD_RADIUS = 15
export const PROFILE_CARD_GAP = 10

export const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: Colors.backgroundPrimary,
	},
	scrollView: {
		backgroundColor: Colors.backgroundGrouped,
	},
	topBlock: {
		backgroundColor: Colors.backgroundPrimary,
		paddingHorizontal: Gaps.four,
		paddingBottom: Gaps.four,
		gap: Gaps.four,
		marginBottom: PROFILE_CARD_GAP,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	title: {
		fontSize: 36,
		color: Colors.textPrimary,
		fontFamily: Fonts.sansBold,
	},
	headerActions: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: Gaps.three,
	},
	headerButton: {
		padding: Gaps.one,
	},
	identity: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: Gaps.four,
	},
	identityText: {
		flex: 1,
		alignItems: 'flex-end',
		gap: Gaps.one,
	},
	name: {
		fontSize: 36,
		color: Colors.textPrimary,
		fontFamily: Fonts.sansBold,
		textAlign: 'right',
	},
	role: {
		fontSize: 15,
		color: Colors.placeholder,
		fontFamily: Fonts.sans,
		textAlign: 'right',
	},
	phoneLabel: {
		fontSize: 15,
		color: Colors.placeholder,
		fontFamily: Fonts.sans,
	},
	phoneValue: {
		fontSize: 20,
		color: Colors.textPrimary,
		fontFamily: Fonts.sansBold,
		marginTop: Gaps.one,
	},
	cardsSection: {
		gap: PROFILE_CARD_GAP,
		paddingBottom: Gaps.four,
	},
	card: {
		width: '100%',
		backgroundColor: Colors.backgroundPrimary,
		paddingHorizontal: Gaps.four,
		paddingVertical: 15,
		borderRadius: PROFILE_CARD_RADIUS,
		gap: Gaps.two,
	},
	cardTitle: {
		fontSize: 20,
		color: Colors.textPrimary,
		fontFamily: Fonts.sansBold,
	},
	ratingTitleRow: {
		flexDirection: 'row',
		alignItems: 'baseline',
		gap: Gaps.two,
	},
	description: {
		fontSize: 15,
		lineHeight: 22,
		color: Colors.textPrimary,
		fontFamily: Fonts.sans,
	},
	moreLink: {
		fontSize: 15,
		color: Colors.link,
		fontFamily: Fonts.sans,
	},
	stars: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,
	},
	reviews: {
		fontSize: 15,
		color: Colors.placeholder,
		fontFamily: Fonts.sans,
	},
	detailsSheet: {
		flex: 1,
	},
	detailsHeader: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: Gaps.four,
		paddingTop: Gaps.four,
		paddingBottom: Gaps.three,
	},
	detailsTitle: {
		fontSize: 36,
		color: Colors.textPrimary,
		fontFamily: Fonts.sansBold,
	},
	detailsScroll: {
		flex: 1,
	},
	detailsContent: {
		paddingHorizontal: Gaps.four,
		paddingBottom: Gaps.four,
		gap: Gaps.five,
	},
	detailsSection: {
		gap: Gaps.three,
	},
	detailsSectionTitle: {
		fontSize: 20,
		color: Colors.textPrimary,
		fontFamily: Fonts.sansBold,
	},
	detailsRow: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		gap: Gaps.three,
	},
	detailsLabel: {
		flex: 1,
		fontSize: 15,
		color: Colors.placeholder,
		fontFamily: Fonts.sans,
	},
	detailsValue: {
		flex: 1.2,
		fontSize: 15,
		color: Colors.textPrimary,
		fontFamily: Fonts.sans,
	},
	detailsDescription: {
		fontSize: 15,
		lineHeight: 24,
		color: Colors.textPrimary,
		fontFamily: Fonts.sans,
	},
})
