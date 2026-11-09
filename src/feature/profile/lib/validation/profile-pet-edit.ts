import { validateName } from '@/feature/registr/lib/validation/name'
import {
	collectFieldErrors,
	FieldsValidationResult,
	ValidationResult,
} from '@/feature/registr/lib/validation/types'

export type ProfileEditField = 'name' | 'type' | 'breed' | 'age'

export type ProfilePetEditFormValues = {
	name: string
	type: string
	breed: string
	age: string
	avatarUri: string | null
}

const validateRequired = (value: string, errorMessage: string): any => {
	if (!value || value.trim() === '') {
		return { isValid: false, error: errorMessage }
	}
	return { isValid: true }
}

export const validateProfilePetEditForm = (
	values: ProfilePetEditFormValues,
): FieldsValidationResult<ProfileEditField> => {
	return collectFieldErrors([
		['name', validateName(values.name)],
		['type', validateRequired(values.type, 'Укажите тип животного')],
		['breed', validateRequired(values.breed, 'Укажите породу')],
		['age', validateRequired(values.age, 'Укажите возраст')],
	])
}
