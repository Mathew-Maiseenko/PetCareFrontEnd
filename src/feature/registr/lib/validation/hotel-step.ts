import { validateOptionalHotelCost } from '../parsers/cost'
import {
	collectFieldErrors,
	FieldsValidationResult,
	invalid,
	valid,
	ValidationResult,
} from './types'

export type HotelStepField = 'hotelName' | 'address' | 'cost'

export type HotelStepValues = {
	hotelName: string
	address: string
	cost: string
}

const validateHotelName = (hotelName: string): ValidationResult => {
	const trimmedName = hotelName.trim()

	if (!trimmedName) {
		return invalid('Введите название гостиницы')
	}

	if (trimmedName.length < 2) {
		return invalid('Название гостиницы должно содержать минимум 2 символа')
	}

	if (trimmedName.length > 100) {
		return invalid('Название гостиницы не должно превышать 100 символов')
	}

	if (!/[a-zA-Zа-яА-ЯёЁ]/.test(trimmedName)) {
		return invalid('Название гостиницы должно содержать буквы')
	}

	return valid()
}

const validateHotelAddress = (address: string): ValidationResult => {
	const trimmedAddress = address.trim()

	if (!trimmedAddress) {
		return invalid('Введите адрес гостиницы')
	}

	if (trimmedAddress.length < 10) {
		return invalid('Адрес должен содержать минимум 10 символов')
	}

	if (trimmedAddress.length > 200) {
		return invalid('Адрес не должен превышать 200 символов')
	}

	if (!/[a-zA-Zа-яА-ЯёЁ0-9]/.test(trimmedAddress)) {
		return invalid('Адрес содержит недопустимые символы')
	}

	return valid()
}

export const validateHotelStep = ({
	hotelName,
	address,
	cost,
}: HotelStepValues): FieldsValidationResult<HotelStepField> =>
	collectFieldErrors([
		['hotelName', validateHotelName(hotelName)],
		['address', validateHotelAddress(address)],
		['cost', validateOptionalHotelCost(cost)],
	])
