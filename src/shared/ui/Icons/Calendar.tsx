import { Colors } from '@/shared/styles'
import { RoleTabIconProps } from '@/shared/navigation/role-tabs'
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'

const DEFAULT_COLOR = Colors.icon

const DOTS = [
	{ x: 12.79, y: 15.219 },
	{ x: 12.79, y: 19.5906 },
	{ x: 12.79, y: 23.9619 },
	{ x: 7.95264, y: 15.219 },
	{ x: 7.95264, y: 19.5906 },
	{ x: 7.95264, y: 23.9619 },
	{ x: 17.624, y: 15.219 },
	{ x: 17.624, y: 19.5906 },
	{ x: 17.624, y: 23.9619 },
	{ x: 22.4585, y: 15.219 },
	{ x: 22.4585, y: 19.5906 },
] as const

export default function CalendarIcon({
	color = DEFAULT_COLOR,
	focused = false,
	width = 34,
	height = 34,
	...props
}: RoleTabIconProps) {
	if (focused) {
		return (
			<Svg
				width={width}
				height={height}
				viewBox='0 0 34 34'
				fill='none'
				{...props}
			>
				<G clipPath='url(#clip-calendar-focused)'>
					<Path
						d='M3.58594 29.4666V7.28564H29.6318V29.4666H3.58594Z'
						stroke={color}
						strokeWidth={3}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<Rect x={4.08008} y={12.24} width={25.16} height={17} fill={color} />
					{DOTS.map((dot, index) => (
						<Rect
							key={index}
							x={dot.x}
							y={dot.y}
							width={2.9633}
							height={3.07619}
							rx={1}
							fill='white'
						/>
					))}
					<Path
						d='M23.083 9.79531V4.69531'
						stroke={color}
						strokeWidth={3}
						strokeLinecap='round'
					/>
					<Path
						d='M10.1387 9.79531V4.69531'
						stroke={color}
						strokeWidth={3}
						strokeLinecap='round'
					/>
				</G>
				<Defs>
					<ClipPath id='clip-calendar-focused'>
						<Rect width={34} height={34} fill='white' />
					</ClipPath>
				</Defs>
			</Svg>
		)
	}

	return (
		<Svg width={width} height={height} viewBox='0 0 34 34' fill='none' {...props}>
			<G clipPath='url(#clip-calendar)'>
				<Path
					d='M3.58594 7.28516V29.4661H29.6318V7.28516H3.58594Z'
					stroke={color}
					strokeWidth={2}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<Rect x='4.5' y='12.3008' width='25' height='2' fill={color} />
				{DOTS.map((dot, index) => (
					<Rect
						key={index}
						x={dot.x}
						y={dot.y}
						width={2.9633}
						height={3.07619}
						rx={1}
						fill={color}
					/>
				))}
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
