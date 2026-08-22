import { UserRole } from "@/entity/user/types";
import { RegistrationStep } from "../../types";
import { Text } from "react-native";
import CommonRegistrationStep from "./common/first";
import CredentialsRegistrationStep from "./common/second";
import { ReactNode } from "react";

export const stepComponentMap: Record<UserRole, ReactNode> = {
	[UserRole.ADMIN]: <Text>Админ</Text>,
	[UserRole.PET_HOTEL]: <Text>🏨 Пет-отель, шаг 2</Text>,

	[UserRole.PET_NURSE]: <Text>🩺 Зооняня, шаг 2</Text>,

	[UserRole.PET_OWNER]: <Text>🐶 Владелец, шаг 2</Text>,
};

export const getComponentScreenByRoleAndStep = (
	role: UserRole | null,
	step: RegistrationStep,
) => {
	if (step === 0 || !role) {
		return <CommonRegistrationStep />;
	}
	if (step === 1) {
		return <CredentialsRegistrationStep />;
	}

	return stepComponentMap[role] ?? null;
};

export const COUNT_OF_STEPS = 3;
