import React from 'react'
import {
	Modal,
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Pressable,
} from 'react-native'
import { Share } from '@/shared/ui/Icons/Share'
import { Block } from '@/shared/ui/Block'

type ProfileActionsMenuProps = {
	visible: boolean
	onClose: () => void
	onShare: () => void
	onBlock: () => void
}

export function ProfileActionsMenu({
	visible,
	onClose,
	onShare,
	onBlock,
}: ProfileActionsMenuProps) {
	return (
		<Modal
			visible={visible}
			transparent
			animationType='fade'
			onRequestClose={onClose}
		>
			<Pressable style={styles.overlay} onPress={onClose}>
				<View style={styles.menuContainer}>
					<TouchableOpacity style={styles.menuItem} onPress={onShare}>
						<Share />
						<Text style={styles.menuText}>Поделиться профилем</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.menuItem} onPress={onBlock}>
						<Block />
						<Text style={styles.menuText}>Заблокировать</Text>
					</TouchableOpacity>
				</View>
			</Pressable>
		</Modal>
	)
}

const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.3)',
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingBottom: 10,
	},
	menuContainer: {
		width: '80%',
		backgroundColor: '#FFFFFF',
		borderRadius: 16,
		paddingVertical: 10,
		paddingHorizontal: 20,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 8,
		elevation: 5,
	},
	menuItem: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 16,
	},
	menuText: {
		fontSize: 16,
		color: '#000000',
		marginLeft: 12,
	},
})
