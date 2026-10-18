import {
	collectFieldErrors,
	FieldsValidationResult,
	invalid,
	valid,
} from '@/feature/registr/lib/validation/types'

export type LoginFormField = 'username' | 'password'

export type LoginFormValidationValues = {
	username: string
	password: string
}

export const validateLoginForm = ({
	username,
	password,
}: LoginFormValidationValues): FieldsValidationResult<LoginFormField> =>
	collectFieldErrors([
		['username', username.trim() ? valid() : invalid('Введите имя пользователя')],
		['password', password ? valid() : invalid('Введите пароль')],
	])
