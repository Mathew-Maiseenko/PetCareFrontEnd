import { useUserProfileStore } from '@/entity/user/model'
import { ProviderRole, PetProfile, UserRole } from '@/entity/user/types'
import { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'

import { PROVIDER_ROLE_LABEL } from '../lib/role-label'
import { ViewProfilePetHeader } from './view-profile-pet-header'
import { ProfileIdentity } from './profile-identity'
import { ProfileSwitch } from './profile-switch'
import { ProfileBreedPet } from './profile-breed-pet'
import { ProfileTypePet } from './profile-type-pet'
import { ProfileDescriptionCard } from './profile-description-card'
import { ProfilePetDetailsSheet } from './profile-pet-details-sheet'
import { ProfilePetEditModal } from './profile-pet-edit-modal'
import AddPet from '@/shared/ui/Icons/AddPet'
import { styles } from './styles'
import { StyledButton } from '@/shared/ui/Button'
import { RoleTabBar } from '@/shared/ui/RoleTabBar'

type ProfileScreenProps = {
	role: ProviderRole
	onPressEdit?: () => void
	onPressDetails?: () => void
}

export function ViewProfilePetScreen({
	role,
	onPressDetails,
}: ProfileScreenProps) {
	const profile = useUserProfileStore(state => state.profiles[role])
	const typedProfile = profile as PetProfile
	const [isDetailsOpen, setIsDetailsOpen] = useState(false)
	const [isEditOpen, setIsEditOpen] = useState(false)

	const handlePressDetails = () => {
		onPressDetails?.()
		setIsDetailsOpen(true)
	}
	const router = useRouter()
	const handleNavigate = () => {
		router.push('/sitter/notifications/petowner')
	}

	return (
		<SafeAreaView style={styles.screen} edges={['top']}>
			<ScrollView contentContainerStyle={{ gap: 10 }}>
				<View style={styles.topBlock}>
					<ViewProfilePetHeader onPressBack={() => router.back()} />
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
				<StyledButton onPress={handleNavigate}>
					Личный кабинет хозяина
				</StyledButton>
			</ScrollView>
			<ProfilePetDetailsSheet
				visible={isDetailsOpen}
				onClose={() => setIsDetailsOpen(false)}
				profile={typedProfile}
			/>
			<ProfilePetEditModal
				visible={isEditOpen}
				role={UserRole.PET}
				profile={typedProfile}
				onClose={() => setIsEditOpen(false)}
			/>
		</SafeAreaView>
	)
}
