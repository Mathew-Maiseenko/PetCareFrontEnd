import { Colors } from '@/shared/styles'
import Svg, { Path, SvgProps } from 'react-native-svg'

const DEFAULT_COLOR = Colors.icon

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
			viewBox="0 0 34 34"
			fill="none"
			{...props}
		>
			<Path
				d="M5.25 16.7764C2.0625 12.5264 3.125 6.15142 8.4375 4.02642C13.75 1.90142 16.9375 6.15142 18 8.27642C19.0625 6.15142 23.3125 1.90142 28.625 4.02642C33.9375 6.15142 33.9375 12.5264 30.75 16.7764C27.5625 21.0264 18 29.5264 18 29.5264C18 29.5264 8.4375 21.0264 5.25 16.7764Z"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	)
}