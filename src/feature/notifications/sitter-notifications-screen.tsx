import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DATA_SITTER_NOTIFICATIONS } from '@/entity/notifications/model'
import { SitterNotificationRow } from './sitter-notification-row'

export function SitterNotificationsScreen() {
	return (
		<SafeAreaView style={styles.screen} edges={['top']}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Уведомления</Text>
			</View>
			<ScrollView contentContainerStyle={styles.scrollContent}>
				<Text style={styles.groupTitle}>Недавнее</Text>
				{DATA_SITTER_NOTIFICATIONS.map(item => (
					<SitterNotificationRow key={item.id} item={item} />
				))}
			</ScrollView>
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
	groupTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#000',
		marginBottom: 23,
		marginTop: 32,
	},
})
