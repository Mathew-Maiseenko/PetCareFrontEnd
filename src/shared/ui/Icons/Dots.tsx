import Svg, { Circle, SvgProps } from 'react-native-svg'

const DEFAULT_COLOR = '#9D9D9D'

export default function DotsIcon({
	color = DEFAULT_COLOR,
	width = 24,
	height = 24,
	...props
}: SvgProps) {
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 44 39"
			fill="none"
			{...props}
		>
			<Circle cx="28.5" cy="20.5" r="2.5" fill={color} />
			<Circle cx="21.5" cy="20.5" r="2.5" fill={color} />
			<Circle cx="14.5" cy="20.5" r="2.5" fill={color} />
		</Svg>
	)
}