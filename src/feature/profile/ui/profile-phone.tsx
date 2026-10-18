import { Text, View } from 'react-native'

import { styles } from './styles'

type ProfilePhoneProps = {
	phone: string
}

export function ProfilePhone({ phone }: ProfilePhoneProps) {
	return (
		<View>
			<Text style={styles.phoneLabel}>Телефон</Text>
			<Text style={styles.phoneValue}>{phone}</Text>
		</View>
	)
}
