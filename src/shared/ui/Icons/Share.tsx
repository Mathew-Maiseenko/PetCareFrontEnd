import { Svg, Path, SvgProps } from 'react-native-svg'

export function Share({
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
			<Path
				d='M12 15V3M12 3L8 7M12 3L16 7M5 12V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V12'
				stroke={color}
				strokeWidth={2}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</Svg>
	)
}
