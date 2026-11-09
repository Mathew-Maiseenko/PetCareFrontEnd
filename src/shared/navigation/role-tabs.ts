import CalendarIcon from '@/shared/ui/Icons/Calendar'
import NotificationIcon from '@/shared/ui/Icons/Notification'
import OrdersIcon from '@/shared/ui/Icons/Orders'
import ProfileIcon from '@/shared/ui/Icons/Profile'
import FavoritesIcon from '@/shared/ui/Icons/Heart'
import HomeIcon from '../ui/Icons/Home'
import { ComponentType } from 'react'
import { SvgProps } from 'react-native-svg'

export const ROLE_TAB_NAMES = [
	'profile',
	'calendar',
	'orders',
	'notifications',
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

export const ROLE_TAB_NAMES_PETOWNER = [
	'profile',
	'home',
	'favorites',
	'notifications',
] as const

export type RoleTabNamePetOwner = (typeof ROLE_TAB_NAMES_PETOWNER)[number]

export type RoleTabItemPetOwner = {
	name: RoleTabNamePetOwner
	label: string
	Icon: ComponentType<SvgProps>
}

export const ROLE_TABS_PETOWNER: RoleTabItemPetOwner[] = [
	{ name: 'home', label: 'Главная', Icon: HomeIcon },
	{ name: 'favorites', label: 'Избранное', Icon: FavoritesIcon },
	{ name: 'notifications', label: 'Уведомления', Icon: NotificationIcon },
	{ name: 'profile', label: 'Профиль', Icon: ProfileIcon },
]
