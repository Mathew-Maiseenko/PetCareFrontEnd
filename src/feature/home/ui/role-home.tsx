import { UserRole } from '@/entity/user/types'
import { getRegisteredUser } from '@/feature/registr/lib/storage/get-registered-user'
import { Colors, Fonts, Gaps } from '@/shared/styles'
import { StyledButton } from '@/shared/ui/Button'
import Logo from '@/shared/ui/Logo'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useLogout } from '../lib/logout'

type RoleHomeScreenProps = {
	role: UserRole.PET_OWNER | UserRole.PET_NURSE | UserRole.PET_HOTEL
	title: string
}

const getGreetingName = (role: RoleHomeScreenProps['role']) => {
	const user = getRegisteredUser()

	if (!user || user.role !== role) {
		return null
	}

	if (user.role === UserRole.PET_HOTEL) {
		return user.hotelName
	}

	return user.name
}

export function RoleHomeScreen({ role, title }: RoleHomeScreenProps) {
	const name = getGreetingName(role)
	const logout = useLogout()

	return (
		<SafeAreaView style={styles.main}>
			<View style={styles.content}>
				<Logo />
				<Text style={styles.title}>{title}</Text>
				{name ? <Text style={styles.subtitle}>Привет, {name}</Text> : null}
			</View>
			<StyledButton full onPress={logout}>
				Выйти из профиля
			</StyledButton>
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
		gap: Gaps.three,
	},
	title: {
		fontSize: 28,
		fontWeight: 700,
		color: Colors.textPrimary,
		fontFamily: Fonts.sans,
		textAlign: 'center',
	},
	subtitle: {
		fontSize: 18,
		color: Colors.textSecondary,
		textAlign: 'center',
	},
})
