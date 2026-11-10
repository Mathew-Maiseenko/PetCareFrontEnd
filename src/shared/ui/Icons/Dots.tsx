import { Svg, Circle, SvgProps } from 'react-native-svg'

export function Dots({
	color = '#9D9D9D',
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
			<Circle cx='6' cy='14' r='2' fill={color} />
			<Circle cx='14' cy='14' r='2' fill={color} />
			<Circle cx='22' cy='14' r='2' fill={color} />
		</Svg>
	)
}
