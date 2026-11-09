import { View, StyleSheet } from 'react-native'
import { Calendar } from 'react-native-calendars'

type Props = { 
    currentMonth?: string 
    hideHeader?: boolean
    onDayPress?: (dateString: string) => void
    selectedDate?: string | null 
}


export function SpecialistCalendar({ currentMonth = '2025-12-01', hideHeader = false, onDayPress, selectedDate = null }: Props) {
    const markedDates: any = {
        '2025-12-17': { selected: true, selectedColor: 'transparent', selectedTextColor: '#000' },
        '2025-12-18': { selected: true, selectedColor: 'transparent', selectedTextColor: '#000' },
        '2025-12-19': { selected: true, selectedColor: 'transparent', selectedTextColor: '#000' },
        '2025-12-21': { selected: true, selectedColor: 'transparent', selectedTextColor: '#000' },
        '2025-12-22': { selected: true, selectedColor: 'transparent', selectedTextColor: '#000' },
        '2025-12-23': { selected: true, selectedColor: 'transparent', selectedTextColor: '#000' },
        '2025-12-24': { selected: true, selectedColor: 'transparent', selectedTextColor: '#000' },
        '2025-12-26': { selected: true, selectedColor: 'transparent', selectedTextColor: '#000' },
        '2025-12-27': { selected: true, selectedColor: 'transparent', selectedTextColor: '#000' },
        '2025-12-28': { selected: true, selectedColor: 'transparent', selectedTextColor: '#000' },
        '2025-12-29': { selected: true, selectedColor: 'transparent', selectedTextColor: '#000' },
        '2025-12-31': { selected: true, selectedColor: 'transparent', selectedTextColor: '#000' },
    }
    if (selectedDate) {
        markedDates[selectedDate] = {
            selected: true,
            selectedColor: '#FEBC46', 
            selectedTextColor: '#000' 
        }
    }
    return (
        <View style={styles.container}>
            <Calendar
                current={currentMonth}
                firstDay={1}
                hideArrows={true}
                hideExtraDays={true}
                enableSwipeMonths={false}
                markedDates={markedDates}
                renderHeader={() => null}
                onDayPress={(day) => {
                    if (onDayPress) {
                        onDayPress(day.dateString)
                    }
                }}
                theme={{
                    textSectionTitleColor: '#8D8B8B',
                    dayTextColor: '#C4C4C4',
                    textDisabledColor: '#E0E0E0',
                    selectedDayTextColor: '#000',
                    textDayFontSize: 18,
                    textDayHeaderFontSize: 16,

                    'stylesheet.calendar.main': {
                        container: {
                            paddingLeft: 0,
                            paddingRight: 0,
                            backgroundColor: 'transparent',
                        },
                        week: {
                            marginTop: 2,
                            marginBottom: 2,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingLeft: 0,
                            paddingRight: 0,
                        }
                    },
                    'stylesheet.calendar.header': hideHeader ? {
                        header: { 
                            display: 'none' 
                        },
                        week: { 
                            display: 'none' 
                        },
                        dayHeader: { 
                            display: 'none' 
                        },
                    } : {
                        header: {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingLeft: 0,
                            paddingRight: 0,
                            marginTop: 0,
                            alignItems: 'center',
                        },
                        week: {
                            marginTop: 7,
                            marginBottom: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            paddingLeft: 0,
                            paddingRight: 0,
                        },
                        dayHeader: {
                            width: 24,
                            textAlign: 'center',
                            fontSize: 16,
                            color: '#8D8B8B',
                        }
                    },
                    'stylesheet.day.basic': {
                        base: {
                            width: 32,
                            height: 32,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 16,

                        },
                        text: {
                            marginTop: 4,
                            fontSize: 18,
                            color: '#C4C4C4',
                        }
                    }
                } as any}
                style={styles.calendar}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    calendar: {
        backgroundColor: 'transparent', 
    }
})