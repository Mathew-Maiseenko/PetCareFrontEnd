import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import { useRouter } from 'expo-router'
import CloseIcon from '@/shared/ui/Icons/Close'
import { StepBackButton } from '@/shared/ui/StepBackButton'

type Props = {
	currentStep: number
	totalSteps: number
	onBack?: () => void
}

export function AdditionalInfoHeader({
	currentStep,
	totalSteps,
	onBack,
}: Props) {
	const router = useRouter()

	return (
		<View style={styles.header}>
			<View style={styles.side}>
				{currentStep > 0 && onBack ? (
					<StepBackButton onPress={onBack} color='#FEBC46' rotate='90deg' />
				) : (
					<View style={{ width: 32 }} />
				)}
			</View>
			<View style={styles.dots}>
				{Array.from({ length: totalSteps }).map((_, index) => (
					<View
						key={index}
						style={[
							styles.dot,
							index === currentStep ? styles.dotActive : styles.dotInactive,
						]}
					/>
				))}
			</View>
			<View style={[styles.side, { alignItems: 'flex-end' }]}>
				<Pressable onPress={() => router.back()} hitSlop={12}>
					<CloseIcon width={24} height={24} color='#A0A0A0' />
				</Pressable>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		paddingVertical: 16,
	},
	side: {
		width: 40,
		justifyContent: 'center',
	},
	dots: {
		flexDirection: 'row',
		gap: 8,
		alignItems: 'center',
	},
	dot: {
		width: 8,
		height: 8,
		borderRadius: 4,
	},
	dotActive: {
		backgroundColor: '#FEBC46',
	},
	dotInactive: {
		backgroundColor: '#D3D3D3',
	},
})
