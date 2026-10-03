import { validateName } from "./name";
import {
	validatePassword,
	validatePasswordConfirmation,
} from "./password";
import { ValidationResult } from "./types";

export type CredentialsStepValues = {
	name: string;
	password: string;
	confirmPassword: string;
};

export const validateCredentialsStep = ({
	name,
	password,
	confirmPassword,
}: CredentialsStepValues): ValidationResult => {
	const nameResult = validateName(name);
	if (!nameResult.isValid) {
		return nameResult;
	}

	const passwordResult = validatePassword(password);
	if (!passwordResult.isValid) {
		return passwordResult;
	}

	return validatePasswordConfirmation(password, confirmPassword);
};
