import { ScrollView, StyleSheet, View } from 'react-native'
import { SearchHeader } from '@/feature/search/ui/searchHeader'
import { SearchFilters } from '@/feature/search/ui/searchFilter'
import { SearchResults } from '@/feature/search/ui/searchResult'
import { SearchBar } from '@/feature/home-owner/ui/searchBar'
import { Colors } from '@/shared/styles'

export default function SearchScreen() {
    return (
        <View style={styles.screen}>
            <SearchHeader/>
            <View>
				<SearchBar 
                    style={{marginTop: 20}}
                    onFocus={() => {}} 
                    onBlur={() => {}} /> 
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