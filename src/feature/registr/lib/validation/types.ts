export type ValidationResult =
	| { isValid: true }
	| { isValid: false; error: string };

export const valid = (): ValidationResult => ({ isValid: true });

export const invalid = (error: string): ValidationResult => ({
	isValid: false,
	error,
});
