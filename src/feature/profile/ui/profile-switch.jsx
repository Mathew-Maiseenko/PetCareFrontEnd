import React, { useState } from 'react'
import { Text, View, Switch, StyleSheet } from 'react-native'

export function ProfileSwitch({ caption, text }) {
	const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false)

	return (
		<View style={styles.notificationSection}>
			<View style={styles.notificationTextContainer}>
				<Text style={styles.notificationTitle}>{caption}</Text>
				<Text style={styles.notificationSubtitle}>{text}</Text>
			</View>
			<Switch
				trackColor={{ false: '#D3D3D3', true: '#FEBC46' }}
				thumbColor={isNotificationsEnabled ? '#FFFFFF' : '#f4f3f4'}
				onValueChange={() => setIsNotificationsEnabled(!isNotificationsEnabled)}
				value={isNotificationsEnabled}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	notificationSection: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingVertical: 16,
		borderRadius: 15,
		backgroundColor: '#FFFFFF',
	},
	notificationTextContainer: {
		flex: 1,
		paddingRight: 15,
	},
	notificationTitle: {
		fontSize: 20,
		fontWeight: '600',
		color: '#000000',
		marginBottom: 4,
	},
	notificationSubtitle: {
		fontSize: 15,
		color: '#B5B5B5',
		lineHeight: 18,
	},
})
