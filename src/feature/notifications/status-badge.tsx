import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NotificationStatus } from '@/entity/notifications/types'

export const StatusBadge = ({ status }: { status: NotificationStatus }) => {
	const getBackgroundColor = () => {
		if (status === 'Ожидание') return '#F5F5F5'
		if (status === 'Принято') return '#EBEBEB'
		return '#F0F0F0'
	}

	return (
		<View style={[styles.badge, { backgroundColor: getBackgroundColor() }]}>
			<Text style={styles.badgeText}>{status}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	badge: {
		paddingHorizontal: 18,
		paddingVertical: 8,
		marginLeft: 10,
	},
	badgeText: {
		fontSize: 14,
		fontWeight: '600',
		color: '#000',
	},
})
