import { View, Text, ScrollView, StyleSheet } from 'react-native'
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
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                <View style={[styles.card, styles.headerCard]}>
                    <SpecialistHeader onPressMenu={() => setIsMenuOpen(true)} />
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
                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>Отзывы</Text>
                    <SpecialistRating rating={5.0} />
                </View>
                <View style={styles.calendarCard}>
                    <View style={styles.calendarHeader}>
                        <Text style={styles.sectionTitle}>Календарь</Text>
                        <Text style={styles.month}>Декабрь</Text>
                    </View>
                    <SpecialistCalendar />
                </View>

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
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#F2F2F2' 
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