import { validateName } from './name'
import { validatePassword, validatePasswordConfirmation } from './password'
import { collectFieldErrors, FieldsValidationResult } from './types'

export type CredentialsStepField = 'name' | 'password' | 'confirmPassword'

export type CredentialsStepValues = {
	name: string
	password: string
	confirmPassword: string
}

export const validateCredentialsStep = ({
	name,
	password,
	confirmPassword,
}: CredentialsStepValues): FieldsValidationResult<CredentialsStepField> =>
	collectFieldErrors([
		['name', validateName(name)],
		['password', validatePassword(password)],
		[
			'confirmPassword',
			validatePasswordConfirmation(password, confirmPassword),
		],
	])
