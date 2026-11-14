import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native'
import { Colors } from '@/shared/styles'
import SortIcon from '@/shared/ui/Icons/Sort'
import FilterIcon from '@/shared/ui/Icons/Filter'
import { router } from 'expo-router'
import { useState } from 'react'

export function SearchFilters() {
    const [activeTag, setActiveTag] = useState('Акции')
    return (
        <View style={styles.container}>
            <View style={styles.topRow}>
                <Pressable style={styles.row}>
                    <SortIcon/>
					<Text style={[styles.text, { marginLeft: 8 }]}>Популярные</Text>
                </Pressable>
                <Pressable style={styles.row} onPress={() => router.push('/pet-owner/search/filter')}>
					<FilterIcon/>
					<Text style={[styles.text, { marginLeft: 8 }]}>Фильтры</Text>
				</Pressable>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 24 }}>
				<Pressable 
                    onPress={() => setActiveTag('Акции')} 
                    style={[styles.tag, activeTag === 'Акции' && styles.tagActive]}>
                    <Text style={styles.tagText}>Акции</Text>
                </Pressable>
				<Pressable 
                    onPress={() => setActiveTag('Зооняня')} 
                    style={[styles.tag, activeTag === 'Зооняня' && styles.tagActive]}>
                    <Text style={styles.tagText}>Зооняня</Text>
                </Pressable>
				<Pressable 
                    onPress={() => setActiveTag('Зоогостиница')} 
                    style={[styles.tag, activeTag === 'Зоогостиница' && styles.tagActive]}>
                    <Text style={styles.tagText}>Зоогостинница</Text>
                </Pressable>
				<Pressable 
                    onPress={() => setActiveTag('По договору')} 
                    style={[styles.tag, activeTag === 'По договору' && styles.tagActive]}>
                    <Text style={styles.tagText}>По договору</Text>
                </Pressable>
			</ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
	container: { 
        marginTop: 26,
        marginBottom: 39
    },
	topRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 24,
		marginBottom: 26,
	},
	row: { 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
	text: { 
        fontSize: 15, 
        color: Colors.textPrimary 
    },
	tag: {
		paddingHorizontal: 20,
		paddingVertical: 8,
		borderRadius: 10,
		backgroundColor: '#EBEBEB',
		marginRight: 8,
	},
	tagActive: { 
        backgroundColor: Colors.buttonPrimary 
    },
	tagText: { 
        fontSize: 14, 
        color: Colors.textPrimary
    },
})