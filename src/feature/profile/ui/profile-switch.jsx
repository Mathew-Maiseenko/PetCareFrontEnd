import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Switch } from 'react-native-switch'

export function ProfileSwitch({ caption, text }) {
	const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false)

	return (
		<View style={styles.notificationSection}>
			<View style={styles.notificationTextContainer}>
				<Text style={styles.notificationTitle}>{caption}</Text>
				<Text style={styles.notificationSubtitle}>{text}</Text>
			</View>
			<Switch
				value={isNotificationsEnabled}
				onValueChange={() => setIsNotificationsEnabled(!isNotificationsEnabled)}
				circleSize={24}
				barHeight={32}
				switchWidthMultiplier={2.6}
				renderActiveText={false}
				renderInActiveText={false}
				circleBorderWidth={0}
				backgroundActive={'#FEBC46'}
				backgroundInactive={'#D3D3D3'}
				circleColorActive={'#FFFFFF'}
				circleColorInactive={'#FFFFFF'}
				changeValueImmediately={true}
				innerCircleStyle={{ alignItems: 'center', justifyContent: 'center' }}
				switchBorderRadius={30}
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
