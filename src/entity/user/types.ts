export enum UserRole {
	ADMIN = 'admin',
	PET_NURSE = 'pet_nurse',
	PET_HOTEL = 'pet_hotel',
	PET_OWNER = 'pet_owner',
	PET = 'pet',
}

export enum UserCountry {
	Russia = 'Россия',
	Belarus = 'Беларусь',
}

export type ProviderRole =
	UserRole.PET_NURSE | UserRole.PET_HOTEL | UserRole.PET_OWNER | UserRole.PET

export type UserProfile = {
	name: string
	firstName: string
	birthDate: string
	phone: string
	avatarUri: string | null
	description: string
	fullDescription: string
	rating: number
	reviewsCount: number
	services: string[]
	workCity: string
	priceFrom: number
}

export type UserOwnerProfile = {
	name: string
	firstName: string
	birthDate: string
	phone: string
	avatarUri: string | null
}

export type PetProfile = {
	name: string
	type: string
	breed: string
	age: string
	avatarUri: string | null
	description: string
	fullDescription: string
	action: string
	vaccination: boolean
}
