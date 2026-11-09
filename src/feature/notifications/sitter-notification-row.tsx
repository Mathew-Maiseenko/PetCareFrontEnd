import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { SitterNotificationItem } from '@/entity/notifications/types'
import { NotificationAction } from './notification-action'

type Props = {
	item: SitterNotificationItem
}

export const SitterNotificationRow = ({ item }: Props) => {
	return (
		<View style={styles.row}>
			<View style={styles.leftContent}>
				<Image source={{ uri: item.avatarUri }} style={styles.avatar} />
				<View style={styles.textContainer}>
					<Text style={styles.name}>{item.name}</Text>
					<Text style={styles.dateValue}>{item.date}</Text>
					<Text style={styles.dateValue}>({item.time})</Text>
				</View>
			</View>

			<NotificationAction />
		</View>
	)
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 20,
	},
	leftContent: {
		flexDirection: 'row',
		alignItems: 'center',
		flex: 1,
	},
	avatar: {
		width: 59,
		height: 59,
		borderRadius: '50%',
		marginRight: 17,
	},
	textContainer: {
		justifyContent: 'center',
	},
	name: {
		fontSize: 15,
		fontWeight: 'bold',
		color: '#000',
		marginBottom: 5,
	},
	dateValue: {
		fontSize: 13,
		color: '#A0A0A0',
	},
})
