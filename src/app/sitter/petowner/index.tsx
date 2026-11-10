import { ViewProfileOwnerScreen } from '@/feature/profile/ui/view-profile-petonwer-screen'
import { UserRole } from '@/entity/user/types'
import { useLogout } from '@/feature/home/lib/logout'

export default function ViewProfilePetOnwer() {
	const logout = useLogout()
	return <ViewProfileOwnerScreen role={UserRole.PET_OWNER} onLogout={logout} />
}
