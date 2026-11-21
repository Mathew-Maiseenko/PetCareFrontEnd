import {
	ROLE_TABS,
	ROLE_TABS_PETOWNER,
	RoleTabIconProps,
	RoleTabName,
	RoleTabNamePetOwner,
} from '@/shared/navigation/role-tabs'
import { Colors, Gaps } from '@/shared/styles'
import { Href, router, usePathname, useSegments } from 'expo-router'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const INACTIVE_COLOR = '#9D9D9D'

type TabItem = (typeof ROLE_TABS)[number] | (typeof ROLE_TABS_PETOWNER)[number]

const PROVIDER_TAB_ICON_SIZE: Record<
	RoleTabName,
	Pick<RoleTabIconProps, 'width' | 'height'>
> = {
	profile: { width: 34, height: 34 },
	calendar: { width: 34, height: 34 },
	orders: { width: 30, height: 28 },
	notifications: { width: 33, height: 33 },
}

const PET_OWNER_TAB_ICON_SIZE: Record<
	RoleTabNamePetOwner,
	Pick<RoleTabIconProps, 'width' | 'height'>
> = {
	home: { width: 28, height: 28 },
	favorites: { width: 28, height: 28 },
	notifications: { width: 33, height: 33 },
	profile: { width: 34, height: 34 },
}

const isTabFocused = (pathname: string, href: Href, tabName: string) => {
	const hrefString = typeof href === 'string' ? href : String(href)

	if (pathname === hrefString || pathname.startsWith(`${hrefString}/`)) {
		return true
	}

	if (pathname.endsWith(`/${tabName}`)) {
		return true
	}

	if (tabName === 'home' && pathname.startsWith('/pet-owner/main')) {
		return true
	}

	return false
}

export function RoleTabBar() {
	const pathname = usePathname()
	const segments = useSegments()
	const insets = useSafeAreaInsets()
	const roleRoot = segments[0]
	const hideTabBar = (segments as string[]).includes('setup')

	const isProvider = roleRoot === 'sitter' || roleRoot === 'hotel'
	const isOwner = roleRoot === 'petowner' || roleRoot === 'pet-owner'

	if (!isProvider && !isOwner) {
		return null
	}

	if (hideTabBar) {
		return null
	}

	if (
		isOwner &&
		(pathname.includes('/settings') || pathname.includes('/blocked'))
	) {
		return null
	}

	const tabs: TabItem[] = isOwner ? ROLE_TABS_PETOWNER : ROLE_TABS

	return (
		<View
			style={[styles.bar, { paddingBottom: Math.max(insets.bottom, Gaps.two) }]}
		>
			{tabs.map(tab => {
				const href = tab.href ?? (`/${roleRoot}/${tab.name}` as Href)
				const focused = isTabFocused(pathname, href, tab.name)
				const color = focused ? Colors.iconAccent : INACTIVE_COLOR
				const iconSize = isOwner
					? PET_OWNER_TAB_ICON_SIZE[tab.name as RoleTabNamePetOwner]
					: PROVIDER_TAB_ICON_SIZE[tab.name as RoleTabName]

				return (
					<Pressable
						key={tab.name}
						onPress={() => {
							if (!focused) {
								router.replace(href)
							}
						}}
						style={({ pressed }) => [styles.item, pressed && styles.pressed]}
					>
						<tab.Icon
							color={color}
							focused={focused}
							width={iconSize.width}
							height={iconSize.height}
						/>
						<Text style={[styles.label, { color }]}>{tab.label}</Text>
					</Pressable>
				)
			})}
		</View>
	)
}

const styles = StyleSheet.create({
	bar: {
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'space-around',
		backgroundColor: Colors.backgroundPrimary,
		borderTopWidth: StyleSheet.hairlineWidth,
		borderTopColor: '#E8E8E8',
		paddingTop: Gaps.two,
		paddingHorizontal: Gaps.two,
	},
	item: {
		flex: 1,
		alignItems: 'center',
		gap: 4,
	},
	pressed: {
		opacity: 0.6,
	},
	label: {
		fontSize: 11,
		fontWeight: 500,
		textAlign: 'center',
	},
})