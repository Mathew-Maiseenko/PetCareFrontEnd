import { validateSitterCost } from "../parsers/cost";
import { validateExperience } from "../parsers/experience";
import { ValidationResult } from "./types";

export type SitterStepValues = {
	experience: string;
	cost: string;
};

export const validateSitterStep = ({
	experience,
	cost,
}: SitterStepValues): ValidationResult => {
	const experienceResult = validateExperience(experience);
	if (!experienceResult.isValid) {
		return experienceResult;
	}

	return validateSitterCost(cost);
};
