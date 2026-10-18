import StarIcon from '@/shared/ui/Icons/Star'
import { Text, View } from 'react-native'

import { styles } from './styles'

const STAR_COUNT = 5

type ProfileRatingCardProps = {
	rating: number
	reviewsCount: number
}

export function ProfileRatingCard({
	rating,
	reviewsCount,
}: ProfileRatingCardProps) {
	const filledStars = Math.round(rating)

	return (
		<View style={styles.card}>
			<View style={styles.ratingTitleRow}>
				<Text style={styles.cardTitle}>Рейтинг</Text>
				<Text style={styles.cardTitle}>{rating.toFixed(1)}</Text>
			</View>
			<View style={styles.stars}>
				{Array.from({ length: STAR_COUNT }, (_, index) => (
					<StarIcon
						key={index}
						width={22}
						height={22}
						opacity={index < filledStars ? 1 : 0.25}
					/>
				))}
			</View>
			<Text style={styles.reviews}>Количество отзывов: {reviewsCount}</Text>
		</View>
	)
}
