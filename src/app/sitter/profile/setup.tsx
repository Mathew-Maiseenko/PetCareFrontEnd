import { UserRole } from '@/entity/user/types'
import { ProfileSetupScreen } from '@/feature/profile/ui/profile-setup/profile-setup-screen'

export default function SitterProfileSetupRoute() {
	return <ProfileSetupScreen role={UserRole.PET_NURSE} />
}
