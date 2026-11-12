import { View, TextInput, StyleSheet, Alert } from 'react-native'
import { useState } from 'react'
import { Colors } from '@/shared/styles'
import { StyledButton } from '@/shared/ui/Button'
import { StyledToggle } from '@/shared/ui/Toggle'

export function BookingForm() {
    const [isAllDay, setIsAllDay] = useState(false)
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const isFormValid = isAllDay || (startTime.length === 5 && endTime.length === 5)
    const handleBooking = () => {
        if (!isAllDay && startTime >= endTime) {
            Alert.alert("Ошибка", "Время окончания должно быть позже времени начала")
            return
        }
        console.log('Забронировано!')
    }
    return (
        <View style={styles.formContainer}>
            <View style={styles.toggleWrapper}>
                <StyledToggle label="Целый день" value={isAllDay} onValueChange={setIsAllDay}
                />
            </View>
            {!isAllDay && (
                <View style={styles.timeInputs}>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Начало" 
                        placeholderTextColor="#A4A4A4"
                        value={startTime}
                        keyboardType="numeric"
                        maxLength={5}
                        onChangeText={(text) => {
                            let cleaned = text.replace(/[^0-9]/g, '')
                            if (cleaned.length >= 2) {
                                const hours = parseInt(cleaned.slice(0, 2), 10)
                                if (hours > 23) return
                            }
                            if (cleaned.length >= 3) {
                                const minutes = parseInt(cleaned.slice(2, 4).padEnd(2, '0'), 10)
                                if (minutes > 59) return
                            }
                            if (cleaned.length >= 3) {
                                cleaned = cleaned.slice(0, 2) + ':' + cleaned.slice(2, 4)
                            }
                            setStartTime(cleaned)
                        }}
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder="Конец" 
                        placeholderTextColor="#A4A4A4"
                        value={endTime}
                        keyboardType="numeric"
                        maxLength={5}
                        onChangeText={(text) => {
                            let cleaned = text.replace(/[^0-9]/g, '')
                            if (cleaned.length >= 2) {
                                const hours = parseInt(cleaned.slice(0, 2), 10)
                                if (hours > 23) return
                            }
                            if (cleaned.length >= 3) {
                                const minutes = parseInt(cleaned.slice(2, 4).padEnd(2, '0'), 10)
                                if (minutes > 59) return
                            }
                            if (cleaned.length >= 3) {
                                cleaned = cleaned.slice(0, 2) + ':' + cleaned.slice(2, 4)
                            }
                            setEndTime(cleaned)
                        }}
                    />
                </View>
            )}
            <View style={styles.footer}>
                <StyledButton full disabled={!isFormValid} onPress={handleBooking}>
                    Забронировать
                </StyledButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
    },
    toggleWrapper: {
        marginBottom: 16,
    },
    timeInputs: {
        marginBottom: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 11,
        height: 50,
        paddingHorizontal: 16,
        fontSize: 16,
        color: Colors.textPrimary,
        marginBottom: 16,
    },
    footer: {
        marginTop: 'auto',
        paddingBottom: 32,
    }
})