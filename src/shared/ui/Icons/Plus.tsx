import Svg, { Rect, Path, SvgProps } from 'react-native-svg'

export default function PlusIcon({
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
			<Rect width="26" height="26" rx="13" fill="#FEBC46" />
			<Path
				d="M13 7V19"
				stroke="#000"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M19 12.998L7 12.998"
				stroke="#000"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	)
}