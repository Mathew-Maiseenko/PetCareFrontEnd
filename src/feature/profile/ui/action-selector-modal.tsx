import React from 'react'
import {
	Modal,
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Pressable,
} from 'react-native'
import CloseIcon from '@/shared/ui/Icons/Close'
import { StyledButton } from '@/shared/ui/Button'

type Props = {
	visible: boolean
	options: string[]
	selectedActions: string[]
	onToggleAction: (action: string) => void
	onClose: () => void
	onConfirm: () => void
}

export function ActionSelectorModal({
	visible,
	options,
	selectedActions,
	onToggleAction,
	onClose,
	onConfirm,
}: Props) {
	return (
		<Modal visible={visible} transparent animationType='fade'>
			<View style={styles.overlay}>
				<View style={styles.modalContent}>
					<View style={styles.header}>
						<Text style={styles.title}>Выбрать действие</Text>
						<Pressable onPress={onClose} hitSlop={12}>
							<CloseIcon width={24} height={24} color='#A0A0A0' />
						</Pressable>
					</View>

					<View style={styles.list}>
						{options.map(action => {
							const isSelected = selectedActions.includes(action)
							return (
								<TouchableOpacity
									key={action}
									style={styles.listItem}
									onPress={() => onToggleAction(action)}
								>
									<Text style={styles.listText}>{action}</Text>
									<View
										style={[
											styles.checkbox,
											isSelected && styles.checkboxSelected,
										]}
									>
										{isSelected && <View style={styles.checkboxInner} />}
									</View>
								</TouchableOpacity>
							)
						})}
					</View>

					<StyledButton full onPress={onConfirm} style={{ marginTop: 20 }}>
						Выбрать
					</StyledButton>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.4)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalContent: {
		width: '90%',
		backgroundColor: '#FFF',
		borderRadius: 20,
		padding: 20,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 24,
	},
	title: { fontSize: 20, fontWeight: 'bold' },
	list: { gap: 16 },
	listItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	listText: { fontSize: 16, color: '#000' },
	checkbox: {
		width: 24,
		height: 24,
		borderRadius: 6,
		borderWidth: 1.5,
		borderColor: '#D3D3D3',
		justifyContent: 'center',
		alignItems: 'center',
	},
	checkboxSelected: { borderColor: '#FEBC46' },
	checkboxInner: {
		width: 14,
		height: 14,
		borderRadius: 3,
		backgroundColor: '#FEBC46',
	},
})
