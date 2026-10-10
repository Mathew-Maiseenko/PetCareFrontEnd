import Svg, { Path, SvgProps } from 'react-native-svg'

const DEFAULT_COLOR = '#FEBC46'

export default function LogOutIcon({
	color = DEFAULT_COLOR,
	width = 40,
	height = 42,
	...props
}: SvgProps) {
	return (
		<Svg
			width={width}
			height={height}
			viewBox='0 0 40 42'
			fill='none'
			{...props}
		>
			<Path
				d='M22 16V11.6875C22 11.3078 21.6865 11 21.3 11H8.7C8.3134 11 8 11.3078 8 11.6875V32.3125C8 32.6921 8.3134 33 8.7 33H21.3C21.6865 33 22 32.6921 22 32.3125V27.9999'
				stroke={color}
				strokeWidth={3}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<Path
				d='M16 22H31M26.9091 26L31 22L26.9096 18'
				stroke={color}
				strokeWidth={3}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</Svg>
	)
}
