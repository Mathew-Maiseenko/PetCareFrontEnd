import { create } from "zustand";
import { devtools } from "zustand/middleware";
import {
	OwnerRegistration,
	SitterRegistration,
	HotelRegistration,
	RegistrationStep,
} from "../types";
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

const initialHotelData: Omit<HotelRegistration, "hotelName" | "password"> = {
	address: "",
	cost: undefined,
	worksByContract: false,
};

export type RegistrationState = {
	// Общие поля на верхнем уровне
	name: string;
	password: string;

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

	// Сеттеры для специфичных данных (принимают только свои поля)
	setOwnerData: (data: Partial<typeof initialOwnerData>) => void;
	setSitterData: (data: Partial<typeof initialSitterData>) => void;
	setHotelData: (data: Partial<typeof initialHotelData>) => void;

	setCurrentRole: (role: UserRole) => void;
	setCurrentCountry: (country: UserCountry) => void;

	// Возвращает полный объект для текущей роли (объединяя общие поля и специфику)
	getCurrentData: () =>
		| (OwnerRegistration & { role: UserRole.PET_OWNER })
		| (SitterRegistration & { role: UserRole.PET_NURSE })
		| (HotelRegistration & { role: UserRole.PET_HOTEL })
		| null;

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
			ownerData: initialOwnerData,
			sitterData: initialSitterData,
			hotelData: initialHotelData,
			currentRole: null,
			currentCountry: null,
			currentStep: 0,

			// Сеттеры для общих полей
			setName: (name) => set(() => ({ name })),
			setPassword: (password) => set(() => ({ password })),

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
					ownerData,
					sitterData,
					hotelData,
				} = get();
				if (currentRole === UserRole.PET_OWNER) {
					return { ...ownerData, name, password, role: UserRole.PET_OWNER };
				}
				if (currentRole === UserRole.PET_NURSE) {
					return { ...sitterData, name, password, role: UserRole.PET_NURSE };
				}
				if (currentRole === UserRole.PET_HOTEL) {
					// Для отеля поле имени в возвращаемом объекте должно быть hotelName,
					// но мы используем общее name, поэтому маппим
					return {
						...hotelData,
						hotelName: name,
						password,
						role: UserRole.PET_HOTEL,
					};
				}
				return null;
			},

			resetAll: () =>
				set({
					name: "",
					password: "",
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
