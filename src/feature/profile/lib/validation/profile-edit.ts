import { UserCountry } from '@/entity/user/types'
import { validateName } from '@/feature/registr/lib/validation/name'
import { validatePhone } from '@/feature/registr/lib/validation/phone'
import {
	collectFieldErrors,
	FieldsValidationResult,
} from '@/feature/registr/lib/validation/types'

export type ProfileEditField = 'firstName' | 'birthDate' | 'phone'

export type ProfileEditFormValues = {
	firstName: string
	birthDate: string
	phone: string
	avatarUri: string | null
}

export const validateProfileEditForm = ({
	firstName,
	phone,
}: Pick<ProfileEditFormValues, 'firstName' | 'phone'>): FieldsValidationResult<ProfileEditField> =>
	collectFieldErrors([
		['firstName', validateName(firstName)],
		['phone', validatePhone(phone, UserCountry.Belarus)],
	])
