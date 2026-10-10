import { UserRole } from '@/entity/user/types'
import { Href } from 'expo-router'

export const ROLE_HOME_HREF = {
	[UserRole.PET_OWNER]: '/owner',
	[UserRole.PET_NURSE]: '/sitter',
	[UserRole.PET_HOTEL]: '/hotel',
} as const satisfies Record<
	UserRole.PET_OWNER | UserRole.PET_NURSE | UserRole.PET_HOTEL,
	Href
>

export const getRoleHomeHref = (role: UserRole): Href | null => {
	if (role === UserRole.ADMIN) {
		return null
	}

	return ROLE_HOME_HREF[role]
}
