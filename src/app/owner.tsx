import { UserRole } from '@/entity/user/types'
import { RoleHomeScreen } from '@/feature/home/ui/role-home'

export default function OwnerHomeRoute() {
	return <RoleHomeScreen role={UserRole.PET_OWNER} title='Владелец питомца' />
}
