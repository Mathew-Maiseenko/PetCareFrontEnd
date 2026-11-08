import { ProfileOwnerScreen } from '@/feature/profile/ui/profile-screen-owner'
import { UserRole } from '@/entity/user/types'
import { useLogout } from '@/feature/home/lib/logout'

export default function ProfilePetOnwer() {
	const logout = useLogout()
	return <ProfileOwnerScreen role={UserRole.PET_OWNER} onLogout={logout} />
}
