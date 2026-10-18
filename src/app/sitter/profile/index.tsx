import { UserRole } from '@/entity/user/types'
import { useLogout } from '@/feature/home/lib/logout'
import { ProfileScreen } from '@/feature/profile/ui/profile-screen'

export default function SitterProfileRoute() {
	const logout = useLogout()

	return <ProfileScreen role={UserRole.PET_NURSE} onLogout={logout} />
}
