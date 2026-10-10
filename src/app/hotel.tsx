import { UserRole } from '@/entity/user/types'
import { RoleHomeScreen } from '@/feature/home/ui/role-home'

export default function HotelHomeRoute() {
	return <RoleHomeScreen role={UserRole.PET_HOTEL} title='Зоогостиница' />
}
