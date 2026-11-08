import { useUserProfileStore } from '@/entity/user/model'
import { ProviderRole } from '@/entity/user/types'
import { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { PROVIDER_ROLE_LABEL } from '../lib/role-label'
import { ProfileHeader } from './profile-header'
import { ProfileIdentity } from './profile-identity'
import { ProfilePhone } from './profile-phone'
import { ProfileNotificationsSwitch } from './profile-notifications-switch'
import { styles } from './styles'
import { StyledButton } from '@/shared/ui/Button'
import { RoleTabBar } from '@/shared/ui/RoleTabBar'

type ProfileScreenProps = {
	role: ProviderRole
	onLogout: () => void
	onPressEdit?: () => void
	onPressDetails?: () => void
}

export function ProfileOwnerScreen({ role, onLogout }: ProfileScreenProps) {
	const profile = useUserProfileStore(state => state.profiles[role])

	return (
		<SafeAreaView style={styles.screen} edges={['top']}>
			<ScrollView contentContainerStyle={{ gap: 10 }}>
				<View style={styles.topBlock}>
					<ProfileHeader onLogout={onLogout} />
					<ProfileIdentity
						name={profile.name}
						roleLabel={PROVIDER_ROLE_LABEL[role]}
						avatarUri={profile.avatarUri}
					/>
					<ProfilePhone phone={profile.phone} />
				</View>
				<ProfileNotificationsSwitch />
				<StyledButton style={{ width: '90%', marginLeft: '5%' }}>
					Личный кабинет питомца
				</StyledButton>
			</ScrollView>
			<RoleTabBar />
		</SafeAreaView>
	)
}
