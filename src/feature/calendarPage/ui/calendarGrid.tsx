import { View, StyleSheet } from 'react-native'
import { Calendar } from 'react-native-calendars'

type Props = {
    currentMonth: string
    eventsDates: string[]
    onDayPress?: (date: string) => void
}

export function CalendarGrid({ currentMonth, eventsDates, onDayPress }: Props) {
    const today = new Date().toISOString().split('T')[0]
    
    const year = currentMonth.split('-')[0]
    const month = currentMonth.split('-')[1]

    const markedDates: any = {}
    const daysInMonth = new Date(parseInt(year), parseInt(month), 0).getDate()

    for (let i = 1; i <= daysInMonth; i++) {
        const dayStr = i.toString().padStart(2, '0')
        const dateStr = `${year}-${month}-${dayStr}`
        markedDates[dateStr] = {
            customStyles: {
                container: { backgroundColor: 'transparent' },
                text: { color: '#000000', fontFamily: 'Nunito-Regular' }
            }
        }
        if (dateStr < today) {
            markedDates[dateStr].customStyles.text.color = '#C4C4C4'
        }
        if (eventsDates.includes(dateStr)) {
            markedDates[dateStr] = {
                customStyles: {
                    container: {
                        backgroundColor: '#FEBC46',
                        borderRadius: 16,
                    },
                    text: {
                        color: '#000000',
                        fontFamily: 'Nunito-Regular',
                    }
                }
            }
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
                markingType={'custom'}
                markedDates={markedDates}
                renderHeader={() => null}
                onDayPress={(day) => {
                        if (day.dateString >= today) {
                            if (onDayPress) {
                            onDayPress(day.dateString)
                        }
                        }
                    }}
                theme={{
                    textSectionTitleColor: '#8D8B8B',
                    textDayFontSize: 18,
                    textDayHeaderFontSize: 16,
                    'stylesheet.calendar.header': {
                        header: { display: 'none' },
                        week: { display: 'none' },
                        dayHeader: { display: 'none' },
                    },
                    
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