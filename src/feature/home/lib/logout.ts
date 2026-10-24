import { clearRegisteredUser } from '@/feature/registr/lib/storage/clear-registered-user'
import { router } from 'expo-router'

/** Clears registered profile session (USER_DATA, IS_REGISTERED). LOGIN_DRAFT is kept. */
export const useLogout = () => {
	return () => {
		clearRegisteredUser()
		router.replace('/')
	}
}
