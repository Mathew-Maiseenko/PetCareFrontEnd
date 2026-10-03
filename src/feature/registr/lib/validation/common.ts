export const MIN_NAME_LENGTH = 2;
export const MAX_NAME_LENGTH = 50;
export const MIN_PASSWORD_LENGTH = 8;
export const MAX_PASSWORD_LENGTH = 64;
export const MIN_PET_AGE = 1;
export const MAX_PET_AGE = 30;
export const MIN_COST = 50;
export const MAX_COST = 50_000;
export const MIN_HOTEL_COST = 1;
export const MAX_HOTEL_COST = 100_000;

export const NAME_PATTERN =
	/^[a-zA-Zа-яА-ЯёЁ]+(?:[ -][a-zA-Zа-яА-ЯёЁ]+)*$/;

export const PET_TYPE_PATTERN = /^[a-zA-Zа-яА-ЯёЁ]+(?:[ -][a-zA-Zа-яА-ЯёЁ]+)*$/;

export const PASSWORD_UPPERCASE_PATTERN = /[A-ZА-ЯЁ]/;
export const PASSWORD_LOWERCASE_PATTERN = /[a-zа-яё]/;
export const PASSWORD_DIGIT_PATTERN = /\d/;
export const PASSWORD_SPECIAL_PATTERN = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?`~]/;

export const hasNumericValue = (value: string) => /\d/.test(value.trim());

export const extractDigits = (value: string) => value.replace(/\D/g, "");
