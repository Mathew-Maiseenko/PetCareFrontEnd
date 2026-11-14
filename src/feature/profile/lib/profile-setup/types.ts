export const SKILL_OPTION_NO_SPECIAL = 'нет специальных навыков'

export const SKILL_OPTIONS = [
	SKILL_OPTION_NO_SPECIAL,
	'груминг',
	'дрессировка',
	'социализация животных',
	'фотосъёмка питомцев',
	'транспортировка',
	'уход за здоровьем',
] as const

export const CITY_OPTIONS = [
	'Минск',
	'Витебск',
	'Брест',
	'Могилев',
	'Пинск',
	'Гродно',
	'Гомель',
] as const

export type SkillOption = (typeof SKILL_OPTIONS)[number]
export type CityOption = (typeof CITY_OPTIONS)[number]

export type ProfileSetupStep = 0 | 1 | 2

export type ProfileSetupFormValues = {
	skills: string[]
	cities: string[]
	aboutDescription: string
}
