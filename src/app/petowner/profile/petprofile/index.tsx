import { ProfilePetScreen } from '@/feature/profile/ui/profile-screen-pet'
import { UserRole } from '@/entity/user/types'
import { useLogout } from '@/feature/home/lib/logout'

export default function ProfilePet() {
	const logout = useLogout()
	return <ProfilePetScreen role={UserRole.PET} onLogout={logout} />
}
