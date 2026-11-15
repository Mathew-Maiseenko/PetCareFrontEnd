import { Dots } from '@/shared/ui/Icons/Dots'
import { StepBackButton } from '@/shared/ui/StepBackButton'
import React from 'react'
import { useRouter } from 'expo-router'
import { Pressable, View, StyleSheet } from 'react-native'

type ProfileHeaderProps = {
	onPressBack: () => void
	onPressMenu: () => void
}

export function ViewProfileHeader({
	onPressBack,
	onPressMenu,
}: ProfileHeaderProps) {
	const router = useRouter()
	return (
		<View style={styles.header}>
			<Pressable
				onPress={onPressBack}
				style={({ pressed }) => [styles.button, pressed && { opacity: 0.6 }]}
				hitSlop={12}
			>
				<StepBackButton onPress={() => router.back()} color='#FEBC46' />
			</Pressable>
			<Pressable
				onPress={onPressMenu}
				style={({ pressed }) => [styles.button, pressed && { opacity: 0.6 }]}
				hitSlop={12}
			>
				<Dots />
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
	},
	button: {
		padding: 8,
	},
})
