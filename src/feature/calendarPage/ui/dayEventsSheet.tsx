import { View, Text, StyleSheet, Pressable } from 'react-native'
import { BottomSheet } from '@/shared/ui/BottomSheet'
import CloseIcon from '@/shared/ui/Icons/Close'
import PlusIcon from '@/shared/ui/Icons/Plus'
import { Colors } from '@/shared/styles'
import { router } from 'expo-router'

const EVENTS_BY_DATE: Record<string, { id: string, name: string, time: string }[]> = {
    '2026-12-17': [{ id: '1', name: 'Оксана Попова', time: 'С 12:00 до 16:00' }],
    '2026-12-18': [{ id: '2', name: 'Иван Иванов', time: 'С 10:00 до 14:00' }],
    '2026-12-19': [{ id: '3', name: 'Ирина Иванова', time: 'С 13:00 до 15:00' }],
    '2026-12-21': [{ id: '4', name: 'Анна Смирнова', time: 'С 15:00 до 18:00' }],
    '2026-12-22': [{ id: '5', name: 'Галина Смирнова', time: 'С 14:00 до 18:00' }],
    '2026-12-23': [{ id: '6', name: 'Вера Смирнова', time: 'С 10:00 до 18:00' }],
    '2026-12-24': [{ id: '7', name: 'Анна Попова', time: 'С 14:00 до 18:00' }],
    '2026-12-26': [{ id: '8', name: 'Александра Петрова', time: 'С 10:00 до 15:00' }],
    '2026-12-27': [{ id: '9', name: 'Павел Коза', time: 'С 15:00 до 19:00' }],
    '2026-12-28': [{ id: '10', name: 'Екатерина Петрова', time: 'С 14:00 до 18:00' }],
    '2026-12-29': [{ id: '11', name: 'Никита Смирнов', time: 'С 09:00 до 15:00' }],
    '2026-12-31': [{ id: '12', name: 'Анна Смирнова', time: 'С 13:00 до 18:00' }],
}

type Props = {
    visible: boolean
    onClose: () => void
    date: string | null
}

export function DayEventsSheet({ visible, onClose, date }: Props) {
    if (!date) return null
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
    const [year, month, day] = date.split('-')
    const formattedDate = `${parseInt(day)} ${months[parseInt(month) - 1]}`
    const events = EVENTS_BY_DATE[date] || []
    const hasEvents = events.length > 0
    return (
        <BottomSheet visible={visible} onClose={onClose} heightFactor={hasEvents ? 0.27 : 0.21}>
            <View style={styles.sheet}>
                <View style={styles.header}>
                    <Text style={styles.title}>{formattedDate}</Text>
                    <Pressable onPress={onClose}>
                        <CloseIcon width={24} height={24} color={Colors.placeholder} />
                    </Pressable>
                </View>
                {hasEvents && (
                    <View style={styles.eventsList}>
                    {events.map((event) => (
                        <View key={event.id} style={styles.eventRow}>
                            <Text style={styles.eventName}>{event.name}</Text>
                            <Text style={styles.eventTime}>{event.time}</Text>
                        </View>
                    ))}
                </View>
                )}
                <Pressable style={styles.addButton} onPress={() => router.push(`/sitter/dayEventsBooking?date=${date}`)}>
                    <Text style={styles.addText}>Добавить событие</Text>
                    <PlusIcon width={30} height={30}/>
                </Pressable>
            </View>
        </BottomSheet>
    )
}

const styles = StyleSheet.create({
    sheet: {
        backgroundColor: '#FFFFFF',
        padding: 24,
        paddingBottom: 40,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 32,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: Colors.textPrimary,
    },
    eventsList: {
        marginBottom: 24,
    },
    eventRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    eventName: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.textPrimary,
    },
    eventTime: {
        fontSize: 15,
        fontFamily: 'Nunito-Regular',
        color: Colors.textPrimary,
    },
    addButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addText: {
        fontSize: 20,
        fontWeight: '700',
        color: Colors.textPrimary,
    }
})