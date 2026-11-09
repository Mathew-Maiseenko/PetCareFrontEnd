import { useUserProfileStore } from '@/entity/user/model'
import { ProviderRole, UserOwnerProfile } from '@/entity/user/types'
import { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { PROVIDER_ROLE_LABEL } from '../lib/role-label'
import { ProfileHeader } from './profile-header'
import { ProfileIdentity } from './profile-identity'
import { ProfilePhone } from './profile-phone'
import { ProfileSwitch } from './profile-switch'
import { ProfileEditModal } from './profile-edit-modal'
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

export function ProfileOwnerScreen({ role, onLogout }: ProfileScreenProps) {
	const profile = useUserProfileStore(state => state.profiles[role])
	const typedProfile = profile as UserOwnerProfile
	const [isEditOpen, setIsEditOpen] = useState(false)

	const router = useRouter()
	const handleNavigate = () => {
		router.push('/petowner/profile/petprofile')
	}

	return (
		<SafeAreaView style={styles.screen} edges={['top']}>
			<ScrollView contentContainerStyle={{ gap: 10 }}>
				<View style={styles.topBlock}>
					<ProfileHeader
						onLogout={onLogout}
						onPressEdit={() => setIsEditOpen(true)}
					/>
					<ProfileIdentity
						name={typedProfile.name}
						roleLabel={PROVIDER_ROLE_LABEL[role]}
						avatarUri={typedProfile.avatarUri}
					/>
					<ProfilePhone phone={typedProfile.phone} />
				</View>
				<ProfileSwitch
					caption='Получать уведомления'
					text='Получайте уведомления о своем питомце и интересные советы'
				/>
				<StyledButton
					style={{ width: '90%', marginLeft: '5%' }}
					onPress={handleNavigate}
				>
					Личный кабинет питомца
				</StyledButton>
			</ScrollView>
			<RoleTabBar />
			<ProfileEditModal
				visible={isEditOpen}
				role={role}
				profile={typedProfile}
				onClose={() => setIsEditOpen(false)}
			/>
		</SafeAreaView>
	)
}
