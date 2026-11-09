import { Colors } from '@/shared/styles'
import Svg, { Path, SvgProps } from 'react-native-svg'

const DEFAULT_COLOR = Colors.iconAccent || '#9D9D9D'

export default function HeartIcon({
	color = DEFAULT_COLOR,
	width = 34,
	height = 34,
	...props
}: SvgProps) {
	return (
		<Svg
			width={width}
			height={height}
			viewBox='0 0 34 34'
			fill='none'
			{...props}
		>
			<Path
				d='M 17 10 
           C 17 10 15 5 9 5 
           C 4 5 2 9 2 13 
           C 2 20 10 25 17 31 
           C 24 25 32 20 32 13 
           C 32 9 30 5 25 5 
           C 19 5 17 10 17 10 Z'
				stroke={color}
				strokeWidth={2}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</Svg>
	)
}
