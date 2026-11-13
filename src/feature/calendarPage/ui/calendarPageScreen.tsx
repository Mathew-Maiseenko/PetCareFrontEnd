import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import { Colors } from '@/shared/styles'
import { CalendarGrid } from './calendarGrid'
import { useState } from 'react'
import { DayEventsSheet } from './dayEventsSheet'
const EVENTS_DATES = [
    '2026-12-17', '2026-12-18', '2026-12-19', 
    '2026-12-21', '2026-12-22', '2026-12-23', 
    '2026-12-24', '2026-12-26', '2026-12-27', 
    '2026-12-28', '2026-12-29', '2026-12-31'
]

export function CalendarPageScreen() {
    const [headerHeight, setHeaderHeight] = useState(0)
    const [selectedDate, setSelectedDate] = useState<string | null>(null)
    return (
        <View style={styles.container}>
            <View style={styles.mainHeader} onLayout={(event) => setHeaderHeight(event.nativeEvent.layout.height)}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>Календарь</Text>
                </View>
                <View style={styles.weekDaysRow}>
                    {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map(day => (
                        <Text key={day} style={styles.weekDayText}>{day}</Text>
                    ))}
                </View>
            </View>
            <ScrollView 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[ styles.scrollContent, {paddingTop: headerHeight - 10} ]}>
                <View style={styles.monthCard}>
                    <Text style={styles.monthTitle}>Ноябрь</Text>
                    <CalendarGrid currentMonth="2026-11-01" eventsDates={EVENTS_DATES} onDayPress={(date) => setSelectedDate(date)}/>
                </View>
                <View style={styles.monthCard}>
                    <Text style={styles.monthTitle}>Декабрь</Text>
                    <CalendarGrid currentMonth="2026-12-01" eventsDates={EVENTS_DATES} onDayPress={(date) => setSelectedDate(date)}/>
                </View>
                <View style={styles.monthCard}>
                    <Text style={styles.monthTitle}>Январь</Text>
                    <CalendarGrid currentMonth="2027-01-01" eventsDates={EVENTS_DATES} onDayPress={(date) => setSelectedDate(date)}/>
                </View>
            </ScrollView>
            <DayEventsSheet 
                visible={!!selectedDate} 
                onClose={() => setSelectedDate(null)} 
                date={selectedDate} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
    },
    mainHeader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        backgroundColor: Colors.backgroundPrimary,
        paddingHorizontal: 24,
        paddingTop: 58,
        paddingBottom: 16,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 3,
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        color: Colors.textPrimary,
        fontWeight: '700'
    },
    weekDaysRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    weekDayText: {
        width: 24,
        textAlign: 'center',
        fontSize: 16,
        color: Colors.placeholder,
    },
    scrollContent: {
        paddingBottom: 5
    },
    monthCard: {
        backgroundColor: Colors.backgroundPrimary,
        borderRadius: 16,
        paddingTop: 16,
        paddingBottom: 8,
        marginTop: 10
    },
    monthTitle: {
        fontSize: 20,
        color: Colors.textPrimary,
        marginBottom: 7,
        paddingHorizontal: 24,
        fontWeight: '700'
    }
})