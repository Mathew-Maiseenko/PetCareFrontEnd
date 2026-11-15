import { Svg, Circle, Path, SvgProps } from 'react-native-svg'

export function Block({
	color = '#000000',
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
			<Circle cx='12' cy='12' r='9' stroke={color} strokeWidth={2} />
			<Path
				d='M6 6L18 18'
				stroke={color}
				strokeWidth={2}
				strokeLinecap='round'
			/>
		</Svg>
	)
}
