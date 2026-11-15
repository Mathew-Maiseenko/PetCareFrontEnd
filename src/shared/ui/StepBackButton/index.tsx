import { Colors } from '@/shared/styles'
import ArrowIcon from '@/shared/ui/Icons/Arrow'
import { Pressable, StyleSheet, View } from 'react-native'

type StepBackButtonProps = {
	onPress: () => void
	color?: string
	rotate?: string
}

export function StepBackButton({
	onPress,
	color = '#000',
	rotate = '90deg',
}: StepBackButtonProps) {
	return (
		<Pressable
			onPress={onPress}
			hitSlop={12}
			style={({ pressed }) => [styles.button, pressed && styles.pressed]}
		>
			<View style={[{ transform: [{ rotate }] }]}>
				<ArrowIcon width={24} height={24} stroke={color} />
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
})
