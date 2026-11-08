import { UserProfile, UserOwnerProfile } from '@/entity/user/types'

import { ProfileEditFormValues } from './validation/profile-edit'

export const profileToFormValues = (
	profile: UserProfile | UserOwnerProfile,
): ProfileEditFormValues => ({
	firstName: profile.firstName,
	birthDate: profile.birthDate,
	phone: profile.phone,
	avatarUri: profile.avatarUri,
})

export const buildDisplayName = (firstName: string) => firstName.trim()
