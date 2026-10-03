import { UserCountry, UserRole } from "@/entity/user/types";

import {
	HotelRegistration,
	OwnerRegistration,
	SitterRegistration,
} from "./index";

type RegistrationMeta = {
	phone: string;
	country: UserCountry;
};

export type RegistrationPayload =
	| (OwnerRegistration & RegistrationMeta & { role: UserRole.PET_OWNER })
	| (SitterRegistration & RegistrationMeta & { role: UserRole.PET_NURSE })
	| (HotelRegistration & RegistrationMeta & { role: UserRole.PET_HOTEL });

export type RegisteredUserData = RegistrationPayload & {
	registeredAt: string;
};
