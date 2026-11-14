import { UserProfile } from '@/entity/user/types'

import { CITY_OPTIONS, SKILL_OPTIONS, SkillOption } from './types'
import { ProfileSetupFormValues } from './types'

const normalizeSkill = (value: string): string => {
	const lower = value.trim().toLowerCase()
	const matched = SKILL_OPTIONS.find(
		option => option.toLowerCase() === lower,
	)
	return matched ?? value.trim()
}

const normalizeCity = (value: string): string => {
	const trimmed = value.trim()
	const matched = CITY_OPTIONS.find(
		option => option.toLowerCase() === trimmed.toLowerCase(),
	)
	return matched ?? trimmed
}

export const profileToSetupValues = (
	profile: UserProfile,
): ProfileSetupFormValues => ({
	skills: profile.services.map(normalizeSkill),
	cities: profile.workCities.map(normalizeCity),
	aboutDescription: profile.fullDescription || profile.description,
})

export const isSkillOption = (value: string): value is SkillOption =>
	SKILL_OPTIONS.includes(value as SkillOption)
