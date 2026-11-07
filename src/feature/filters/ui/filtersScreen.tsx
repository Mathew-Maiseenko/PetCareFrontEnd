import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import { router } from 'expo-router'
import { Colors } from '@/shared/styles'
import CloseIcon from '@/shared/ui/Icons/CloseInInput'
import { StyledButton } from '@/shared/ui/Button'
import { StyledToggle } from '@/shared/ui/Toggle'
import Checkbox from '@/shared/ui/Checkbox'
import { useState } from 'react'

export function FiltersScreen() {
    const [hasEducation, setHasEducation] = useState(false)
    const [isSitter, setIsSitter] = useState(false)
    const [isHotel, setIsHotel] = useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Фильтры</Text>
                <Pressable onPress={() => router.back()}>
                    <CloseIcon width={20} height={20} color={Colors.placeholder} />
                </Pressable>
            </View>

            <View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Цена, бел. руб.</Text>
                    <View style={styles.row}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>от</Text>
                            <TextInput style={styles.input} placeholder="0" keyboardType="numeric" />
                        </View>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>до</Text>
                            <TextInput style={styles.input} placeholder="99 999" keyboardType="numeric" />
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Выберите роль</Text>
                    <View style={styles.checkSection}>
                        <View style={styles.checkboxRow}>
                            <Text style={styles.text}>Зооняня</Text>
                            <Checkbox value={isSitter} onValueChange={setIsSitter} />
                        </View>
                        <View style={[styles.checkboxRow, { marginBottom: 0 }]}>
                            <Text style={styles.text}>Зоогостиница</Text>
                            <Checkbox value={isHotel} onValueChange={setIsHotel} />
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Опыт, лет</Text>
                    <View style={styles.row}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>от</Text>
                            <TextInput style={styles.input} placeholder="1" keyboardType="numeric" />
                        </View>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>до</Text>
                            <TextInput style={styles.input} placeholder="5" keyboardType="numeric" />
                        </View>
                    </View>
                </View>

                <View style={styles.checkboxRow}>
                    <StyledToggle 
                    label="Образование"
                    value={hasEducation} 
                    onValueChange={setHasEducation} 
                    />
                </View>
            </View>

            <View style={styles.footer}>
                <StyledButton full onPress={() => router.back()}>
                    Применить
                </StyledButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundPrimary,
        paddingHorizontal: 24,
        paddingTop: 58,
        paddingBottom: 40,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40,
    },
    headerTitle: {
        fontSize: 24,
        color: Colors.textPrimary,
        fontWeight: 700,
    },
    section: {
        marginBottom: 40,
    },
    sectionTitle: {
        fontSize: 20,
        color: Colors.textPrimary,
        marginBottom: 6,
        fontWeight: 700,
    },
    row: {
        flexDirection: 'row',
        gap: 20,
    },
    inputBlock: {
        flex: 1,
    },
    label: {
        fontSize: 15,
        color: Colors.placeholder,
        marginBottom: 2,
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.placeholder,
        borderRadius: 11,
        height: 40,
        paddingHorizontal: 12,
        fontSize: 15,
        color: Colors.textPrimary

    },
    checkSection: {
        marginTop: 25,
    },
    checkboxRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 23,
    },
    text: {
        fontSize: 18,
        color: Colors.textPrimary,
    },
    footer: {
        marginTop: 'auto',
    },
})