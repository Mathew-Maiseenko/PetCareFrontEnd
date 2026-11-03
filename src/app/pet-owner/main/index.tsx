import { View, StyleSheet, ScrollView } from 'react-native'
import { SearchBar } from '@/feature/home-owner/ui/searchBar'
import { Colors } from '@/shared/styles'
import BannerCarousel from '@/feature/home-owner/ui/banners'
import SitterList from '@/feature/home-owner/ui/sitterList'

export default function OwnerMainRoute() {
	return (
		<View style={styles.container}>
			<SearchBar />
			<ScrollView showsVerticalScrollIndicator={false}>
				<BannerCarousel />
				<SitterList />
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: { 
		flex: 1, 
		backgroundColor: Colors.backgroundPrimary 
	},
})