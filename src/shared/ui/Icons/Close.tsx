import { Colors } from '@/shared/styles'
import Svg, { Path, SvgProps } from 'react-native-svg'

const DEFAULT_COLOR = Colors.icon

export default function CloseIcon({
	color = DEFAULT_COLOR,
	width = 24,
	height = 24,
	...props
}: SvgProps) {
	return (
		<Svg
			width={width}
			height={height}
			viewBox='0 0 24 24'
			fill='none'
			{...props}
		>
			<Path
				d='M6 6L18 18M18 6L6 18'
				stroke={color}
				strokeWidth={2}
				strokeLinecap='round'
			/>
		</Svg>
	)
}
