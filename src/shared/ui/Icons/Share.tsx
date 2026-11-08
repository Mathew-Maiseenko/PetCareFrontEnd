import { SvgProps } from 'react-native-svg'
import Svg, { Path } from 'react-native-svg'

export default function ShareIcon({
	color = '#000',
	width = 21,
	height = 21,
	...props
}: SvgProps) {
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 21 21"
			fill="none"
			{...props}
		>
			<Path
				d="M2.625 12.25V17.5C2.625 18.4665 3.4085 19.25 4.375 19.25H16.625C17.5915 19.25 18.375 18.4665 18.375 17.5V12.25"
				stroke={color}
				strokeWidth="1.7"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M10.5 14.875V2.625M14.875 7.38888L10.5 2.625L6.125 7.3889"
				stroke={color}
				strokeWidth="1.7"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	)
}