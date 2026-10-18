import { Text, View } from 'react-native'

import { styles } from './styles'

type ProfileDetailsRowProps = {
	label: string
	value: string
}

export function ProfileDetailsRow({ label, value }: ProfileDetailsRowProps) {
	return (
		<View style={styles.detailsRow}>
			<Text style={styles.detailsLabel}>{label}</Text>
			<Text style={styles.detailsValue}>{value}</Text>
		</View>
	)
}
