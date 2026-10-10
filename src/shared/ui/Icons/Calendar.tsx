import { Colors } from '@/shared/styles'
import Svg, { ClipPath, Defs, G, Path, Rect, SvgProps } from 'react-native-svg'

const DEFAULT_COLOR = Colors.icon

export default function CalendarIcon({
	color = DEFAULT_COLOR,
	width = 34,
	height = 34,
	...props
}: SvgProps) {
	return (
		<Svg
			width={width}
			height={height}
			viewBox='0 0 34 34'
			fill='none'
			{...props}
		>
			<G clipPath='url(#clip-calendar)'>
				<Path
					d='M3.58594 7.28516V29.4661H29.6318V7.28516H3.58594Z'
					stroke={color}
					strokeWidth={2}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<Rect x='4.5' y='12.3008' width='25' height='2' fill={color} />
				<Rect
					x='12.7891'
					y='15.2188'
					width='2.9633'
					height='3.07619'
					rx='1'
					fill={color}
				/>
				<Rect
					x='12.7891'
					y='19.5898'
					width='2.9633'
					height='3.07619'
					rx='1'
					fill={color}
				/>
				<Rect
					x='12.7891'
					y='23.9609'
					width='2.9633'
					height='3.07619'
					rx='1'
					fill={color}
				/>
				<Rect
					x='7.95312'
					y='15.2188'
					width='2.9633'
					height='3.07619'
					rx='1'
					fill={color}
				/>
				<Rect
					x='7.95312'
					y='19.5898'
					width='2.9633'
					height='3.07619'
					rx='1'
					fill={color}
				/>
				<Rect
					x='7.95312'
					y='23.9609'
					width='2.9633'
					height='3.07619'
					rx='1'
					fill={color}
				/>
				<Rect
					x='17.625'
					y='15.2188'
					width='2.9633'
					height='3.07619'
					rx='1'
					fill={color}
				/>
				<Rect
					x='17.625'
					y='19.5898'
					width='2.9633'
					height='3.07619'
					rx='1'
					fill={color}
				/>
				<Rect
					x='17.625'
					y='23.9609'
					width='2.9633'
					height='3.07619'
					rx='1'
					fill={color}
				/>
				<Rect
					x='22.457'
					y='15.2188'
					width='2.9633'
					height='3.07619'
					rx='1'
					fill={color}
				/>
				<Rect
					x='22.457'
					y='19.5898'
					width='2.9633'
					height='3.07619'
					rx='1'
					fill={color}
				/>
				<Path
					d='M23.082 9.79531V4.69531'
					stroke={color}
					strokeWidth={2}
					strokeLinecap='round'
				/>
				<Path
					d='M10.1406 9.79531V4.69531'
					stroke={color}
					strokeWidth={2}
					strokeLinecap='round'
				/>
			</G>
			<Defs>
				<ClipPath id='clip-calendar'>
					<Rect width='34' height='34' fill='white' />
				</ClipPath>
			</Defs>
		</Svg>
	)
}
