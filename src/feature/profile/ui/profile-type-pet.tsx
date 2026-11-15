import { Text, View } from 'react-native'

import { styles } from './styles'

type ProfilePetProps = {
	type: string
}

export function ProfileTypePet({ type }: ProfilePetProps) {
	return (
		<View>
			<Text style={styles.phoneLabel}>Какое животное?</Text>
			<Text style={styles.phoneValue}>{type}</Text>
		</View>
	)
}
