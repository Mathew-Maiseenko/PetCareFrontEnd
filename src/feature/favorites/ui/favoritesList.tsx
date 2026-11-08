import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native'
import { Colors } from '@/shared/styles'

const mockFavorites = [
    { id: '1', name: 'Алена', role: 'Зооняня', avatar: 'https://i.pravatar.cc/150?img=25' },
    { id: '2', name: 'Галина', role: 'Зооняня', avatar: 'https://i.pravatar.cc/150?img=20' },
    { id: '3', name: 'Мария', role: 'Зооняня', avatar: 'https://i.pravatar.cc/150?img=9' },
]

export function FavoritesList() {
    return (
        <View style={styles.container}>
            {mockFavorites.map((person) => (
                    <View key={person.id} style={styles.personRow}>
                        <View style={styles.leftSide}>
                            <Image source={{ uri: person.avatar }} style={styles.avatar}/>
                            <View style={styles.info}>
                                <Text style={styles.name}>{person.name}</Text>
                                <Text style={styles.role}>{person.role}</Text>
                            </View>
                        </View>
                        <Pressable style={styles.deleteButton}>
                            <Text style={styles.deleteText}>Удалить</Text>
                        </Pressable>
                    </View>
            ))}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.backgroundPrimary,
    },
	personRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 24,
		marginBottom: 21,
	},
	leftSide: {
		flexDirection: 'row',
	},
	avatar: {
		width: 59,
		height: 59,
		borderRadius: 30,
		marginRight: 17
	},
	info: {
		justifyContent: 'center',
	},
	name: {
		fontSize: 20,
		color: Colors.textPrimary,
		marginBottom: 3,
        fontWeight: 600
	},
	role: {
		fontSize: 15,
		color: Colors.placeholder,
	},
	deleteButton: {
		backgroundColor: '#EBEBEB',
		paddingVertical: 8,
		paddingHorizontal: 18,
		borderRadius: 5,
	},
	deleteText: {
		fontSize: 14,
		color: Colors.textPrimary,
        fontWeight: '700'
	},
})