import { View, Text, StyleSheet, Pressable } from 'react-native'
import { router } from 'expo-router'
import { Colors } from '@/shared/styles'
import BackArrowIcon from '@/shared/ui/Icons/BackButton'

export function SearchHeader() {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => router.back()}>
                <BackArrowIcon stroke={Colors.textPrimary} />
            </Pressable>
            <Text style={styles.title}>Поиск</Text>
            <View></View>
        </View>
    )
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 24,
        marginTop: 58
	},
	title: {
		fontSize: 24,
        fontWeight: 700,
		color: Colors.textPrimary,
	},
})