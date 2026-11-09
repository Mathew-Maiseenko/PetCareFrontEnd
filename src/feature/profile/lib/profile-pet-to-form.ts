import { PetProfile } from '@/entity/user/types'

import { ProfilePetEditFormValues } from './validation/profile-pet-edit'

export const profilePetToFormValues = (
	profile: PetProfile,
): ProfilePetEditFormValues => ({
	name: profile.name,
	type: profile.type,
	breed: profile.breed,
	age: profile.age,
	avatarUri: profile.avatarUri,
})
