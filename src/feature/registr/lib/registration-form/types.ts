import { UserCountry } from '@/entity/user/types'

export type RegistrationFormValues = {
	selectedRoleId: number
	country: UserCountry
	phone: string
	name: string
	password: string
	confirmPassword: string
	petType: string
	breed: string
	age: string
	hasVaccination: boolean
	experience: string
	sitterCost: string
	hasEducation: boolean
	hotelName: string
	address: string
	hotelCost: string
	worksByContract: boolean
}
