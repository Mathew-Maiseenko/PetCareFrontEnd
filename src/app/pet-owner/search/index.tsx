import { ScrollView, StyleSheet, View } from 'react-native'
import { SearchHeader } from '@/feature/search/ui/searchHeader'
import { SearchFilters } from '@/feature/search/ui/searchFilter'
import { SearchResults } from '@/feature/search/ui/searchResult'
import { SearchBar } from '@/feature/home-owner/ui/searchBar'
import { Colors } from '@/shared/styles'
import { useLocalSearchParams, router } from 'expo-router'

export default function SearchScreen() {
    const { q } = useLocalSearchParams()
    return (
        <View style={styles.screen}>
            <SearchHeader/>
            <View>
				<SearchBar 
                    style={{marginTop: 20}}
                    onFocus={() => {}} 
                    onBlur={() => {}} 
                    initialText={q as String}
                    onClearPress={() => router.push('/pet-owner/main?focus=true')}
                    onEditPress={(text: string) => router.push(`/pet-owner/main?focus=true&q=${text}`)}/> 
			</View>
			<SearchFilters />
			<ScrollView showsVerticalScrollIndicator={false}>
				<SearchResults />
			</ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
	screen: { 
        flex: 1, 
        backgroundColor: Colors.backgroundPrimary 
    },
})