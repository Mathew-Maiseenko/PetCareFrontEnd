import { UserCountry, UserRole } from "@/entity/user/types";

export interface OwnerRegistration {
	name: string;
	password: string;
	petType: string;
	breed: string;
	age: number;
	hasVaccination: boolean;
}

export interface SitterRegistration {
	name: string;
	password: string;
	cost?: number;
	experienceYears: number;
	hasEducation: boolean;
}

export interface HotelRegistration {
	hotelName: string;
	password: string;
	address: string;
	cost?: number;
	worksByContract: boolean;
}

export type RegistrationStep = 0 | 1 | 2;

export type RegistrationState = {
	ownerData: OwnerRegistration;
	sitterData: SitterRegistration;
	hotelData: HotelRegistration;
	currentRole: UserRole | null;
	currentCountry: UserCountry | null;
	currentStep: RegistrationStep;

	setOwnerData: (data: Partial<OwnerRegistration>) => void;
	setSitterData: (data: Partial<SitterRegistration>) => void;
	setHotelData: (data: Partial<HotelRegistration>) => void;

	setCurrentRole: (role: UserRole) => void;
	setCurrentCountry: (country: UserCountry) => void;

	getCurrentData: () =>
		OwnerRegistration | SitterRegistration | HotelRegistration | null;

	resetAll: () => void;

	resetRoleData: (role: UserRole) => void;
	setCurrentStep: (step: RegistrationStep) => void;
};
