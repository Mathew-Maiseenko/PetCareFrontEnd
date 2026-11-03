import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { Colors } from '@/shared/styles'

const mockSitters = [
	{ id: '1', name: 'Павел', role: 'Зооняня', avatar: 'https://i.pravatar.cc/150?img=11' },
	{ id: '2', name: 'Матвей', role: 'Зооняня', avatar: 'https://i.pravatar.cc/150?img=12' },
	{ id: '3', name: 'Александра', role: 'Зооняня', avatar: 'https://i.pravatar.cc/150?img=5' },
	{ id: '4', name: 'Игорь', role: 'Зооняня', avatar: 'https://i.pravatar.cc/150?img=13' },
	{ id: '5', name: 'Мария', role: 'Зооняня', avatar: 'https://i.pravatar.cc/150?img=9' },
]

export default function SitterList() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Для вас</Text>
			
			{mockSitters.map((person) => (
				<Pressable 
					key={person.id} 
					style={({ pressed }) => [styles.personRow, pressed && styles.pressed]}
				>
					<Image source={{ uri: person.avatar }} style={styles.avatar} />
					<View style={styles.personInfo}>
						<Text style={styles.personName}>{person.name}</Text>
						<Text style={styles.personRole}>{person.role}</Text>
					</View>
				</Pressable>
			))}
		</View>
	)
}


const styles = StyleSheet.create({
	container: {
		marginTop: 36,
		paddingHorizontal: 24,
	},
	title: {
		fontSize: 24,
		fontWeight: '700',
		color: Colors.textPrimary,
		marginBottom: 26,
	},
	personRow: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 21,
	},
	pressed: {
		opacity: 0.7,
	},
	avatar: {
		width: 59,
		height: 59,
		borderRadius: 30,
		marginRight: 17,
	},
	personInfo: {
		justifyContent: 'center',
	},
	personName: {
		fontSize: 20,
		fontWeight: '600',
		color: Colors.textPrimary,
		marginBottom: 3,
	},
	personRole: {
		fontSize: 15,
		color: Colors.textSecondary,
	},
})