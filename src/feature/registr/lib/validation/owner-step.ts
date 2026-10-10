import { petBreeds } from '@/feature/registr/data'

import { validatePetAge } from '../parsers/age'
import { PET_TYPE_PATTERN } from './common'
import {
	collectFieldErrors,
	FieldsValidationResult,
	invalid,
	valid,
	ValidationResult,
} from './types'

export type OwnerStepField = 'petType' | 'breed' | 'age'

export type OwnerStepValues = {
	petType: string
	breed: string
	age: string
}

const validatePetType = (petType: string): ValidationResult => {
	const trimmedPetType = petType.trim()

	if (!trimmedPetType) {
		return invalid('Введите тип животного')
	}

	if (trimmedPetType.length < 2) {
		return invalid('Тип животного должен содержать минимум 2 символа')
	}

	if (trimmedPetType.length > 30) {
		return invalid('Тип животного не должен превышать 30 символов')
	}

	if (!PET_TYPE_PATTERN.test(trimmedPetType)) {
		return invalid(
			'Тип животного может содержать только буквы, пробелы и дефисы',
		)
	}

	return valid()
}

const validateBreed = (breed: string): ValidationResult => {
	if (!breed) {
		return invalid('Выберите породу')
	}

	if (!petBreeds.includes(breed as (typeof petBreeds)[number])) {
		return invalid('Выберите породу из списка')
	}

	return valid()
}

export const validateOwnerStep = ({
	petType,
	breed,
	age,
}: OwnerStepValues): FieldsValidationResult<OwnerStepField> =>
	collectFieldErrors([
		['petType', validatePetType(petType)],
		['breed', validateBreed(breed)],
		['age', validatePetAge(age)],
	])
