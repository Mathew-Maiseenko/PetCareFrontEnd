import { FlatList, Image, View, StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
const BANNER_WIDTH = width * 0.88 
const SPACING = 12
const banners = [
	{ id: '1', image: require('@/assets/images/banner2.png') },
	{ id: '2', image: require('@/assets/images/banner.png') },
	{ id: '3', image: require('@/assets/images/banner3.png') },
]

export default function BannerCarousel() {
	return (
		<View style={styles.container}>
			<FlatList
				data={banners}
				horizontal
				showsHorizontalScrollIndicator={false}
				snapToInterval={BANNER_WIDTH + SPACING} 
				decelerationRate='fast'
                initialScrollIndex={1}
                getItemLayout={(data, index) => ({
					length: BANNER_WIDTH + SPACING,
					offset: (BANNER_WIDTH + SPACING) * index,
					index,
				})}
				contentContainerStyle={{ 
					paddingHorizontal: (width - BANNER_WIDTH) / 2 
				}}
				renderItem={({ item }) => (
					<View style={styles.bannerWrapper}>
						<Image 
							source={item.image} 
							style={styles.bannerImage} 
							resizeMode='cover' 
						/>
					</View>
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 40,
	},
	bannerWrapper: {
		width: BANNER_WIDTH,
		marginRight: SPACING,
	},
	bannerImage: {
		width: '100%',
		height: 188,
		borderRadius: 22,
	},
})