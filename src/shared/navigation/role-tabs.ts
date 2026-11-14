import CalendarIcon from '@/shared/ui/Icons/Calendar'
import NotificationIcon from '@/shared/ui/Icons/Notification'
import OrdersIcon from '@/shared/ui/Icons/Orders'
import ProfileIcon from '@/shared/ui/Icons/Profile'
import HomeIcon from '../ui/Icons/Home'
import HeartIcon from '../ui/Icons/Heart'
import { ComponentType } from 'react'
import { SvgProps } from 'react-native-svg'

export const ROLE_TAB_NAMES = [
	'profile',
	'calendar',
	'orders',
	'notifications',
	'main', 
	'favorites',
] as const

export type RoleTabName = (typeof ROLE_TAB_NAMES)[number]

export type RoleTabItem = {
	name: RoleTabName
	label: string
	Icon: ComponentType<SvgProps>
}

export const ROLE_TABS: RoleTabItem[] = [
	{ name: 'profile', label: 'Профиль', Icon: ProfileIcon },
	{ name: 'calendar', label: 'Календарь', Icon: CalendarIcon },
	{ name: 'orders', label: 'Заказы', Icon: OrdersIcon },
	{ name: 'notifications', label: 'Уведомления', Icon: NotificationIcon },
]

export const OWNER_TABS: RoleTabItem[] = [
	{ name: 'main', label: 'Главная', Icon: HomeIcon },
	{ name: 'notifications', label: 'Уведомления', Icon: NotificationIcon },
	{ name: 'favorites', label: 'Избранные', Icon: HeartIcon },
	{ name: 'profile', label: 'Профиль', Icon: ProfileIcon },
]