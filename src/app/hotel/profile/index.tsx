import { UserRole } from '@/entity/user/types'
import { RoleHomeScreen } from '@/feature/home/ui/role-home'

export default function HotelProfileRoute() {
	return (
		<RoleHomeScreen role={UserRole.PET_HOTEL} title='Зоогостиница' withTabBar />
	)
}
