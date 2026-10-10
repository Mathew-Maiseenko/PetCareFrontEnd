import { UserRole } from '@/entity/user/types'
import { RoleHomeScreen } from '@/feature/home/ui/role-home'

export default function SitterHomeRoute() {
	return <RoleHomeScreen role={UserRole.PET_NURSE} title='Зооняня' />
}
