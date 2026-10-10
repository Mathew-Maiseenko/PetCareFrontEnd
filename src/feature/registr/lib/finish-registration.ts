import { getRoleHomeHref } from '@/shared/navigation/role-home'
import { router } from 'expo-router'

import { useRegistrationStore } from '../model'

export const useFinishRegistration = () => {
	const completeRegistration = useRegistrationStore(
		state => state.completeRegistration,
	)

	return () => {
		const user = completeRegistration()

		if (!user) {
			return false
		}

		const href = getRoleHomeHref(user.role)

		if (href) {
			router.replace(href)
		}

		return true
	}
}
