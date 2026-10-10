import { Colors } from '@/shared/styles'
import Svg, { ClipPath, Defs, G, Path, Rect, SvgProps } from 'react-native-svg'

const DEFAULT_COLOR = Colors.placeholder

export default function ArrowIcon({
	color = DEFAULT_COLOR,
	stroke = color,
	width,
	height,
	...props
}: SvgProps) {
	return (
		<Svg
			width={width}
			height={height}
			viewBox='0 0 15 15'
			fill='none'
			{...props}
		>
			<G clipPath='url(#clip0_69_125)'>
				<Path
					d='M1.875 4.375L7.5 10.3125L14 4.375'
					stroke={stroke}
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</G>
			<Defs>
				<ClipPath id='clip0_69_125'>
					<Rect
						width='15'
						height='15'
						fill='white'
						transform='translate(6.55671e-07 15) rotate(-90)'
					/>
				</ClipPath>
			</Defs>
		</Svg>
	)
}
