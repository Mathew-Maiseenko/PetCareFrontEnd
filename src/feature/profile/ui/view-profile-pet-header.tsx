import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { StepBackButton } from '@/shared/ui/StepBackButton'

type ScreenHeaderProps = {
	onPressBack: () => void
}

export function ViewProfilePetHeader({ onPressBack }: ScreenHeaderProps) {
	return (
		<View style={styles.header}>
			<View style={styles.left}>
				<StepBackButton onPress={onPressBack} color='#9D9D9D' />
			</View>
			<View style={styles.center}>
				<Text style={styles.title}>Питомец</Text>
			</View>
			<View style={styles.right}>
				<StepBackButton onPress={onPressBack} color='#9D9D9D' rotate='-90deg' />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#FFFFFF',
	},
	left: {
		flex: 1,
		alignItems: 'flex-start',
		padding: 8,
	},
	center: {
		flex: 3,
	},
	right: {
		flex: 1,
		alignItems: 'flex-end',
		padding: 8,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#000000',
	},
})
