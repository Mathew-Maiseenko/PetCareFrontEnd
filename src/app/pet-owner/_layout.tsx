import { RoleTabBar } from '@/shared/ui/RoleTabBar'
import { Slot } from 'expo-router'
import { View, StyleSheet } from 'react-native'
import { Colors } from '@/shared/styles'

export default function PetOwnerLayout() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Slot />
            </View>
            <RoleTabBar />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundPrimary,
    },
    content: {
        flex: 1,
    },
})
