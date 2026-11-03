import { Colors } from '@/shared/styles'
import Svg, { Path, SvgProps } from 'react-native-svg'

const DEFAULT_COLOR = Colors.icon

export default function HomeIcon({
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
				d="M1.13281 18.6192L17.3233 3.23828L32.7042 18.6192H28.4138V30.7621H20.6423V21.9383H13.4376V30.7621H5.26138V18.6192H1.13281Z"
				stroke={color}
				strokeWidth="2"
				strokeLinejoin="round"
			/>
		</Svg>
	)
}