import { useUserProfileStore } from '@/entity/user/model'
import { ProviderRole, UserOwnerProfile } from '@/entity/user/types'
import { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { PROVIDER_ROLE_LABEL } from '../lib/role-label'
import { ViewProfileHeader } from './view-profile-header'
import { ProfileIdentity } from './profile-identity'
import { ProfilePhone } from './profile-phone'
import { ProfileEditModal } from './profile-edit-modal'
import { ProfileActionsMenu } from './profile-actions-menu'
import { styles } from './styles'
import { StyledButton } from '@/shared/ui/Button'
import { RoleTabBar } from '@/shared/ui/RoleTabBar'
import { useRouter } from 'expo-router'

type ProfileScreenProps = {
	role: ProviderRole
	onLogout: () => void
	onPressEdit?: () => void
	onPressDetails?: () => void
}

export function ViewProfileOwnerScreen({ role, onLogout }: ProfileScreenProps) {
	const profile = useUserProfileStore(state => state.profiles[role])
	const typedProfile = profile as UserOwnerProfile
	const [isEditOpen, setIsEditOpen] = useState(false)

	const router = useRouter()
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const handleNavigate = () => {
		router.push('/sitter/notifications/petowner/pet')
	}

	const handleShare = () => {
		console.log('Поделиться')
		setIsMenuOpen(false)
	}

	const handleBlock = () => {
		console.log('Заблокировать')
		setIsMenuOpen(false)
	}

	return (
		<SafeAreaView style={styles.screen} edges={['top']}>
			<ScrollView contentContainerStyle={{ gap: 10 }}>
				<View style={styles.topBlock}>
					<ViewProfileHeader
						onPressBack={() => router.back()}
						onPressMenu={() => setIsMenuOpen(true)}
					/>
					<ProfileIdentity
						name={typedProfile.name}
						roleLabel={PROVIDER_ROLE_LABEL[role]}
						avatarUri={typedProfile.avatarUri}
					/>
					<ProfilePhone phone={typedProfile.phone} />
				</View>
				<StyledButton
					style={{ width: '90%', marginLeft: '5%' }}
					onPress={handleNavigate}
				>
					Личный кабинет питомца
				</StyledButton>
			</ScrollView>
			<ProfileEditModal
				visible={isEditOpen}
				role={role}
				profile={typedProfile}
				onClose={() => setIsEditOpen(false)}
			/>
			<ProfileActionsMenu
				visible={isMenuOpen}
				onClose={() => setIsMenuOpen(false)}
				onShare={handleShare}
				onBlock={handleBlock}
			/>
		</SafeAreaView>
	)
}
