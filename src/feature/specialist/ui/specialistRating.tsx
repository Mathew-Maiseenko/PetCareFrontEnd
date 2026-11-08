import { View, Text, StyleSheet } from 'react-native'
import StarIcon from '@/shared/ui/Icons/Star'
import { Colors } from '@/shared/styles'

type Props = {
    rating: number
}

export function SpecialistRating({ rating }: Props) {
    return (
        <View style={styles.ratingRow}>
            <Text style={styles.ratingValue}>{rating.toFixed(1)}</Text>
            <View style={styles.starsRow}>
                {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} color="#DD991E" />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ratingRow: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        gap: 8 
    },
    ratingValue: { 
        fontSize: 20,
        color: Colors.textPrimary 
    },
    starsRow: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        gap: 4 
    },
})