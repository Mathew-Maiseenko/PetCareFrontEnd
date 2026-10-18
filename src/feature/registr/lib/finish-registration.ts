import { getRoleHomeHref } from '@/shared/navigation/role-home'
import { router } from 'expo-router'
import { useFormContext } from 'react-hook-form'

import { userRolesData } from '../data'
import { completeRegistration } from './registration-form/build-payload'
import { RegistrationFormValues } from './registration-form/types'

export const useFinishRegistration = () => {
	const { getValues } = useFormContext<RegistrationFormValues>()

	return () => {
		const values = getValues()
		const role = userRolesData.find(
			item => item.id === values.selectedRoleId,
		)?.value

		if (!role) {
			return false
		}

		const user = completeRegistration(values, role)

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
