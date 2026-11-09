import { Colors } from '@/shared/styles'
import Svg, { Circle, Path, SvgProps } from 'react-native-svg'

const DEFAULT_COLOR = '#000000'

export default function Reject({
	color = DEFAULT_COLOR,
	width = 28,
	height = 28,
	...props
}: SvgProps) {
	return (
		<Svg
			width={width}
			height={height}
			viewBox='0 0 28 28'
			fill='none'
			{...props}
		>
			<Circle cx='14' cy='14' r='12.5' stroke={color} strokeWidth={1.5} />
			<Path
				d='M 10 10 L 18 18 M 18 10 L 10 18'
				stroke={color}
				strokeWidth={1.5}
				strokeLinecap='round'
			/>
		</Svg>
	)
}
