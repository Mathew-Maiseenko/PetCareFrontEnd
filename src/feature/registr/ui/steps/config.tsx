import { UserRole } from "@/entity/user/types";
import { RegistrationStep } from "../../types";
import CommonRegistrationStep from "./common/first";
import CredentialsRegistrationStep from "./common/second";
import OwnerRegistrationStep from "./owner/third";
import SitterRegistrationStep from "./sitter/third";
import HotelRegistrationStep from "./hotel/third";

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
	if (step === 2) {
		switch (role) {
			case UserRole.PET_OWNER:
				return <OwnerRegistrationStep />;
			case UserRole.PET_NURSE:
				return <SitterRegistrationStep />;
			case UserRole.PET_HOTEL:
				return <HotelRegistrationStep />;
			default:
				return null;
		}
	}

	return null;
};

export const COUNT_OF_STEPS = 3;
