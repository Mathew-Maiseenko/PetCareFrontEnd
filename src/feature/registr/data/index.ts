import { UserRole } from '@/entity/user/types'

export const petBreeds = [
	'Хаски',
	'Лабрадор',
	'Овчарка',
	'Бульдог',
	'Пудель',
	'Чихуахуа',
	'Мейн-кун',
	'Британская короткошёрстная',
	'Сиамская',
	'Дворняжка',
] as const

export const experienceOptions = [
	'1 год',
	'2 года',
	'3 года',
	'4 и более года',
] as const

export const userRolesData = [
	{
		id: 1,
		label: 'Зооняня',
		value: UserRole.PET_NURSE,
	},
	{
		id: 2,
		label: 'Зоогостиница',
		value: UserRole.PET_HOTEL,
	},
	{
		id: 3,
		label: 'Владелец питомца',
		value: UserRole.PET_OWNER,
	},
]
