import { Colors } from '@/shared/styles'
import Svg, { Path, SvgProps } from 'react-native-svg'

const DEFAULT_COLOR = Colors.placeholder

export default function CloseIcon({
	color = DEFAULT_COLOR,
	width = 14,
	height = 14,
	...props
}: SvgProps) {
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 14 14"
			fill="none"
			{...props}
		>
			<Path
				d="M1.5 12.5L12.6667 1"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<Path
				d="M1.39844 1.26562L12.5986 12.4011"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</Svg>
	)
}