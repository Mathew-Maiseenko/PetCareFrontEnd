import { validateSitterCost } from '../parsers/cost'
import { validateExperience } from '../parsers/experience'
import { collectFieldErrors, FieldsValidationResult } from './types'

export type SitterStepField = 'experience' | 'cost'

export type SitterStepValues = {
	experience: string
	cost: string
}

export const validateSitterStep = ({
	experience,
	cost,
}: SitterStepValues): FieldsValidationResult<SitterStepField> =>
	collectFieldErrors([
		['experience', validateExperience(experience)],
		['cost', validateSitterCost(cost)],
	])
