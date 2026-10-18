export enum UserRole {
	ADMIN = 'admin',
	PET_NURSE = 'pet_nurse',
	PET_HOTEL = 'pet_hotel',
	PET_OWNER = 'pet_owner',
}

export enum UserCountry {
	Russia = 'Россия',
	Belarus = 'Беларусь',
}

export type ProviderRole = UserRole.PET_NURSE | UserRole.PET_HOTEL

export type UserProfile = {
	name: string
	phone: string
	avatarUri: string
	description: string
	fullDescription: string
	rating: number
	reviewsCount: number
	services: string[]
	workCity: string
	priceFrom: number
}
