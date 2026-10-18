import { useUserProfileStore } from '@/entity/user/model'
import { ProviderRole } from '@/entity/user/types'
import { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { PROVIDER_ROLE_LABEL } from '../lib/role-label'
import { ProfileDescriptionCard } from './profile-description-card'
import { ProfileDetailsSheet } from './profile-details-sheet'
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

	const handlePressDetails = () => {
		onPressDetails?.()
		setIsDetailsOpen(true)
	}

	return (
		<SafeAreaView style={styles.screen} edges={['top']}>
			<ScrollView>
				<View style={styles.topBlock}>
					<ProfileHeader onLogout={onLogout} onPressEdit={onPressEdit} />
					<ProfileIdentity
						name={profile.name}
						roleLabel={PROVIDER_ROLE_LABEL[role]}
						avatarUri={profile.avatarUri}
					/>
					<ProfilePhone phone={profile.phone} />
				</View>
				<ProfileDescriptionCard
					description={profile.description}
					onPressDetails={handlePressDetails}
				/>
				<ProfileRatingCard
					rating={profile.rating}
					reviewsCount={profile.reviewsCount}
				/>
			</ScrollView>
			<ProfileDetailsSheet
				visible={isDetailsOpen}
				onClose={() => setIsDetailsOpen(false)}
				profile={profile}
			/>
		</SafeAreaView>
	)
}
