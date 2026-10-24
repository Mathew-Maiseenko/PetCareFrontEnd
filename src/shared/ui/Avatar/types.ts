import { ImageProps } from 'react-native'

export type AvatarProps = Omit<ImageProps, 'source'> & {
	uri: string | null | undefined
	size?: number
}
