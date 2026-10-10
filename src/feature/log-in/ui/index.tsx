import { StyledButton } from '@/shared/ui/Button'
import { StyledInput } from '@/shared/ui/Input'
import Logo from '@/shared/ui/Logo'
import { router } from 'expo-router'
import { StyleSheet, View } from 'react-native'

import { StepBackButton } from '@/shared/ui/StepBackButton'

export default function LogInScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<StepBackButton onPress={() => router.replace('/')} />
			</View>
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
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'column',
	},
	header: {
		width: '100%',
		minHeight: 32,
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
})
