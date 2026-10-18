import { Pressable, Text, View } from 'react-native'

import { styles } from './styles'

type ProfileDescriptionCardProps = {
	description: string
	onPressDetails?: () => void
}

export function ProfileDescriptionCard({
	description,
	onPressDetails,
}: ProfileDescriptionCardProps) {
	return (
		<View style={styles.card}>
			<Text style={styles.cardTitle}>Описание</Text>
			<Text style={styles.description}>{description}</Text>
			<Pressable
				onPress={onPressDetails}
				style={({ pressed }) => pressed && { opacity: 0.6 }}
			>
				<Text style={styles.moreLink}>Подробнее</Text>
			</Pressable>
		</View>
	)
}
