import { Colors } from '@/shared/styles'
import Svg, { Path, SvgProps } from 'react-native-svg'

const DEFAULT_COLOR = Colors.iconAccent || '#9D9D9D'

export default function HomeIcon({
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
				d='M 5 15 
           V 28 
           A 2 2 0 0 0 7 30 
           H 12 
           V 22 
           A 2 2 0 0 1 14 20 
           H 20 
           A 2 2 0 0 1 22 22 
           V 30 
           H 27 
           A 2 2 0 0 0 29 28 
           V 15 
           M 2 16 
           L 17 3 
           L 32 16'
				stroke={color}
				strokeWidth={2}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</Svg>
	)
}
