import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import {
	PetProfile,
	ProviderRole,
	UserOwnerProfile,
	UserProfile,
	UserRole,
} from '../types'

const sitterProfile: UserProfile = {
	name: 'Елена',
	firstName: 'Елена',
	birthDate: '01.01.2025',
	phone: '+3753314642177',
	avatarUri:
		'https://img.magnific.com/free-photo/vertical-shot-beautiful-smiling-girl_181624-46009.jpg?semt=ais_hybrid&w=740&q=80',
	description:
		'Я искренне люблю животных, ответственно подхожу к их безопасности и комфорту. Учитываю всё..',
	fullDescription:
		'Я искренне люблю животных и ответственно подхожу к их безопасности и комфорту. Учитываю все ваши пожелания, особенности питомца и его режим. В гостях у меня обеспечу заботу, прогулки, игры и соблюдение всех привычных правил. Вы всегда будете в курсе дня благодаря фото, видео и оперативной связи. Моя цель — ваше спокойствие и уверенность, что ваш любимец в надёжных руках.',
	rating: 5,
	reviewsCount: 53,
	services: ['Груминг', 'дрессировка', 'социализация животных'],
	workCity: 'Минск',
	priceFrom: 10,
}

const hotelProfile: UserProfile = {
	name: 'Кошкин дом',
	firstName: 'Кошкин дом',
	birthDate: '',
	phone: '+375291234567',
	avatarUri:
		'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop',
	description:
		'Уютная зоогостиница для кошек и собак. Следим за режимом, питанием и настроением каждого гостя..',
	fullDescription:
		'Уютная зоогостиница для кошек и собак. Следим за режимом, питанием и настроением каждого гостя. Есть отдельные комнаты, площадка для выгула и круглосуточный присмотр. Хозяева получают фотоотчёт каждый день.',
	rating: 4.8,
	reviewsCount: 27,
	services: ['Передержка', 'выгул', 'ветеринарный контроль'],
	workCity: 'Минск',
	priceFrom: 25,
}
const ownerProfile: UserOwnerProfile = {
	name: 'ОКСАНА',
	firstName: 'ОКСАНА',
	birthDate: '',
	phone: '+375331234567',
	avatarUri:
		'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop',
}

const petProfile: PetProfile = {
	name: 'ГУДБОЙ',
	type: 'Собака',
	breed: 'Хаски',
	age: '11 лет',
	avatarUri:
		'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop',
	description:
		'Гудбой — одиннадцатилетний хаски. Его день строится вокруг движения: в 7 утра — короткий выгул, после завтрака...',
	fullDescription:
		'Гудбой — одиннадцатилетний хаски. Его день строится вокруг движения: в 7 утра — короткий выгул, после завтрака — обязательный час покоя. Главное событие — двухчасовая активная прогулка днём (бег, игры в догонялки, буксировка), без этого он будет грызть всё в квартире. Вечером — спокойный променад. Очень разговорчивый. Обожает рыть ямы и обдумывает побеги при любой возможности — никогда не оставляйте его одного без привязи. Летом нужен постоянный доступ к прохладной воде и тени.',
	action: 'связаться с хозяином питомца; доставить в вет клинику',
	vaccination: false,
}

type SharedProfileFields = Pick<
	UserProfile,
	'name' | 'firstName' | 'birthDate' | 'phone' | 'avatarUri'
>

export type UserProfileState = {
	profiles: Record<ProviderRole, UserProfile | UserOwnerProfile | PetProfile>
	updateProviderProfile: (
		role: ProviderRole,
		patch: Partial<SharedProfileFields>,
	) => void
}

export const useUserProfileStore = create<UserProfileState>()(
	devtools(
		set => ({
			profiles: {
				[UserRole.PET_NURSE]: sitterProfile,
				[UserRole.PET_HOTEL]: hotelProfile,
				[UserRole.PET_OWNER]: ownerProfile,
				[UserRole.PET]: petProfile,
			},
			updateProviderProfile: (role, patch) =>
				set(state => ({
					profiles: {
						...state.profiles,
						[role]: {
							...state.profiles[role],
							...patch,
						} as UserProfile | UserOwnerProfile | PetProfile,
					},
				})),
		}),
		{ name: 'UserProfileStore' },
	),
)
