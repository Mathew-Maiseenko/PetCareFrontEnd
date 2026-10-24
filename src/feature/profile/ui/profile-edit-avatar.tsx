import { Avatar } from '@/shared/ui/Avatar'
import { useState } from 'react'
import { Pressable, Text } from 'react-native'

import { pickProfileAvatarFromSource } from '../lib/pick-profile-avatar'
import { AvatarSourceSheet } from './avatar-source-sheet'
import { AVATAR_SIZE, profileEditStyles } from './profile-edit-styles'

type ProfileEditAvatarProps = {
	avatarUri: string | null
	onAvatarChange: (uri: string | null) => void
}

export function ProfileEditAvatar({
	avatarUri,
	onAvatarChange,
}: ProfileEditAvatarProps) {
	const [isSourceSheetOpen, setIsSourceSheetOpen] = useState(false)

	const openSourceSheet = () => setIsSourceSheetOpen(true)

	const handleSelectSource = async (source: 'library' | 'camera') => {
		setIsSourceSheetOpen(false)
		const uri = await pickProfileAvatarFromSource(source)

		if (uri) {
			onAvatarChange(uri)
		}
	}

	return (
		<>
			<Pressable
				style={profileEditStyles.avatarPressable}
				onPress={openSourceSheet}
			>
				<Avatar uri={avatarUri} size={AVATAR_SIZE} />
				<Text style={profileEditStyles.selectPhotoText}>
					Выбрать фотографию
				</Text>
			</Pressable>
			<AvatarSourceSheet
				visible={isSourceSheetOpen}
				onClose={() => setIsSourceSheetOpen(false)}
				onSelectSource={handleSelectSource}
			/>
		</>
	)
}
