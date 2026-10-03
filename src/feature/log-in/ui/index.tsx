import { StyledButton } from '@/shared/ui/Button'
import { StyledInput } from '@/shared/ui/Input'
import Logo from '@/shared/ui/Logo'
import { StyleSheet, View } from 'react-native'

export default function LogInScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.form}>
				<Logo />

				<StyledInput placeholder='Имя пользователя' />
				<StyledInput placeholder='Пароль' password />
			</View>
			<StyledButton full>Войти</StyledButton>
		</View>
	)
}

const styles = StyleSheet.create({
	form: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'column',
		gap: 24,
		flex: 1,
	},

	container: {
		width: '100%',
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'column',
	},
})
