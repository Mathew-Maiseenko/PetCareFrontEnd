import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import { router } from 'expo-router'
import { Colors } from '@/shared/styles'
import BackArrowIcon from '@/shared/ui/Icons/BackButton'
import BlockIcon from '@/shared/ui/Icons/Block'
import { StyledButton } from '@/shared/ui/Button'
import ArrowIcon from '@/shared/ui/Icons/BackButton'

export function SettingsScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => router.back()} hitSlop={12}>
                    <BackArrowIcon />
                </Pressable>
                <Text style={styles.headerTitle}>Настройки</Text>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView>
                <Pressable 
                    style={styles.row} 
                    onPress={() => router.push('/pet-owner/blocked')}>
                    <BlockIcon width={24} height={24} color="#DD991E" />
                    <Text style={styles.rowText}>Заблокированные</Text>
                    <View style={{ transform: [{ rotate: '180deg' }] }}>
                        <ArrowIcon width={20} height={20} color="#C4C4C4" />
                    </View>
                </Pressable>
            </ScrollView>

            <View style={styles.footer}>
                <StyledButton>
                    Выйти
                </StyledButton>
            </View>
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
        marginBottom: 32,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: Colors.textPrimary,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
    },
    rowText: {
        flex: 1,
        fontSize: 20,
        color: Colors.textPrimary,
        marginLeft: 16,
    },
    footer: {
        paddingBottom: 60,
    }
})