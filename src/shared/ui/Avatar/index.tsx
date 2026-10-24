import { Colors } from '@/shared/styles'
import ProfileIcon from '@/shared/ui/Icons/Profile'
import { Image, View } from 'react-native'

import { styles } from './styles'
import { AvatarProps } from './types'

export function Avatar({ uri, size = 112, style, ...props }: AvatarProps) {
	const borderRadius = size / 2

	if (!uri) {
		return (
			<View
				style={[
					styles.fallback,
					{
						width: size,
						height: size,
						borderRadius,
						backgroundColor: Colors.backgroundGrouped,
					},
					style,
				]}
			>
				<ProfileIcon width={size * 0.45} height={size * 0.45} />
			</View>
		)
	}

	return (
		<Image
			source={{ uri }}
			style={[
				styles.image,
				{ width: size, height: size, borderRadius },
				style,
			]}
			{...props}
		/>
	)
}
