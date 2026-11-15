import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { NotificationItem } from '@/entity/notifications/types'
import { StatusBadge } from './status-badge'

export const NotificationRow = ({ item }: { item: NotificationItem }) => {
	return (
		<View style={styles.row}>
			<Image source={{ uri: item.avatarUri }} style={styles.avatar} />
			<View style={styles.textContainer}>
				<Text style={styles.name}>{item.name}</Text>
				<Text style={styles.dateValue}>
					Забронировано на {item.date} ({item.time})
				</Text>
			</View>
			<StatusBadge status={item.status} />
		</View>
	)
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 16,
	},
	avatar: {
		width: 59,
		height: 59,
		borderRadius: '50%',
		marginRight: 12,
	},
	textContainer: {
		justifyContent: 'center',
		width: 160,
	},
	name: {
		fontSize: 15,
		fontWeight: 'bold',
		color: '#000',
		marginBottom: 2,
	},
	dateValue: {
		fontSize: 13,
		color: '#8D8B8B',
	},
})
