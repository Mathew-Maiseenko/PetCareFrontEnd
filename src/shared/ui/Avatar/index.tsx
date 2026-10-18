import { Image } from 'react-native'

import { styles } from './styles'
import { AvatarProps } from './types'

export function Avatar({ uri, size = 112, style, ...props }: AvatarProps) {
	return (
		<Image
			source={{ uri }}
			style={[
				styles.image,
				{ width: size, height: size, borderRadius: size / 2 },
				style,
			]}
			{...props}
		/>
	)
}
