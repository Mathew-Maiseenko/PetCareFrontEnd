import { UserProfile } from '@/entity/user/types'
import { BottomSheet } from '@/shared/ui/BottomSheet'
import CloseIcon from '@/shared/ui/Icons/Close'
import { Pressable, ScrollView, Text, View } from 'react-native'

import { ProfileDetailsRow } from './profile-details-row'
import { styles } from './styles'

type ProfileDetailsSheetProps = {
	visible: boolean
	onClose: () => void
	profile: UserProfile
}

export function ProfileDetailsSheet({
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
						<ProfileDetailsRow label='Имя' value={profile.name} />
						<ProfileDetailsRow label='Телефон' value={profile.phone} />
					</View>
					<View style={styles.detailsSection}>
						<Text style={styles.detailsSectionTitle}>Мои услуги</Text>
						<ProfileDetailsRow
							label='Услуги'
							value={profile.services.join(', ')}
						/>
						<ProfileDetailsRow label='Города работы' value={profile.workCity} />
						<ProfileDetailsRow
							label='Цена в час'
							value={`От ${profile.priceFrom} рублей`}
						/>
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
