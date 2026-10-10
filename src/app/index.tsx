import { getRegisteredUser } from '@/feature/registr/lib/storage/get-registered-user'
import WelcomeScreen from '@/feature/welcome/ui'
import { getRoleHomeHref } from '@/shared/navigation/role-home'
import { Redirect } from 'expo-router'

export default function HomeScreen() {
	const user = getRegisteredUser()
	const roleHomeHref = user ? getRoleHomeHref(user.role) : null

	if (roleHomeHref) {
		return <Redirect href={roleHomeHref} />
	}

	return <WelcomeScreen />
}
