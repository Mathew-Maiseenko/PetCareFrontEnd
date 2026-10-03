import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { saveRegisteredUser } from "../lib/storage/save-registered-user";
import {
	OwnerRegistration,
	SitterRegistration,
	HotelRegistration,
	RegistrationStep,
} from "../types";
import {
	RegisteredUserData,
	RegistrationPayload,
} from "../types/stored-user";
import { UserCountry, UserRole } from "@/entity/user/types";

// Начальные значения только для специфичных полей (без name и password)
const initialOwnerData: Omit<OwnerRegistration, "name" | "password"> = {
	petType: "",
	breed: "",
	age: 0,
	hasVaccination: false,
};

const initialSitterData: Omit<SitterRegistration, "name" | "password"> = {
	cost: undefined,
	experienceYears: 0,
	hasEducation: false,
};

const initialHotelData: Omit<HotelRegistration, "password"> = {
	hotelName: "",
	address: "",
	cost: undefined,
	worksByContract: false,
};

export type RegistrationState = {
	// Общие поля на верхнем уровне
	name: string;
	password: string;
	confirmPassword: string;
	phone: string;

	// Специфичные данные для каждой роли (без общих полей)
	ownerData: typeof initialOwnerData;
	sitterData: typeof initialSitterData;
	hotelData: typeof initialHotelData;

	currentRole: UserRole | null;
	currentCountry: UserCountry | null;
	currentStep: RegistrationStep;

	// Сеттеры для общих полей
	setName: (name: string) => void;
	setPassword: (password: string) => void;
	setConfirmPassword: (confirmPassword: string) => void;
	setPhone: (phone: string) => void;

	// Сеттеры для специфичных данных (принимают только свои поля)
	setOwnerData: (data: Partial<typeof initialOwnerData>) => void;
	setSitterData: (data: Partial<typeof initialSitterData>) => void;
	setHotelData: (data: Partial<typeof initialHotelData>) => void;

	setCurrentRole: (role: UserRole) => void;
	setCurrentCountry: (country: UserCountry) => void;

	// Возвращает полный объект для текущей роли (объединяя общие поля и специфику)
	getCurrentData: () => RegistrationPayload | null;

	completeRegistration: () => RegisteredUserData | null;

	resetAll: () => void;
	resetRoleData: (role: UserRole) => void;
	setCurrentStep: (step: RegistrationStep) => void;
};

export const useRegistrationStore = create<RegistrationState>()(
	devtools(
		(set, get) => ({
			// Начальные значения
			name: "",
			password: "",
			confirmPassword: "",
			phone: "",
			ownerData: initialOwnerData,
			sitterData: initialSitterData,
			hotelData: initialHotelData,
			currentRole: null,
			currentCountry: null,
			currentStep: 0,

			// Сеттеры для общих полей
			setName: (name) => set(() => ({ name })),
			setPassword: (password) => set(() => ({ password })),
			setConfirmPassword: (confirmPassword) =>
				set(() => ({ confirmPassword })),
			setPhone: (phone) => set(() => ({ phone })),

			// Сеттеры для специфичных данных
			setOwnerData: (data) =>
				set((state) => ({
					ownerData: { ...state.ownerData, ...data },
				})),

			setSitterData: (data) =>
				set((state) => ({
					sitterData: { ...state.sitterData, ...data },
				})),

			setHotelData: (data) =>
				set((state) => ({
					hotelData: { ...state.hotelData, ...data },
				})),

			setCurrentRole: (role) => set(() => ({ currentRole: role })),
			setCurrentCountry: (country) => set(() => ({ currentCountry: country })),
			setCurrentStep: (step) => set(() => ({ currentStep: step })),

			// Возвращает полный объект для текущей роли, объединяя общие поля
			getCurrentData: () => {
				const {
					currentRole,
					name,
					password,
					phone,
					currentCountry,
					ownerData,
					sitterData,
					hotelData,
				} = get();

				if (!currentRole || !currentCountry) {
					return null;
				}

				const meta = { phone, country: currentCountry };

				if (currentRole === UserRole.PET_OWNER) {
					return {
						...meta,
						...ownerData,
						name,
						password,
						role: UserRole.PET_OWNER,
					};
				}
				if (currentRole === UserRole.PET_NURSE) {
					return {
						...meta,
						...sitterData,
						name,
						password,
						role: UserRole.PET_NURSE,
					};
				}
				if (currentRole === UserRole.PET_HOTEL) {
					return {
						...meta,
						...hotelData,
						password,
						role: UserRole.PET_HOTEL,
					};
				}
				return null;
			},

			completeRegistration: () => {
				const data = get().getCurrentData();

				if (!data) {
					return null;
				}

				const registeredUser: RegisteredUserData = {
					...data,
					registeredAt: new Date().toISOString(),
				};

				saveRegisteredUser(registeredUser);
				get().resetAll();

				return registeredUser;
			},

			resetAll: () =>
				set({
					name: "",
					password: "",
					confirmPassword: "",
					phone: "",
					ownerData: initialOwnerData,
					sitterData: initialSitterData,
					hotelData: initialHotelData,
					currentRole: null,
					currentCountry: null,
					currentStep: 0,
				}),

			resetRoleData: (role) => {
				if (role === UserRole.PET_OWNER) {
					set({ ownerData: initialOwnerData });
				} else if (role === UserRole.PET_NURSE) {
					set({ sitterData: initialSitterData });
				} else if (role === UserRole.PET_HOTEL) {
					set({ hotelData: initialHotelData });
				}
				// При сбросе данных роли также можно очистить общие поля, но обычно это делается при resetAll
				// или при переходе между ролями. Оставим как есть.
			},
		}),
		{ name: "RegistrationStore" },
	),
);
