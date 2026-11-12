import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { Colors } from '@/shared/styles'
import BackArrowIcon from '@/shared/ui/Icons/BackButton'
import { BookingForm } from './bookingForm'

export function BookingScreen() {
    const { date } = useLocalSearchParams()

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => router.back()}>
                    <BackArrowIcon/>
                </Pressable>
                <Text style={styles.headerTitle}>Забронировать</Text>
                <View style={{ width: 24 }} />
            </View>
            <TextInput style={styles.input} value={date ? String(date) : '26.12.2025'} editable={false} />
            <BookingForm />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundPrimary,
        paddingTop: 58,
        paddingHorizontal: 24,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 60,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: Colors.textPrimary,
    },
    input: {
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 11,
        height: 50,
        paddingHorizontal: 16,
        fontSize: 16,
        color: Colors.textPrimary,
        marginBottom: 16,
    },
})