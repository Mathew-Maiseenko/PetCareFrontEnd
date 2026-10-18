export interface OwnerRegistration {
	name: string
	password: string
	petType: string
	breed: string
	age: number
	hasVaccination: boolean
}

export interface SitterRegistration {
	name: string
	password: string
	cost?: number
	experienceYears: number
	hasEducation: boolean
}

export interface HotelRegistration {
	hotelName: string
	password: string
	address: string
	cost?: number
	worksByContract: boolean
}

export type RegistrationStep = 0 | 1 | 2
