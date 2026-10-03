import { MAX_PET_AGE, MIN_PET_AGE } from "../validation/common";
import { invalid, valid, ValidationResult } from "../validation/types";

export const parseAge = (value: string): number => {
	const match = value.match(/\d+/);
	return match ? parseInt(match[0], 10) : 0;
};

export const validatePetAge = (value: string): ValidationResult => {
	const trimmed = value.trim();

	if (!trimmed) {
		return invalid("Введите возраст питомца");
	}

	if (!/\d/.test(trimmed)) {
		return invalid("Возраст должен содержать число");
	}

	const age = parseAge(trimmed);

	if (age < MIN_PET_AGE) {
		return invalid(`Возраст питомца должен быть не менее ${MIN_PET_AGE} года`);
	}

	if (age > MAX_PET_AGE) {
		return invalid(`Возраст питомца не может превышать ${MAX_PET_AGE} лет`);
	}

	return valid();
};
