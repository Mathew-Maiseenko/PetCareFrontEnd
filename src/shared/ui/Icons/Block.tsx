import { SvgProps } from 'react-native-svg'
import Svg, { Circle, Path } from 'react-native-svg'

export default function BlockIcon({
	color = '#000',
	width = 21,
	height = 21,
	...props
}: SvgProps) {
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 21 21"
			fill="none"
			{...props}
		>
			<Circle
				cx="10.5"
				cy="10.5"
				r="9.65"
				stroke={color}
				strokeWidth="1.7"
			/>
			<Path
				d="M3.22656 4.8457L17.765 16.1534"
				stroke={color}
				strokeWidth="1.7"
			/>
		</Svg>
	)
}