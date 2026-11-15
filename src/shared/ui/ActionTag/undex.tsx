import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import CloseIcon from '@/shared/ui/Icons/Close'

type ActionTagProps = {
	text: string
	onRemove: () => void
}

export function ActionTag({ text, onRemove }: ActionTagProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{text}</Text>
			<Pressable onPress={onRemove} hitSlop={8}>
				<CloseIcon width={16} height={16} color='#000000' />
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#FEBC46',
		paddingVertical: 10,
		paddingHorizontal: 16,
		borderRadius: 20,
		alignSelf: 'flex-start',
		gap: 12,
	},
	text: {
		fontSize: 14,
		color: '#000000',
	},
})
