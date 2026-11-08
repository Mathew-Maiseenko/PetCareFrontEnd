import { View, Pressable, StyleSheet } from 'react-native'
import { router } from 'expo-router'
import BackArrowIcon from '@/shared/ui/Icons/BackButton'
import HeartIcon from '@/shared/ui/Icons/Heart'
import DotsIcon from '@/shared/ui/Icons/Dots'
import { Colors } from '@/shared/styles'

type Props = { onPressMenu?: () => void }
export function SpecialistHeader({ onPressMenu }: Props) {
    return (
        <View style={styles.topBar}>
            <Pressable onPress={() => router.back()}>
                <BackArrowIcon stroke={Colors.textPrimary} />
            </Pressable>
            <View style={styles.topBarRight}>
                <Pressable>
                    <HeartIcon width={28} height={28} color="#9D9D9D" />
                </Pressable>
                <Pressable onPress={onPressMenu}>
                    <DotsIcon width={34} height={34} color="#9D9D9D" />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topBar: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: 24 
    },
    topBarRight: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        gap: 16 
    },
})