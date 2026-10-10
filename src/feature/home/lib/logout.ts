import { clearRegisteredUser } from '@/feature/registr/lib/storage/clear-registered-user'
import { useRegistrationStore } from '@/feature/registr/model'
import { router } from 'expo-router'

export const useLogout = () => {
	const resetAll = useRegistrationStore(state => state.resetAll)

	return () => {
		clearRegisteredUser()
		resetAll()
		router.replace('/')
	}
}
