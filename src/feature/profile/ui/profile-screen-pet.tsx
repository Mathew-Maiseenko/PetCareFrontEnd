import { useUserProfileStore } from '@/entity/user/model'
import { ProviderRole, PetProfile } from '@/entity/user/types'
import { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'

import { PROVIDER_ROLE_LABEL } from '../lib/role-label'
import { ProfileHeader } from './profile-header'
import { ProfileIdentity } from './profile-identity'
import { ProfileSwitch } from './profile-switch'
import { ProfileBreedPet } from './profile-breed-pet'
import { ProfileTypePet } from './profile-type-pet'
import { ProfileDescriptionCard } from './profile-description-card'
import { ProfilePetDetailsSheet } from './profile-pet-details-sheet'
import AddPet from '@/shared/ui/Icons/AddPet'
import { styles } from './styles'
import { StyledButton } from '@/shared/ui/Button'
import { RoleTabBar } from '@/shared/ui/RoleTabBar'

type ProfileScreenProps = {
	role: ProviderRole
	onLogout: () => void
	onPressEdit?: () => void
	onPressDetails?: () => void
}

export function ProfilePetScreen({
	role,
	onLogout,
	onPressDetails,
}: ProfileScreenProps) {
	const profile = useUserProfileStore(state => state.profiles[role])
	const typedProfile = profile as PetProfile
	const [isDetailsOpen, setIsDetailsOpen] = useState(false)

	const handlePressDetails = () => {
		onPressDetails?.()
		setIsDetailsOpen(true)
	}
	const router = useRouter()
	const handleNavigate = () => {
		router.push('/petowner/profile')
	}

	return (
		<SafeAreaView style={styles.screen} edges={['top']}>
			<ScrollView contentContainerStyle={{ gap: 10 }}>
				<View style={styles.topBlock}>
					<ProfileHeader onLogout={onLogout} />
					<ProfileIdentity
						name={typedProfile.name}
						roleLabel={PROVIDER_ROLE_LABEL[role]}
						avatarUri={typedProfile.avatarUri}
					/>
					<ProfileTypePet type={typedProfile.type} />
					<ProfileBreedPet breed={typedProfile.breed} />
				</View>
				<ProfileDescriptionCard
					description={typedProfile.description}
					onPressDetails={handlePressDetails}
				/>
				<ProfileSwitch
					caption='Есть ли прививка'
					text='Для большинства исполнителей прививка у питомца обязательна!'
				/>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						width: '90%',
						marginLeft: '5%',
					}}
				>
					<StyledButton style={{ width: '17%' }}>
						<AddPet color='#000000' />
					</StyledButton>
					<StyledButton style={{ width: '80%' }} onPress={handleNavigate}>
						Личный кабинет хозяина
					</StyledButton>
				</View>
			</ScrollView>
			<ProfilePetDetailsSheet
				visible={isDetailsOpen}
				onClose={() => setIsDetailsOpen(false)}
				profile={typedProfile}
			/>
			<RoleTabBar />
		</SafeAreaView>
	)
}
