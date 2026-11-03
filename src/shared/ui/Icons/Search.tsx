import { Colors } from '@/shared/styles'
import Svg, { ClipPath, Defs, G, Path, Rect, SvgProps } from 'react-native-svg'

const DEFAULT_COLOR = Colors.icon

export default function SearchIcon({
    color = DEFAULT_COLOR,
	width = 34,
	height = 34,
	...props
}: SvgProps) {
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 22 22"
			fill="none"
			{...props}
		>
			<Path
				d="M17.65 10.2C17.65 13.7622 14.7622 16.65 11.2 16.65C7.63776 16.65 4.75 13.7622 4.75 10.2C4.75 6.63776 7.63776 3.75 11.2 3.75C14.7622 3.75 17.65 6.63776 17.65 10.2Z"
				stroke={color}
				strokeWidth="1.5"
			/>
			<Path
				d="M15.3984 15L18.9984 18.6"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</Svg>
	)
}