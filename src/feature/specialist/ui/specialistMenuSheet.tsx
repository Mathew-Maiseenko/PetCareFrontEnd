import { View, Text, StyleSheet, Modal, Pressable } from 'react-native'
import { Colors } from '@/shared/styles'
import ShareIcon from '@/shared/ui/Icons/Share'
import BlockIcon from '@/shared/ui/Icons/Block'

type Props = {
    visible: boolean
    onClose: () => void
}

export default function SpecialistMenuSheet({ visible, onClose }: Props) {
    return (
        <Modal visible={visible} animationType="fade" transparent={true} onRequestClose={onClose}>
            <Pressable style={styles.overlay} onPress={onClose}>
                <View style={styles.menuContainer}>
                    <Pressable style={styles.row} onPress={onClose}>
                        <ShareIcon color={Colors.textPrimary} />
                        <Text style={styles.text}>Поделиться профилем</Text>
                    </Pressable>
                    <Pressable style={styles.row} onPress={onClose}>
                        <BlockIcon color={Colors.textPrimary} />
                        <Text style={styles.text}>Заблокировать</Text>
                    </Pressable>
                </View>
            </Pressable>
        </Modal>
    )
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    menuContainer: {
        position: 'absolute',
        top: 26,
        right: 24,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 8,
        width: 250,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        elevation: 7,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 13,
        paddingHorizontal: 16,
        gap: 16,
    },
    text: {
        fontSize: 16,
        color: Colors.textPrimary,
    }
})