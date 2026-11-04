import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Colors } from '@/shared/styles'
import { FavoritesList } from '@/feature/favorites/ui/favoritesList'

export default function FavoritesScreen() {
	return (
        <View style={styles.container}>
            <Text style={styles.title}>Избранные</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <FavoritesList />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundPrimary,
        paddingTop: 58,
    },
    title: {
        fontSize: 24,
        color: Colors.textPrimary,
        paddingHorizontal: 24,
        marginBottom: 40,
		fontWeight: 700
    },
})