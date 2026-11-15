import { PetProfile } from '@/entity/user/types'
import { BottomSheet } from '@/shared/ui/BottomSheet'
import CloseIcon from '@/shared/ui/Icons/Close'
import { Pressable, ScrollView, Text, View } from 'react-native'

import { ProfileDetailsRow } from './profile-details-row'
import { styles } from './styles'

type ProfileDetailsSheetProps = {
	visible: boolean
	onClose: () => void
	profile: PetProfile
}

export function ProfilePetDetailsSheet({
	visible,
	onClose,
	profile,
}: ProfileDetailsSheetProps) {
	return (
		<BottomSheet visible={visible} onClose={onClose}>
			<View style={styles.detailsSheet}>
				<View style={styles.detailsHeader}>
					<Text style={styles.detailsTitle}>Описание</Text>
					<Pressable
						onPress={onClose}
						hitSlop={8}
						style={({ pressed }) => [
							styles.headerButton,
							pressed && { opacity: 0.6 },
						]}
					>
						<CloseIcon width={22} height={22} />
					</Pressable>
				</View>
				<ScrollView
					style={styles.detailsScroll}
					contentContainerStyle={styles.detailsContent}
					showsVerticalScrollIndicator={false}
				>
					<View style={styles.detailsSection}>
						<Text style={styles.detailsSectionTitle}>Основная информация</Text>
						<ProfileDetailsRow label='Питомец' value={profile.type} />
						<ProfileDetailsRow label='Кличка' value={profile.name} />
						<ProfileDetailsRow label='Порода' value={profile.breed} />
						<ProfileDetailsRow label='Возраст' value={profile.age} />
					</View>
					<View style={styles.detailsSection}>
						<Text style={styles.detailsSectionTitle}>
							Чрезвычайные ситуации
						</Text>
						<ProfileDetailsRow label='Действия при ЧС' value={profile.action} />
					</View>
					<View style={styles.detailsSection}>
						<Text style={styles.detailsSectionTitle}>Подробное описание</Text>
						<Text style={styles.detailsDescription}>
							{profile.fullDescription}
						</Text>
					</View>
				</ScrollView>
			</View>
		</BottomSheet>
	)
}
