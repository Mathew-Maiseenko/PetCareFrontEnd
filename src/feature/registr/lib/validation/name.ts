import { MAX_NAME_LENGTH, MIN_NAME_LENGTH, NAME_PATTERN } from './common'
import { invalid, valid, ValidationResult } from './types'

export const validateName = (name: string): ValidationResult => {
	const trimmed = name.trim()

	if (!trimmed) {
		return invalid('Введите имя')
	}

	if (trimmed.length < MIN_NAME_LENGTH) {
		return invalid(`Имя должно содержать минимум ${MIN_NAME_LENGTH} символа`)
	}

	if (trimmed.length > MAX_NAME_LENGTH) {
		return invalid(`Имя не должно превышать ${MAX_NAME_LENGTH} символов`)
	}

	if (!NAME_PATTERN.test(trimmed)) {
		return invalid('Имя может содержать только буквы, пробелы и дефисы')
	}

	return valid()
}
