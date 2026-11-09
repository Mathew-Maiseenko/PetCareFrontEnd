import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native'
import { useState } from 'react'
import { Colors } from '@/shared/styles'
import { ProfileDescriptionCard } from '@/feature/profile/ui/profile-description-card'
import { ProfileIdentity } from '@/feature/profile/ui/profile-identity'
import { ProfileDetailsSheet } from '@/feature/profile/ui/profile-details-sheet'

import { SpecialistHeader } from './specialistHeader'
import { SpecialistRating } from './specialistRating'
import { SpecialistCalendar } from './specialistCalendar'
import { SpecialistFooter } from './specialistFooter'
import SpecialistMenuSheet from './specialistMenuSheet'
import { CalendarSheet } from './calendarSheet'
import { router } from 'expo-router'

const MOCK_PROFILE = {
    name: 'Алена',
    phone: '+375331264217',
    services: ['Грумминг', 'дрессировка', 'социализация животных'],
    workCity: 'Минск',
    priceFrom: '10',
    fullDescription: 'Я искренне люблю животных и ответственно подхожу к их безопасности и комфорту. Учитываю все ваши пожелания, особенности питомца и его режим. В ваше отсутствие я обеспечу заботу, прогулки, игры и соблюдение всех привычных правил. Вы всегда будете в курсе дня благодаря фото, видео и оперативной связи. Моя цель — ваше спокойствие и уверенность, что ваш любимец в надёжных руках.',
    avatarUri: 'https://i.pravatar.cc/300?img=9',
    firstName: 'Алена',
    birthDate: '01.01.2000',
    rating: 5.0,
    reviewsCount: 12,
} as any
export function SpecialistScreen() {
    const [isInfoOpen, setIsInfoOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isCalendarOpen, setIsCalendarOpen] = useState(false)
    const [headerHeight, setHeaderHeight] = useState(0) 
    return (
        <View style={styles.container}>
            <View style={styles.fixedHeader} onLayout={(event) => setHeaderHeight(event.nativeEvent.layout.height)}>
                <SpecialistHeader onPressMenu={() => setIsMenuOpen(true)} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[styles.scrollContent, { paddingTop: headerHeight - 50 }]}>
                <View style={[styles.card, styles.headerCard]}>
                    <ProfileIdentity 
                        name="АЛЕНА" 
                        roleLabel="Зооняня" 
                        avatarUri="https://i.pravatar.cc/300?img=9" 
                    />
                </View>
                <View style={{ marginBottom: 8 }}>
                    <ProfileDescriptionCard 
                        description="Я искренне люблю животных, ответственно подхожу к их безопасности и комфорту. Учитываю все..."
                        onPressDetails={() => setIsInfoOpen(true)}
                    />
                </View>
                <Pressable style={styles.card} onPress={() => router.push('/pet-owner/reviews')}>
                    <Text style={styles.sectionTitle}>Отзывы</Text>
                    <SpecialistRating rating={5.0} />
                </Pressable>
                <Pressable style={styles.calendarCard} onPress={() => setIsCalendarOpen(true)}>
                    <View style={styles.calendarHeader}>
                        <Text style={styles.sectionTitle}>Календарь</Text>
                        <Text style={styles.month}>Декабрь</Text>
                    </View>
                    <View pointerEvents="none"> 
                        <SpecialistCalendar />
                    </View>
                </Pressable>

            </ScrollView>

            <SpecialistFooter price="10 бел. р. /час" />
            <ProfileDetailsSheet 
                visible={isInfoOpen} 
                onClose={() => setIsInfoOpen(false)} 
                profile={MOCK_PROFILE} 
            />
            <SpecialistMenuSheet 
                visible={isMenuOpen} 
                onClose={() => setIsMenuOpen(false)} 
            />
            <CalendarSheet 
                visible={isCalendarOpen} 
                onClose={() => setIsCalendarOpen(false)} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#F2F2F2' 
    },
    fixedHeader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        paddingTop: 58, 
        paddingHorizontal: 24,
        backgroundColor: Colors.backgroundPrimary,
        zIndex: 10, 
    },
    scrollContent: {
        paddingBottom: 20 
    },
    card: {
        backgroundColor: Colors.backgroundPrimary, 
        borderRadius: 16, 
        paddingHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 16,
        marginBottom: 8, 
    },
    headerCard: { 
        paddingTop: 58,
        paddingBottom: 24,  
        marginBottom: 0,
    },
    sectionTitle: { 
        fontSize: 20, 
        fontWeight: '700', 
        color: Colors.textPrimary, 
        marginBottom: 12 
    },
    month: { 
        fontSize: 20,
        color: Colors.textPrimary
    },
    calendarCard: {
        backgroundColor: Colors.backgroundPrimary, 
        borderRadius: 16, 
        paddingTop: 16,
        paddingBottom: 16,
        marginBottom: 10,
        overflow: 'hidden',
    },
    calendarHeader: {
        paddingHorizontal: 24
    },
})