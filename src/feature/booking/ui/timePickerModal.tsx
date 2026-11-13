import { View, Text, StyleSheet, Modal, Pressable, FlatList } from 'react-native'
import { Colors } from '@/shared/styles'
import { StyledButton } from '@/shared/ui/Button'
import CloseIcon from '@/shared/ui/Icons/Close'
import { useState } from 'react'

const HOURS: string[] = []
for (let i = 0; i < 24; i++) {
    let hour = String(i)
    if (i < 10) {
        hour = '0' + hour
    }
    HOURS.push(hour)
}

const MINUTES: string[] = []
for (let i = 0; i < 60; i++) {
    let minute = String(i)
    if (i < 10) {
        minute = '0' + minute
    }
    MINUTES.push(minute)
}
const ITEM_HEIGHT = 50

type Props = {
    visible: boolean
    title: string
    initialTime: string
    onClose: () => void
    onConfirm: (time: string) => void
}

export function TimePickerModal({ visible, title, onClose, onConfirm }: Props) {
    const [hour, setHour] = useState('00')
    const [minute, setMinute] = useState('00')
    const handleScroll = (event: any, type: 'hour' | 'minute') => {
        const offsetY = event.nativeEvent.contentOffset.y
        const index = Math.round(offsetY / ITEM_HEIGHT)
        if (type === 'hour' && HOURS[index]) {
            setHour(HOURS[index])
        }
        if (type === 'minute' && MINUTES[index]) {
            setMinute(MINUTES[index])
        }
    }

    return (
        <Modal visible={visible} animationType="fade" transparent={true} onRequestClose={onClose}>
            <View style={styles.overlay}>
                <Pressable style={styles.background} onPress={onClose} />
                <View style={styles.modalContent}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{title}</Text>
                        <Pressable onPress={onClose}>
                            <CloseIcon width={24} height={24} color={Colors.placeholder} />
                        </Pressable>
                    </View>
                    <View style={styles.wheelsWrapper}>
                        <View style={styles.selectionIndicator} pointerEvents="none" />
                        <View style={styles.wheelsContainer}>
                            <FlatList
                                data={HOURS}
                                keyExtractor={(item) => item}
                                showsVerticalScrollIndicator={false}
                                snapToInterval={ITEM_HEIGHT}
                                onScroll={(e) => handleScroll(e, 'hour')}
                                scrollEventThrottle={16}
                                contentContainerStyle={{ paddingVertical: (160 - ITEM_HEIGHT) / 2 }}
                                renderItem={({ item }) => (
                                    <View style={styles.item}>
                                        <Text style={[styles.text, hour === item && styles.textActive]}>
                                            {item}
                                        </Text>
                                    </View>
                                )}
                            />
                            <Text style={styles.separator}>:</Text>
                            <FlatList
                                data={MINUTES}
                                keyExtractor={(item) => item}
                                showsVerticalScrollIndicator={false}
                                snapToInterval={ITEM_HEIGHT}
                                onScroll={(e) => handleScroll(e, 'minute')}
                                scrollEventThrottle={16}
                                contentContainerStyle={{ paddingVertical: (160 - ITEM_HEIGHT) / 2 }}
                                renderItem={({ item }) => (
                                    <View style={styles.item}>
                                        <Text style={[styles.text, minute === item && styles.textActive]}>
                                            {item}
                                        </Text>
                                    </View>
                                )}
                            />
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <StyledButton full onPress={() => onConfirm(`${hour}:${minute}`)}>Сохранить</StyledButton>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    modalContent: {
        width: '85%',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 24,
        alignItems: 'center',
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: Colors.textPrimary,
    },
    wheelsWrapper: {
        height: 160,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    selectionIndicator: {
        position: 'absolute',
        top: (160 - ITEM_HEIGHT) / 2,
        left: '15%', 
        right: '15%',
        height: ITEM_HEIGHT,
        backgroundColor: '#F2F2F2',
        borderRadius: 8,
    },
    wheelsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    wheelColumn: {
        flex: 1,
        maxWidth: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        height: ITEM_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        color: '#C4C4C4',
    },
    textActive: {
        color: Colors.textPrimary
    },
    separator: {
        fontSize: 24,
        color: Colors.textPrimary,
        width: 20,
        textAlign: 'center',
        marginBottom: 4, 
    },
    footer: {
        width: '100%',
    }
})