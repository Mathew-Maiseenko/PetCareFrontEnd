import { experienceOptions } from "@/feature/registr/data";

import { invalid, valid, ValidationResult } from "../validation/types";

export const parseExperienceYears = (value: string): number => {
	const match = value.match(/\d+/);
	return match ? parseInt(match[0], 10) : 0;
};

export const validateExperience = (value: string): ValidationResult => {
	if (!value) {
		return invalid("Выберите ваш опыт");
	}

	if (!experienceOptions.includes(value as (typeof experienceOptions)[number])) {
		return invalid("Выберите корректный вариант опыта");
	}

	return valid();
};
