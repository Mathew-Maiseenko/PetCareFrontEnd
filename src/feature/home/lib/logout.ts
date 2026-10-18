import { clearRegisteredUser } from '@/feature/registr/lib/storage/clear-registered-user'
import { router } from 'expo-router'

export const useLogout = () => {
	return () => {
		clearRegisteredUser()
		router.replace('/')
	}
}
