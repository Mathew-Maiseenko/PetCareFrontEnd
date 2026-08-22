import { UserRole } from "@/entity/user/types";

export const userRolesData = [
	{
		id: 1,
		label: "Зооняня",
		value: UserRole.PET_NURSE,
	},
	{
		id: 2,
		label: "Зоогостиница",
		value: UserRole.PET_HOTEL,
	},
	{
		id: 3,
		label: "Владелец питомца",
		value: UserRole.PET_OWNER,
	},
];
