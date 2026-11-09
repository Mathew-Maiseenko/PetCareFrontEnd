import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DATA_NOTIFICATIONS } from '@/entity/notifications/model'
import { NotificationGroup } from './notification-group'
import { RoleTabBar } from '@/shared/ui/RoleTabBar'

export function NotificationsScreen() {
	return (
		<SafeAreaView style={styles.screen} edges={['top']}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Уведомления</Text>
			</View>

			<ScrollView contentContainerStyle={styles.scrollContent}>
				{DATA_NOTIFICATIONS.map((group, index) => (
					<NotificationGroup key={index} group={group} />
				))}
			</ScrollView>
			<RoleTabBar />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: '#FFFFFF',
	},
	header: {
		paddingHorizontal: 20,
		paddingVertical: 15,
	},
	headerTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#000',
	},
	scrollContent: {
		paddingHorizontal: 20,
		paddingBottom: 20,
	},
})
