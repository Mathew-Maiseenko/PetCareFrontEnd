import { ROLE_TABS } from '@/shared/navigation/role-tabs'
import { Colors, Gaps } from '@/shared/styles'
import { Href, router, usePathname, useSegments } from 'expo-router'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const INACTIVE_COLOR = '#9D9D9D'

export function RoleTabBar() {
	const pathname = usePathname()
	const segments = useSegments()
	const insets = useSafeAreaInsets()
	const roleRoot = segments[0]

	if (roleRoot !== 'sitter' && roleRoot !== 'hotel' && roleRoot != 'petowner') {
		return null
	}

	return (
		<View
			style={[styles.bar, { paddingBottom: Math.max(insets.bottom, Gaps.two) }]}
		>
			{ROLE_TABS.map(tab => {
				const href = `/${roleRoot}/${tab.name}` as Href
				const focused = pathname === href || pathname.endsWith(`/${tab.name}`)
				const color = focused ? Colors.buttonPrimary : INACTIVE_COLOR

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
						<tab.Icon color={color} width={28} height={28} />
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
		alignItems: 'flex-start',
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
