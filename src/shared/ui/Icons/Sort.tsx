import { SvgProps } from 'react-native-svg'
import Svg, { Path } from 'react-native-svg'

export default function SortIcon({
	color = '#FEBC46',
	width = 26,
	height = 26,
	...props
}: SvgProps) {
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 26 26"
			fill="none"
			{...props}
		>
			<Path
				d="M4.33203 8.66699H14.082"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<Path
				d="M6.5 14.083H14.0833"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<Path
				d="M8.66797 19.5H14.0846"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<Path
				d="M18.418 21.6663V4.33301L21.668 8.66634"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	)
}