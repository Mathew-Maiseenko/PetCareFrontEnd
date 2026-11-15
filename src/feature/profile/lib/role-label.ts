import { ProviderRole, UserRole } from '@/entity/user/types'

export const PROVIDER_ROLE_LABEL: Record<ProviderRole, string> = {
	[UserRole.PET_NURSE]: 'Зооняня',
	[UserRole.PET_HOTEL]: 'Зоогостиница',
	[UserRole.PET_OWNER]: 'Хозяин',
	[UserRole.PET]: 'Питомец',
}
