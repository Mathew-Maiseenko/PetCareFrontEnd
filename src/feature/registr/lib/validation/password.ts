import {
	MAX_PASSWORD_LENGTH,
	MIN_PASSWORD_LENGTH,
	PASSWORD_DIGIT_PATTERN,
	PASSWORD_LOWERCASE_PATTERN,
	PASSWORD_SPECIAL_PATTERN,
	PASSWORD_UPPERCASE_PATTERN,
} from "./common";
import { invalid, valid, ValidationResult } from "./types";

export const validatePassword = (password: string): ValidationResult => {
	if (!password) {
		return invalid("Введите пароль");
	}

	if (/\s/.test(password)) {
		return invalid("Пароль не должен содержать пробелы");
	}

	if (password.length < MIN_PASSWORD_LENGTH) {
		return invalid(
			`Пароль должен содержать минимум ${MIN_PASSWORD_LENGTH} символов`,
		);
	}

	if (password.length > MAX_PASSWORD_LENGTH) {
		return invalid(
			`Пароль не должен превышать ${MAX_PASSWORD_LENGTH} символов`,
		);
	}

	if (!PASSWORD_UPPERCASE_PATTERN.test(password)) {
		return invalid("Пароль должен содержать хотя бы одну заглавную букву");
	}

	if (!PASSWORD_LOWERCASE_PATTERN.test(password)) {
		return invalid("Пароль должен содержать хотя бы одну строчную букву");
	}

	if (!PASSWORD_DIGIT_PATTERN.test(password)) {
		return invalid("Пароль должен содержать хотя бы одну цифру");
	}

	if (!PASSWORD_SPECIAL_PATTERN.test(password)) {
		return invalid(
			"Пароль должен содержать хотя бы один специальный символ (!@#$% и т.д.)",
		);
	}

	return valid();
};

export const validatePasswordConfirmation = (
	password: string,
	confirmPassword: string,
): ValidationResult => {
	if (!confirmPassword) {
		return invalid("Подтвердите пароль");
	}

	if (password !== confirmPassword) {
		return invalid("Пароли не совпадают");
	}

	return valid();
};
