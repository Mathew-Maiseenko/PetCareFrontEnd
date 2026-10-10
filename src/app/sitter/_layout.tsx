import { RoleTabBar } from '@/shared/ui/RoleTabBar'
import { Colors } from '@/shared/styles'
import { Slot } from 'expo-router'
import { StyleSheet, View } from 'react-native'

export default function SitterLayout() {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Slot />
			</View>
			<RoleTabBar />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.backgroundPrimary,
	},
	content: {
		flex: 1,
	},
})
