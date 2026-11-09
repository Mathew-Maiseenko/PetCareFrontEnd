import { View, Text, StyleSheet, Pressable, ScrollView, Image } from 'react-native'
import BackArrowIcon from '@/shared/ui/Icons/BackButton'
import StarIcon from '@/shared/ui/Icons/Star'
import { Colors } from '@/shared/styles'
import { router } from 'expo-router'

const MOCK_REVIEWS = [
    {
        id: '1',
        name: 'Катя',
        avatar: 'https://i.pravatar.cc/150?img=5',
        rating: 5,
        text: 'Огромное спасибо за профессионализм и заботу! Алена ежедневно присылала фото- и видеоотчеты, четко следовала всем инструкциям по кормлению. Очень рекомендую!'
    },
    {
        id: '2',
        name: 'Виктория',
        avatar: 'https://i.pravatar.cc/150?img=9',
        rating: 5,
        text: 'Огромное спасибо за профессионализм и заботу! Алена ежедневно присылала фото- и видеоотчеты, четко следовала всем инструкциям по кормлению. Очень рекомендую!'
    },
    {
        id: '3',
        name: 'Алина',
        avatar: 'https://i.pravatar.cc/150?img=25',
        rating: 5,
        text: 'Огромное спасибо за профессионализм и заботу! Алена ежедневно присылала фото- и видеоотчеты, четко следовала всем инструкциям по кормлению. Очень рекомендую!'
    }
]

export function ReviewsSheet() {
    return (
        <View style={styles.container}>
            <View style={styles.headerCard}>
                <View style={styles.header}>
                    <Pressable onPress={() => router.back()}>
                        <BackArrowIcon />
                    </Pressable>
                    <Text style={styles.headerTitle}>Отзывы</Text>
                    <View style={{ width: 24 }} />
                </View>
                
                <View style={styles.ratingContainer}>
                    <View style={styles.ratingTopRow}>
                        <Text style={styles.ratingValue}>5.0</Text>
                        <View style={styles.headerStars}>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <StarIcon key={star} width={21} height={21} color="#DD991E" />
                            ))}
                        </View>
                    </View>
                    <Text style={styles.reviewsCount}>53 отзыва</Text>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {MOCK_REVIEWS.map((review) => (
                    <View key={review.id} style={styles.card}>
                        <View style={styles.reviewHeader}>
                            <Image source={{ uri: review.avatar }} style={styles.avatar} />
                            <View style={styles.reviewRightSide}>
                                <View>
                                    <Text style={styles.userName}>{review.name}</Text>
                                    <View style={styles.starsRow}>
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <StarIcon key={star} width={16} height={16} color="#DD991E" />
                                        ))}
                                    </View>
                                </View>
                                <View style={styles.reviewTextContainer}>
                                    <Text style={styles.reviewText}>{review.text}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
    },
    card: {
        backgroundColor: Colors.backgroundPrimary,
        borderRadius: 16, 
        paddingHorizontal: 24,
        paddingBottom: 16,
        marginTop: 10
    },
    headerCard: {
        backgroundColor: Colors.backgroundPrimary, 
        borderRadius: 16, 
        paddingHorizontal: 24,
        paddingBottom: 24,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 58,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: Colors.textPrimary,
    },
    ratingBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    ratingContainer: {
        marginTop: 40,
    },
    ratingTopRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 9,
    },
    ratingValue: {
        fontSize: 24,
        fontWeight: '700',
        color: Colors.textPrimary,
    },
    headerStars: {
        flexDirection: 'row',
        gap: 2,
    },
    reviewsCount: {
        fontSize: 15,
        color: Colors.placeholder,
    },
    scrollContent: {
        paddingBottom: 5,
    },
    reviewHeader: {
        flexDirection: 'row',
        paddingTop: 16,
        alignItems: 'flex-start',
        paddingBottom: 3
    },
    reviewRightSide: {
        flex: 1,
    },
    userRow: {
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 18,
    },
    userName: {
        fontSize: 18,
        fontWeight: '700',
        color: Colors.textPrimary,
        marginBottom: 5
    },
    starsRow: {
        flexDirection: 'row',
        marginBottom: 12,
        gap: 4,
    },
    reviewTextContainer: {
        marginTop: 4,
    },
    reviewText: {
        fontSize: 15,
        color: Colors.textPrimary,
        lineHeight: 22,
    }
})