import { validateOptionalHotelCost } from "../parsers/cost";
import { invalid, ValidationResult } from "./types";

export type HotelStepValues = {
	hotelName: string;
	address: string;
	cost: string;
};

export const validateHotelStep = ({
	hotelName,
	address,
	cost,
}: HotelStepValues): ValidationResult => {
	const trimmedName = hotelName.trim();

	if (!trimmedName) {
		return invalid("Введите название гостиницы");
	}

	if (trimmedName.length < 2) {
		return invalid("Название гостиницы должно содержать минимум 2 символа");
	}

	if (trimmedName.length > 100) {
		return invalid("Название гостиницы не должно превышать 100 символов");
	}

	if (!/[a-zA-Zа-яА-ЯёЁ]/.test(trimmedName)) {
		return invalid("Название гостиницы должно содержать буквы");
	}

	const trimmedAddress = address.trim();

	if (!trimmedAddress) {
		return invalid("Введите адрес гостиницы");
	}

	if (trimmedAddress.length < 10) {
		return invalid("Адрес должен содержать минимум 10 символов");
	}

	if (trimmedAddress.length > 200) {
		return invalid("Адрес не должен превышать 200 символов");
	}

	if (!/[a-zA-Zа-яА-ЯёЁ0-9]/.test(trimmedAddress)) {
		return invalid("Адрес содержит недопустимые символы");
	}

	return validateOptionalHotelCost(cost);
};
