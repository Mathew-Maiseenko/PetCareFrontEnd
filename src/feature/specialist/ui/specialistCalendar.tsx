import { View, StyleSheet } from 'react-native'
import { Calendar, LocaleConfig } from 'react-native-calendars'

LocaleConfig.locales['ru'] = {
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthNamesShort: ['Янв.', 'Фев.', 'Март', 'Апр.', 'Май', 'Июнь', 'Июль', 'Авг.', 'Сент.', 'Окт.', 'Нояб.', 'Дек.'],
    dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    today: 'Сегодня'
};
LocaleConfig.defaultLocale = 'ru';

export function SpecialistCalendar() {
    const markedDates = {
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

    return (
        <View style={styles.container}>
            <Calendar
                current={'2025-12-01'}
                firstDay={1}
                hideArrows={true}
                hideExtraDays={true}
                enableSwipeMonths={false}
                markedDates={markedDates}
                renderHeader={() => null}
                theme={{
                    textSectionTitleColor: '#8D8B8B',
                    dayTextColor: '#C4C4C4',
                    textDisabledColor: '#E0E0E0',
                    selectedDayTextColor: '#000',
                    textDayFontSize: 18,
                    textDayHeaderFontSize: 18,

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
                            justifyContent: 'space-around',
                            paddingLeft: 0,
                            paddingRight: 0,
                        }
                    },
                    'stylesheet.calendar.header': {
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
                            width: 32,
                            textAlign: 'center',
                            fontSize: 18,
                            color: '#8D8B8B',
                        }
                    },
                    'stylesheet.day.basic': {
                        base: {
                            width: 32,
                            height: 32,
                            alignItems: 'center',
                            justifyContent: 'center',
                        },
                        text: {
                            marginTop: 0,
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