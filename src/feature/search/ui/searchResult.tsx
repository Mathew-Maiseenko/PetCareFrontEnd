import { View, Text, Image, StyleSheet } from 'react-native'
import { Colors } from '@/shared/styles'

const mockResults = [
	{ id: '1', name: 'Павел', role: 'Зооняня', avatar: 'https://i.pravatar.cc/150?img=11' },
	{ id: '2', name: 'Пробел', role: 'Зооняня', avatar: 'https://i.pravatar.cc/150?img=12' },
	{ id: '3', name: 'Александра', role: 'Зооняня', avatar: 'https://i.pravatar.cc/150?img=5' },
	{ id: '4', name: 'Алена', role: 'Зооняня', avatar: 'https://i.pravatar.cc/150?img=25' },
]


export function SearchResults() {
	return (
		<View style={styles.container}>
			{mockResults.map((person) => (
				<View key={person.id} style={styles.personRow}>
					<Image source={{ uri: person.avatar }} style={styles.avatar} />
					<View style={styles.info}>
						<Text style={styles.name}>{person.name}</Text>
						<Text style={styles.role}>{person.role}</Text>
					</View>
				</View>
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	container: { 
        paddingHorizontal: 24 
    },
	personRow: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 21 
    },
	avatar: { 
        width: 59, 
        height: 59, 
        borderRadius: 30, 
        marginRight: 17
    },
	info: { 
        justifyContent: 'center' 
    },
	name: { 
        fontSize: 20,
        color: Colors.textPrimary, 
        marginBottom: 3 
    },
	role: {
        fontSize: 15,
        color: Colors.textSecondary,
    },
})