import { View, StyleSheet, Alert, Pressable, Text } from 'react-native'
import { useState } from 'react'
import { Colors } from '@/shared/styles'
import { StyledButton } from '@/shared/ui/Button'
import { StyledToggle } from '@/shared/ui/Toggle'
import { TimePickerModal } from './timePickerModal'

export function BookingForm() {
    const [isAllDay, setIsAllDay] = useState(false)
    const [activePicker, setActivePicker] = useState<'start' | 'end' | null>(null)
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const isFormValid = isAllDay || (startTime !== '' && endTime !== '')
    const handleBooking = () => {
        if (!isAllDay && startTime >= endTime) {
            Alert.alert("Ошибка", "Время окончания должно быть позже времени начала")
            return
        }
        console.log('Забронировано!', { startTime, endTime, isAllDay })
    }
    return (
        <View style={styles.formContainer}>
            <View style={styles.toggleWrapper}>
                <StyledToggle label="Целый день" value={isAllDay} onValueChange={setIsAllDay}
                />
            </View>
            {!isAllDay && (
                <View style={styles.timeInputs}>
                    {/* Поле НАЧАЛО */}
                    <Pressable style={styles.input} onPress={() => setActivePicker('start')}>
                        <Text style={[styles.inputText, !startTime && styles.placeholder]}>
                            {startTime || 'Начало'}
                        </Text>
                    </Pressable>

                    {/* Поле КОНЕЦ */}
                    <Pressable style={styles.input} onPress={() => setActivePicker('end')}>
                        <Text style={[styles.inputText, !endTime && styles.placeholder]}>
                            {endTime || 'Конец'}
                        </Text>
                    </Pressable>
                </View>
            )}
            <View style={styles.footer}>
                <StyledButton full onPress={handleBooking}>
                    Забронировать
                </StyledButton>
            </View>
            <TimePickerModal
                visible={activePicker !== null}
                title={activePicker === 'start' ? 'Время начала' : 'Время конца'}
                initialTime={activePicker === 'start' ? startTime : endTime}
                onClose={() => setActivePicker(null)}
                onConfirm={(time) => {
                    if (activePicker === 'start') setStartTime(time)
                    else setEndTime(time)
                    setActivePicker(null)
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1 
    },
    toggleWrapper: { 
        marginBottom: 16 
    },
    timeInputs: { 
        gap: 16 
    },
    input: {
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 11,
        height: 50,
        paddingHorizontal: 16,
        justifyContent: 'center',
    },
    inputText: {
        fontSize: 16,
        fontFamily: 'Nunito-Regular',
        color: Colors.textPrimary,
    },
    placeholder: {
        color: '#A4A4A4',
    },
    footer: { 
        marginTop: 'auto', 
        paddingBottom: 32 
    },
})