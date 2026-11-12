import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import { BottomSheet } from '@/shared/ui/BottomSheet'
import CloseIcon from '@/shared/ui/Icons/Close'
import { Colors } from '@/shared/styles'
import { SpecialistCalendar } from './specialistCalendar'
import { LocaleConfig } from 'react-native-calendars'
import { useState } from 'react'
import { SpecialistFooter } from './specialistFooter'
import { router } from 'expo-router'

LocaleConfig.locales['ru'] = {
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthNamesShort: ['Янв.', 'Фев.', 'Март', 'Апр.', 'Май', 'Июнь', 'Июль', 'Авг.', 'Сент.', 'Окт.', 'Нояб.', 'Дек.'],
    dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    today: 'Сегодня'
};
LocaleConfig.defaultLocale = 'ru';
type Props = {
    visible: boolean
    onClose: () => void
}

export function CalendarSheet({ visible, onClose }: Props) {
    const [headerHeight, setHeaderHeight] = useState(100)
    const [selectedDate, setSelectedDate] = useState<string | null>(null)
    const handleClose = () => {
        setSelectedDate(null)
        onClose()
    }
    return (
        <BottomSheet visible={visible} onClose={handleClose} heightFactor={0.9}>
            <View style={styles.container}>
                <View style={styles.mainHeader} onLayout={(event) => setHeaderHeight(event.nativeEvent.layout.height)}>
                    <View style={styles.titleRow}>
                        <Text style={styles.title}>Календарь</Text>
                        <Pressable onPress={handleClose} hitSlop={8}>
                            <CloseIcon width={24} height={24} color={Colors.placeholder} />
                        </Pressable>
                    </View>
                    
                    <View style={styles.weekDaysRow}>
                        {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map(day => (
                            <Text key={day} style={styles.weekDayText}>{day}</Text>
                        ))}
                    </View>
                </View>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={[styles.scrollContent, { paddingTop: headerHeight }]}>
                    <View style={styles.monthCard}>
                        <Text style={styles.monthTitle}>Ноябрь</Text>
                        <SpecialistCalendar currentMonth="2026-11-01" hideHeader={true} selectedDate={selectedDate} onDayPress={(date) => setSelectedDate(date)} />
                    </View>

                    <View style={styles.monthCard}>
                        <Text style={styles.monthTitle}>Декабрь</Text>
                        <SpecialistCalendar currentMonth="2026-12-01" hideHeader={true} selectedDate={selectedDate} onDayPress={(date) => setSelectedDate(date)} />
                    </View>

                    <View style={styles.monthCard}>
                        <Text style={styles.monthTitle}>Январь</Text>
                        <SpecialistCalendar currentMonth="2027-01-01" hideHeader={true} selectedDate={selectedDate} onDayPress={(date) => setSelectedDate(date)} />
                    </View>
                </ScrollView>
                {selectedDate !== null && selectedDate !== '' && (
                    <View style={{ backgroundColor: Colors.backgroundPrimary }}>
                        <SpecialistFooter 
                            price='10 бел. р./час'
                            onPress={() => {
                                const [year, month, day] = selectedDate.split('-')
                                const formattedDate = `${day}.${month}.${year}`
                                router.push(`/pet-owner/booking?date=${formattedDate}`)
                            }}
                        />
                    </View>
                )}
            </View>
        </BottomSheet>
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
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 24,
        paddingTop: 24,
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
        color: '#8D8B8B',
    },
    scrollContent: {
        paddingBottom: 40,
        gap: 10
    },
    monthCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        paddingTop: 16,
        paddingBottom: 8,
    },
    monthTitle: {
        fontSize: 20,
        color: Colors.textPrimary,
        marginBottom: 7,
        paddingHorizontal: 24,
        fontWeight: '700'
    }
})