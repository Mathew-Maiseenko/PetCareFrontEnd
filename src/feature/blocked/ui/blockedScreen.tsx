import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native'
import { router } from 'expo-router'
import { Colors } from '@/shared/styles'
import BackArrowIcon from '@/shared/ui/Icons/BackButton'

const BLOCKED_USERS = [
    { id: '1', name: 'Галина', role: 'Зооняня', avatar: 'https://i.pravatar.cc/150?img=20' },
]

export function BlockedScreen() {
    return (
        <View style={styles.screen}>
            {/* Шапка экрана */}
            <View style={styles.header}>
                <Pressable onPress={() => router.back()}>
                    <BackArrowIcon/>
                </Pressable>
                <Text style={styles.headerTitle}>Заблокированные</Text>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    {BLOCKED_USERS.map((person) => (
                        <View key={person.id} style={styles.personRow}>
                            <View style={styles.leftSide}>
                                <Image source={{ uri: person.avatar }} style={styles.avatar} />
                                <View style={styles.info}>
                                    <Text style={styles.name}>{person.name}</Text>
                                    <Text style={styles.role}>{person.role}</Text>
                                </View>
                            </View>
                            <Pressable style={styles.unblockButton}>
                                <Text style={styles.unblockText}>Разблокировать</Text>
                            </Pressable>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.backgroundPrimary,
        paddingTop: 58,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        marginBottom: 32,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: Colors.textPrimary,
    },
    container: {
        backgroundColor: Colors.backgroundPrimary,
    },
    personRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        marginBottom: 21,
    },
    leftSide: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 59,
        height: 59,
        borderRadius: 30,
        marginRight: 17,
        backgroundColor: '#eee',
    },
    info: {
        justifyContent: 'center',
    },
    name: {
        fontSize: 20,
        fontWeight: 600,
        color: Colors.textPrimary,
        marginBottom: 3,
    },
    role: {
        fontSize: 15,
        color: Colors.placeholder,
    },
    unblockButton: {
        backgroundColor: '#EBEBEB',
		paddingVertical: 8,
		paddingHorizontal: 18,
		borderRadius: 5,
    },
    unblockText: {
        fontSize: 14,
		color: Colors.textPrimary,
        fontWeight: '700'
    },
})