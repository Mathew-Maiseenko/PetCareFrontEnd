import { ViewProfilePetScreen } from '@/feature/profile/ui/view-profile-pet-screen'
import { UserRole } from '@/entity/user/types'

export default function ViewProfilePet() {
	return <ViewProfilePetScreen role={UserRole.PET} />
}
