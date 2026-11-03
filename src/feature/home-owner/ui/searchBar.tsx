import { TextInput, View, StyleSheet } from 'react-native'
import { Colors } from '@/shared/styles'
import SearchIcon from '@/shared/ui/Icons/Search'

export function SearchBar() {
	return (
		<View style={styles.container}>
			<SearchIcon width={22} height={22} color={Colors.placeholder} />
			<TextInput
				placeholder="Поиск"
				placeholderTextColor={Colors.placeholder}
				style={styles.input}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row", 
        alignItems: 'center',
        backgroundColor: '#EBEBEB',
        borderRadius: 11,
        marginHorizontal: 24,
        marginTop: 58,
        height: 40,
		paddingHorizontal: 12,
    },
    input: {
        flex: 1, 
        fontSize: 15, 
        color: '#000',
		marginLeft: 9,
        paddingVertical: 0,
    }
})