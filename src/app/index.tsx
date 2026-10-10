import { getRegisteredUser } from '@/feature/registr/lib/storage/get-registered-user'
import RegistrationScreen from '@/feature/registr/ui'
import { getRoleHomeHref } from '@/shared/navigation/role-home'
import { Redirect } from 'expo-router'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
	const user = getRegisteredUser()
	const roleHomeHref = user ? getRoleHomeHref(user.role) : null

	if (roleHomeHref) {
		return <Redirect href={roleHomeHref} />
	}

	return (
		<SafeAreaView style={styles.main}>
			<RegistrationScreen />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	main: {
		paddingHorizontal: 24,
		paddingTop: 24,
		paddingBottom: 56,
		flex: 1,
		width: '100%',
		justifyContent: 'flex-start',
	},
})
