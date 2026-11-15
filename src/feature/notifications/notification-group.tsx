import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NotificationGroupType } from '@/entity/notifications/types'
import { NotificationRow } from './notification-row'

export const NotificationGroup = ({
	group,
}: {
	group: NotificationGroupType
}) => {
	return (
		<View style={styles.group}>
			<Text style={styles.groupTitle}>{group.title}</Text>
			{group.data.map(item => (
				<NotificationRow key={item.id} item={item} />
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	group: {
		marginBottom: 31,
	},
	groupTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#000',
		marginBottom: 23,
	},
})
