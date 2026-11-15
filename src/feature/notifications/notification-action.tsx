import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import Reject from '@/shared/ui/Icons/Reject'
import { StyledButton } from '@/shared/ui/Button'
import { useRouter } from 'expo-router'

export function NotificationAction() {
	const router = useRouter()
	const handleNavigate = () => {
		router.push('/sitter/notifications/petowner')
	}
	return (
		<View style={styles.container}>
			<TouchableOpacity>
				<Reject style={styles.rejectButton} />
			</TouchableOpacity>
			<TouchableOpacity>
				<StyledButton onPress={handleNavigate} style={styles.acceptButton}>
					Принять
				</StyledButton>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 15,
	},
	rejectButton: {
		width: 30,
		height: 30,
	},
	acceptButton: {
		width: 120,
	},
})
