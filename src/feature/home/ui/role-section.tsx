import { Colors, Fonts, Gaps } from '@/shared/styles'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type RoleSectionScreenProps = {
	title: string
	section: string
}

export function RoleSectionScreen({ title, section }: RoleSectionScreenProps) {
	return (
		<SafeAreaView style={styles.main} edges={['top']}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.section}>{section}</Text>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		width: '100%',
		backgroundColor: Colors.backgroundPrimary,
		paddingHorizontal: Gaps.four,
		paddingTop: Gaps.four,
		alignItems: 'center',
		justifyContent: 'center',
		gap: Gaps.two,
	},
	title: {
		fontSize: 28,
		fontWeight: 700,
		color: Colors.textPrimary,
		fontFamily: Fonts.sans,
		textAlign: 'center',
	},
	section: {
		fontSize: 18,
		color: Colors.textSecondary,
		textAlign: 'center',
	},
})
