import LogOutIcon from '@/shared/ui/Icons/LogOut'
import ProfileEditIcon from '@/shared/ui/Icons/ProfileEdit'
import { Pressable, Text, View } from 'react-native'

import { styles } from './styles'

type ProfileHeaderProps = {
	onLogout: () => void
	onPressEdit?: () => void
}

export function ProfileHeader({ onLogout, onPressEdit }: ProfileHeaderProps) {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>Профиль</Text>
			<View style={styles.headerActions}>
				<Pressable
					onPress={onPressEdit}
					style={({ pressed }) => [
						styles.headerButton,
						pressed && { opacity: 0.6 },
					]}
					hitSlop={8}
				>
					<ProfileEditIcon width={28} height={34} />
				</Pressable>
				<Pressable
					onPress={onLogout}
					style={({ pressed }) => [
						styles.headerButton,
						pressed && { opacity: 0.6 },
					]}
					hitSlop={8}
				>
					<LogOutIcon width={28} height={30} />
				</Pressable>
			</View>
		</View>
	)
}
