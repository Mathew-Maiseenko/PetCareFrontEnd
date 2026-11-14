import { SKILL_OPTION_NO_SPECIAL } from './types'

export const toggleSkillDraft = (
	selected: string[],
	skill: string,
): string[] => {
	if (skill === SKILL_OPTION_NO_SPECIAL) {
		return selected.includes(SKILL_OPTION_NO_SPECIAL) ? [] : [SKILL_OPTION_NO_SPECIAL]
	}

	const withoutNoSpecial = selected.filter(item => item !== SKILL_OPTION_NO_SPECIAL)
	const isSelected = withoutNoSpecial.includes(skill)

	if (isSelected) {
		return withoutNoSpecial.filter(item => item !== skill)
	}

	return [...withoutNoSpecial, skill]
}
