import { Modal, Pressable, Text, View } from 'react-native'

import { AvatarPickSource } from '../lib/pick-profile-avatar'
import { profileEditStyles } from './profile-edit-styles'

type AvatarSourceSheetProps = {
	visible: boolean
	onClose: () => void
	onSelectSource: (source: AvatarPickSource) => void
}

export function AvatarSourceSheet({
	visible,
	onClose,
	onSelectSource,
}: AvatarSourceSheetProps) {
	return (
		<Modal
			visible={visible}
			transparent
			animationType='fade'
			onRequestClose={onClose}
		>
			<Pressable style={profileEditStyles.sourceOverlay} onPress={onClose}>
				<Pressable
					style={profileEditStyles.sourceSheet}
					onPress={event => event.stopPropagation()}
				>
					<Text style={profileEditStyles.sourceTitle}>
						Откуда добавить фото?
					</Text>
					<Pressable
						style={profileEditStyles.sourceOption}
						onPress={() => onSelectSource('library')}
					>
						<Text style={profileEditStyles.sourceOptionText}>Галерея</Text>
					</Pressable>
					<Pressable
						style={profileEditStyles.sourceOption}
						onPress={() => onSelectSource('camera')}
					>
						<Text style={profileEditStyles.sourceOptionText}>
							Сделать фото
						</Text>
					</Pressable>
					<Pressable style={profileEditStyles.sourceCancel} onPress={onClose}>
						<Text style={profileEditStyles.sourceCancelText}>Отмена</Text>
					</Pressable>
				</Pressable>
			</Pressable>
		</Modal>
	)
}
