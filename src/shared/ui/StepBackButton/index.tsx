import { Colors } from '@/shared/styles'
import ArrowIcon from '@/shared/ui/Icons/Arrow'
import { Pressable, StyleSheet, View } from 'react-native'

type StepBackButtonProps = {
	onPress: () => void
}

export function StepBackButton({ onPress }: StepBackButtonProps) {
	return (
		<Pressable
			onPress={onPress}
			hitSlop={12}
			style={({ pressed }) => [styles.button, pressed && styles.pressed]}
		>
			<View style={styles.icon}>
				<ArrowIcon width={24} height={24} stroke={Colors.textPrimary} />
			</View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	button: {
		padding: 4,
	},
	pressed: {
		opacity: 0.4,
	},
	icon: {
		transform: [{ rotate: '90deg' }],
	},
})
