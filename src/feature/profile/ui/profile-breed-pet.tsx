import { Text, View } from 'react-native'

import { styles } from './styles'

type ProfilePetProps = {
	breed: string
}

export function ProfileBreedPet({ breed }: ProfilePetProps) {
	return (
		<View>
			<Text style={styles.phoneLabel}>Порода</Text>
			<Text style={styles.phoneValue}>{breed}</Text>
		</View>
	)
}
