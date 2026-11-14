import { Avatar } from '@/shared/ui/Avatar'
import { Text, View } from 'react-native'

import { styles } from './styles'

type ProfileIdentityProps = {
	name: string
	roleLabel: string
	avatarUri: string | null
}

export function ProfileIdentity({
	name,
	roleLabel,
	avatarUri,
}: ProfileIdentityProps) {
	return (
		<View style={styles.identity}>
			<Avatar uri={avatarUri} size={162} />
			<View style={styles.identityText}>
				<Text style={styles.name}>{name}</Text>
				<Text style={styles.role}>{roleLabel}</Text>
			</View>
		</View>
	)
}
