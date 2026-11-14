import CloseIcon from '@/shared/ui/Icons/Close'
import { Colors, Fonts } from '@/shared/styles'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type SelectionChipProps = {
	label: string
	onRemove: () => void
}

export function SelectionChip({ label, onRemove }: SelectionChipProps) {
	return (
		<View style={styles.chip}>
			<Text style={styles.label}>{label}</Text>
			<Pressable
				onPress={onRemove}
				hitSlop={8}
				style={({ pressed }) => [styles.remove, pressed && { opacity: 0.6 }]}
			>
				<CloseIcon width={16} height={16} color={Colors.textPrimary} />
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	chip: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: Colors.buttonPrimary,
		borderRadius: 15,
		paddingVertical: 10,
		paddingLeft: 16,
		paddingRight: 10,
		gap: 8,
		maxWidth: '100%',
	},
	label: {
		fontSize: 15,
		color: Colors.textPrimary,
		fontFamily: Fonts.sansBold,
		flexShrink: 1,
	},
	remove: {
		padding: 2,
	},
})
