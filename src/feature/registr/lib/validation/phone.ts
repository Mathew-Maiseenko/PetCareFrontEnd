import { UserCountry } from '@/entity/user/types'

import { extractDigits } from './common'
import { invalid, valid, ValidationResult } from './types'

const BELARUS_PHONE_LENGTH = 12
const RUSSIA_PHONE_LENGTH = 11

export const validatePhone = (
	phone: string,
	country: UserCountry,
): ValidationResult => {
	const digits = extractDigits(phone)

	if (!digits) {
		return invalid('Введите номер телефона')
	}

	if (country === UserCountry.Belarus) {
		if (digits.length !== BELARUS_PHONE_LENGTH) {
			return invalid(
				'Номер Беларуси должен содержать 12 цифр (+375 XX XXX XX XX)',
			)
		}

		if (!digits.startsWith('375')) {
			return invalid('Номер Беларуси должен начинаться с +375')
		}

		return valid()
	}

	if (digits.length !== RUSSIA_PHONE_LENGTH) {
		return invalid('Номер России должен содержать 11 цифр (+7 XXX XXX XX XX)')
	}

	if (!digits.startsWith('7')) {
		return invalid('Номер России должен начинаться с +7')
	}

	return valid()
}
