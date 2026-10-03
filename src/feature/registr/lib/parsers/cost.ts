import {
	MAX_COST,
	MAX_HOTEL_COST,
	MIN_COST,
	MIN_HOTEL_COST,
} from "../validation/common";
import { invalid, valid, ValidationResult } from "../validation/types";

export const parseCost = (value: string): number | undefined => {
	const match = value.match(/\d+/);
	return match ? parseInt(match[0], 10) : undefined;
};

export const validateSitterCost = (value: string): ValidationResult => {
	const trimmed = value.trim();

	if (!trimmed) {
		return invalid("Введите стоимость услуг");
	}

	if (!/\d/.test(trimmed)) {
		return invalid("Стоимость должна содержать число");
	}

	const cost = parseCost(trimmed);

	if (cost === undefined || cost < MIN_COST) {
		return invalid(`Минимальная стоимость — ${MIN_COST} р/час`);
	}

	if (cost > MAX_COST) {
		return invalid(`Максимальная стоимость — ${MAX_COST} р/час`);
	}

	return valid();
};

export const validateOptionalHotelCost = (value: string): ValidationResult => {
	const trimmed = value.trim();

	if (!trimmed) {
		return valid();
	}

	if (!/\d/.test(trimmed)) {
		return invalid("Стоимость должна содержать число");
	}

	const cost = parseCost(trimmed);

	if (cost === undefined || cost < MIN_HOTEL_COST) {
		return invalid(`Минимальная стоимость — ${MIN_HOTEL_COST}`);
	}

	if (cost > MAX_HOTEL_COST) {
		return invalid(`Максимальная стоимость — ${MAX_HOTEL_COST}`);
	}

	return valid();
};
