import { Colors } from '@/shared/styles'
import Svg, { Circle, Path, SvgProps } from 'react-native-svg'

const DEFAULT_COLOR = Colors.iconAccent || '#000000'
const YELLOW_COLOR = '#FEBC46'

export default function AddPet({
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
			<Circle cx='8.5' cy='10' r='2.5' stroke={color} strokeWidth={2} />
			<Circle cx='14.5' cy='5.5' r='2.5' stroke={color} strokeWidth={2} />
			<Circle cx='21' cy='5.5' r='2.5' stroke={color} strokeWidth={2} />
			<Circle cx='26' cy='10' r='2.5' stroke={color} strokeWidth={2} />
			<Path
				d='M 6 15 C 6 10 28 10 28 15 C 28 20 24 24 17 24 C 10 24 6 20 6 15 Z'
				stroke={color}
				strokeWidth={2}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<Circle cx='24' cy='24' r='8' fill={YELLOW_COLOR} />
			<Circle cx='24' cy='24' r='8' stroke={color} strokeWidth={2} />
			<Path
				d='M 24 20 V 28 M 20 24 H 28'
				stroke={color}
				strokeWidth={2}
				strokeLinecap='round'
			/>
		</Svg>
	)
}
