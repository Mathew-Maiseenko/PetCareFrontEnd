import { StyleSheet } from 'react-native'

import { Colors, Fonts, Gaps } from '@/shared/styles'

export const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: Colors.backgroundGrouped,
	},
	topBlock: {
		backgroundColor: Colors.backgroundPrimary,
		paddingHorizontal: Gaps.four,
		paddingBottom: Gaps.four,
		gap: Gaps.four,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	title: {
		fontSize: 34,
		fontWeight: 700,
		color: Colors.textPrimary,
		fontFamily: Fonts.sans,
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
		gap: Gaps.one,
	},
	name: {
		fontSize: 36,
		fontWeight: 700,
		color: Colors.textPrimary,
		fontFamily: Fonts.sans,
	},
	role: {
		fontSize: 15,
		color: Colors.placeholder,
	},
	phoneLabel: {
		fontSize: 14,
		color: Colors.placeholder,
	},
	phoneValue: {
		fontSize: 20,
		color: Colors.textPrimary,
		marginTop: Gaps.one,
	},
	card: {
		backgroundColor: Colors.backgroundPrimary,
		paddingHorizontal: Gaps.four,
		paddingVertical: Gaps.four,
		marginTop: Gaps.two,
		gap: Gaps.two,
	},
	cardTitle: {
		fontSize: 20,
		fontWeight: 700,
		color: Colors.textPrimary,
		fontFamily: Fonts.sans,
	},
	ratingTitleRow: {
		flexDirection: 'row',
		alignItems: 'baseline',
		gap: Gaps.two,
	},
	description: {
		fontSize: 16,
		lineHeight: 22,
		color: Colors.textPrimary,
	},
	moreLink: {
		fontSize: 16,
		color: Colors.link,
	},
	stars: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,
	},
	reviews: {
		fontSize: 14,
		color: Colors.placeholder,
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
		fontSize: 28,
		fontWeight: 700,
		color: Colors.textPrimary,
		fontFamily: Fonts.sans,
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
		fontWeight: 700,
		color: Colors.textPrimary,
		fontFamily: Fonts.sans,
	},
	detailsRow: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		gap: Gaps.three,
	},
	detailsLabel: {
		flex: 1,
		fontSize: 16,
		color: Colors.placeholder,
	},
	detailsValue: {
		flex: 1.2,
		fontSize: 16,
		color: Colors.textPrimary,
	},
	detailsDescription: {
		fontSize: 16,
		lineHeight: 24,
		color: Colors.textPrimary,
	},
})
