import { UserCountry } from "@/entity/user/types";

import { validatePhone } from "./phone";
import { invalid, valid, ValidationResult } from "./types";

export type FirstStepValues = {
	selectedRoleId: number;
	country: UserCountry;
	phone: string;
};

export const validateFirstStep = ({
	selectedRoleId,
	country,
	phone,
}: FirstStepValues): ValidationResult => {
	if (!selectedRoleId) {
		return invalid("Выберите роль");
	}

	return validatePhone(phone, country);
};
