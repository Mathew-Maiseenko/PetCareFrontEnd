export type ValidationResult =
	{ isValid: true } | { isValid: false; error: string }

export type FieldErrors<T extends string> = Partial<Record<T, string>>

export type FieldsValidationResult<T extends string> = {
	isValid: boolean
	errors: FieldErrors<T>
}

export const valid = (): ValidationResult => ({ isValid: true })

export const invalid = (error: string): ValidationResult => ({
	isValid: false,
	error,
})

export const collectFieldErrors = <T extends string>(
	checks: Array<[T, ValidationResult]>,
): FieldsValidationResult<T> => {
	const errors: FieldErrors<T> = {}

	for (const [field, result] of checks) {
		if (!result.isValid) {
			errors[field] = result.error
		}
	}

	return {
		isValid: Object.keys(errors).length === 0,
		errors,
	}
}
