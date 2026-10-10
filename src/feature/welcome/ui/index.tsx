import { Colors, Fonts, Gaps } from '@/shared/styles'
import { StyledButton } from '@/shared/ui/Button'
import Logo from '@/shared/ui/Logo'
import { router } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function WelcomeScreen() {
	return (
		<SafeAreaView style={styles.main}>
			<View style={styles.content}>
				<Logo />
				<Text style={styles.title}>
					Найдите няню{'\n'}для вашего{'\n'}питомца
				</Text>
			</View>
			<View style={styles.actions}>
				<StyledButton full onPress={() => router.push('/register')}>
					Зарегистрироваться
				</StyledButton>
				<StyledButton
					full
					variant='secondary'
					onPress={() => router.push('/login')}
				>
					Войти
				</StyledButton>
			</View>
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
		paddingBottom: 56,
		justifyContent: 'space-between',
	},
	content: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		gap: Gaps.four,
	},
	title: {
		fontSize: 32,
		lineHeight: 40,
		fontWeight: 700,
		color: Colors.textPrimary,
		fontFamily: Fonts.sans,
		textAlign: 'center',
	},
	actions: {
		width: '100%',
		gap: Gaps.three,
	},
})
