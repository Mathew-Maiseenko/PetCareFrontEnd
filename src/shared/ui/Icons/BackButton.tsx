import Svg, { Path, SvgProps } from 'react-native-svg'

const DEFAULT_COLOR = '#FEBC46'

export default function BackArrowIcon({
	color = DEFAULT_COLOR,
	width = 30,
	height = 30,
	...props
}: SvgProps) {
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 30 30"
			fill="none"
			{...props}
		>
			<Path
				d="M21.25 3.75L9.375 15L21.25 26.25"
				stroke={color}
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	)
}