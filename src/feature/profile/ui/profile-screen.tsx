import { useUserProfileStore } from '@/entity/user/model'
import { ProviderRole, UserProfile } from '@/entity/user/types'
import { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { PROVIDER_ROLE_LABEL } from '../lib/role-label'
import { ProfileDescriptionCard } from './profile-description-card'
import { ProfileDetailsSheet } from './profile-details-sheet'
import { ProfileEditModal } from './profile-edit-modal'
import { ProfileHeader } from './profile-header'
import { ProfileIdentity } from './profile-identity'
import { ProfilePhone } from './profile-phone'
import { ProfileRatingCard } from './profile-rating-card'
import { styles } from './styles'

type ProfileScreenProps = {
	role: ProviderRole
	onLogout: () => void
	onPressEdit?: () => void
	onPressDetails?: () => void
}

export function ProfileScreen({
	role,
	onLogout,
	onPressEdit,
	onPressDetails,
}: ProfileScreenProps) {
	const profile = useUserProfileStore(state => state.profiles[role])
	const [isDetailsOpen, setIsDetailsOpen] = useState(false)
	const [isEditOpen, setIsEditOpen] = useState(false)
	const typedProfile = profile as UserProfile

	const handlePressDetails = () => {
		onPressDetails?.()
		setIsDetailsOpen(true)
	}

	const handlePressEdit = () => {
		onPressEdit?.()
		setIsEditOpen(true)
	}

	return (
		<SafeAreaView style={styles.screen} edges={['top']}>
			<ScrollView>
				<View style={styles.topBlock}>
					<ProfileHeader onLogout={onLogout} onPressEdit={handlePressEdit} />
					<ProfileIdentity
						name={typedProfile.name}
						roleLabel={PROVIDER_ROLE_LABEL[role]}
						avatarUri={typedProfile.avatarUri}
					/>
					<ProfilePhone phone={typedProfile.phone} />
				</View>
				<ProfileDescriptionCard
					description={typedProfile.description}
					onPressDetails={handlePressDetails}
				/>
				<ProfileRatingCard
					rating={typedProfile.rating}
					reviewsCount={typedProfile.reviewsCount}
				/>
			</ScrollView>
			<ProfileDetailsSheet
				visible={isDetailsOpen}
				onClose={() => setIsDetailsOpen(false)}
				profile={typedProfile}
			/>
			<ProfileEditModal
				visible={isEditOpen}
				role={role}
				profile={typedProfile}
				onClose={() => setIsEditOpen(false)}
			/>
		</SafeAreaView>
	)
}
