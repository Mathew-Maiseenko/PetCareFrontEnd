import CalendarIcon from '@/shared/ui/Icons/Calendar'
import FavoritesIcon from '@/shared/ui/Icons/Heart'
import HomeIcon from '@/shared/ui/Icons/Home'
import NotificationIcon from '@/shared/ui/Icons/Notification'
import OrdersIcon from '@/shared/ui/Icons/Orders'
import ProfileIcon from '@/shared/ui/Icons/Profile'
import { ComponentType } from 'react'
import { SvgProps } from 'react-native-svg'
import { Href } from 'expo-router'

export type RoleTabIconProps = SvgProps & {
	focused?: boolean
}

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
	Icon: ComponentType<RoleTabIconProps>
	href?: Href
}

export const ROLE_TABS: RoleTabItem[] = [
	{
		name: 'profile',
		label: 'Профиль',
		Icon: ProfileIcon,
		href: '/sitter/profile',
	},
	{
		name: 'calendar',
		label: 'Календарь',
		Icon: CalendarIcon,
		href: '/sitter/calendar',
	},
	{ name: 'orders', label: 'Заказы', Icon: OrdersIcon, href: '/sitter/orders' },
	{
		name: 'notifications',
		label: 'Уведомления',
		Icon: NotificationIcon,
		href: '/sitter/notifications',
	},
]

export const ROLE_TAB_NAMES_PETOWNER = [
	'home',
	'favorites',
	'notifications',
	'profile',
] as const

export type RoleTabNamePetOwner = (typeof ROLE_TAB_NAMES_PETOWNER)[number]

export type RoleTabItemPetOwner = {
	name: RoleTabNamePetOwner
	label: string
	Icon: ComponentType<RoleTabIconProps>
	href: Href
}

export const ROLE_TABS_PETOWNER: RoleTabItemPetOwner[] = [
	{ name: 'home', label: 'Главная', Icon: HomeIcon, href: '/pet-owner/main' },
	{
		name: 'favorites',
		label: 'Избранное',
		Icon: FavoritesIcon,
		href: '/pet-owner/favorites',
	},
	{
		name: 'notifications',
		label: 'Уведомления',
		Icon: NotificationIcon,
		href: '/pet-owner/notifications',
	},
	{
		name: 'profile',
		label: 'Профиль',
		Icon: ProfileIcon,
		href: '/pet-owner/profile',
	},
]
