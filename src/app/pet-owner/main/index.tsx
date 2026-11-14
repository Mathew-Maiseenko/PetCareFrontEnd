import { View, StyleSheet, ScrollView, Keyboard } from 'react-native'
import { SearchBar } from '@/feature/home-owner/ui/searchBar'
import { Colors } from '@/shared/styles'
import BannerCarousel from '@/feature/home-owner/ui/banners'
import SitterList from '@/feature/home-owner/ui/sitterList'
import { useState, useEffect } from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function OwnerMainRoute() {
	const [isSearch, setIsSearch] = useState(false)
	const { focus, q } = useLocalSearchParams()
	useEffect(() => {
        if (focus === 'true') {
            setIsSearch(true)
        }
    }, [focus])
	return (
		<View style={{ flex: 1 }}>
			<View style={styles.headerContainer}>
				<SearchBar 
				    style={{marginTop: 58}}
				    onFocus={() => setIsSearch(true)} 
					onBlur={() => setIsSearch(false)} 
					initialText={q as string}
					autoFocus={focus === 'true'}
					/>
			</View>
			{!isSearch && (
				<View style={styles.container}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<BannerCarousel />
					<SitterList />
				</ScrollView>
			</View>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: { 
		flex: 1, 
		backgroundColor: Colors.backgroundPrimary,
	},
	headerContainer: {
		backgroundColor: Colors.backgroundPrimary,
		paddingBottom: 9
	}
})