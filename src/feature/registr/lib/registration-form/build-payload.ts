import { UserRole } from '@/entity/user/types'

import { parseAge } from '../parsers/age'
import { parseCost } from '../parsers/cost'
import { parseExperienceYears } from '../parsers/experience'
import { saveRegisteredUser } from '../storage/save-registered-user'
import { RegisteredUserData, RegistrationPayload } from '../../types/stored-user'
import { RegistrationFormValues } from './types'

export const buildRegistrationPayload = (
	values: RegistrationFormValues,
	role: UserRole,
): RegistrationPayload | null => {
	const meta = { phone: values.phone.trim(), country: values.country }

	if (role === UserRole.PET_OWNER) {
		return {
			...meta,
			role: UserRole.PET_OWNER,
			name: values.name.trim(),
			password: values.password,
			petType: values.petType.trim(),
			breed: values.breed,
			age: parseAge(values.age),
			hasVaccination: values.hasVaccination,
		}
	}

	if (role === UserRole.PET_NURSE) {
		return {
			...meta,
			role: UserRole.PET_NURSE,
			name: values.name.trim(),
			password: values.password,
			experienceYears: parseExperienceYears(values.experience),
			cost: parseCost(values.sitterCost),
			hasEducation: values.hasEducation,
		}
	}

	if (role === UserRole.PET_HOTEL) {
		const trimmedCost = values.hotelCost.trim()

		return {
			...meta,
			role: UserRole.PET_HOTEL,
			password: values.password,
			hotelName: values.hotelName.trim(),
			address: values.address.trim(),
			cost: trimmedCost ? parseCost(values.hotelCost) : undefined,
			worksByContract: values.worksByContract,
		}
	}

	return null
}

export const completeRegistration = (
	values: RegistrationFormValues,
	role: UserRole,
): RegisteredUserData | null => {
	const data = buildRegistrationPayload(values, role)

	if (!data) {
		return null
	}

	const registeredUser: RegisteredUserData = {
		...data,
		registeredAt: new Date().toISOString(),
	}

	saveRegisteredUser(registeredUser)

	return registeredUser
}
