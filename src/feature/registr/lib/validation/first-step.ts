import { UserCountry } from '@/entity/user/types'

import { validatePhone } from './phone'
import {
	collectFieldErrors,
	FieldsValidationResult,
	invalid,
	valid,
} from './types'

export type FirstStepField = 'role' | 'phone'

export type FirstStepValues = {
	selectedRoleId: number
	country: UserCountry
	phone: string
}

export const validateFirstStep = ({
	selectedRoleId,
	country,
	phone,
}: FirstStepValues): FieldsValidationResult<FirstStepField> =>
	collectFieldErrors([
		['role', selectedRoleId ? valid() : invalid('Выберите роль')],
		['phone', validatePhone(phone, country)],
	])
