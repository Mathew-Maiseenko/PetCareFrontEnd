import { UserCountry } from '@/entity/user/types'

import { RegistrationFormValues } from './types'

export const registrationDefaultValues: RegistrationFormValues = {
	selectedRoleId: 0,
	country: UserCountry.Belarus,
	phone: '',
	name: '',
	password: '',
	confirmPassword: '',
	petType: '',
	breed: '',
	age: '',
	hasVaccination: false,
	experience: '',
	sitterCost: '',
	hasEducation: false,
	hotelName: '',
	address: '',
	hotelCost: '',
	worksByContract: false,
}
