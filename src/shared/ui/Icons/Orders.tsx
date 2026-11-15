import { Colors } from '@/shared/styles'
import { RoleTabIconProps } from '@/shared/navigation/role-tabs'
import Svg, { Path, Rect } from 'react-native-svg'

const DEFAULT_COLOR = Colors.icon

export default function OrdersIcon({
	color = DEFAULT_COLOR,
	focused = false,
	width = 30,
	height = 28,
	...props
}: RoleTabIconProps) {
	if (focused) {
		return (
			<Svg
				width={width}
				height={height}
				viewBox='0 0 30 28'
				fill='none'
				{...props}
			>
				<Rect
					x={1}
					y={1}
					width={28}
					height={25.699}
					rx={4}
					fill={color}
					stroke={color}
					strokeWidth={2}
					strokeLinejoin='round'
				/>
				<Path
					d='M7 8.04102L23 8.04102'
					stroke='#FFFFFF'
					strokeWidth={2}
					strokeLinecap='round'
				/>
				<Path
					d='M7 14.2969H23'
					stroke='#FFFFFF'
					strokeWidth={2}
					strokeLinecap='round'
				/>
				<Path
					d='M7 20.5508L17 20.5508'
					stroke='#FFFFFF'
					strokeWidth={2}
					strokeLinecap='round'
				/>
			</Svg>
		)
	}

	return (
		<Svg width={width} height={height} viewBox='0 0 30 28' fill='none' {...props}>
			<Rect
				x='1'
				y='1'
				width='28'
				height='25.699'
				rx='4'
				stroke={color}
				strokeWidth={2}
				strokeLinejoin='round'
			/>
			<Path
				d='M7 8.04102L23 8.04102'
				stroke={color}
				strokeWidth={2}
				strokeLinecap='round'
			/>
			<Path
				d='M7 14.2969H23'
				stroke={color}
				strokeWidth={2}
				strokeLinecap='round'
			/>
			<Path
				d='M7 20.5508L17 20.5508'
				stroke={color}
				strokeWidth={2}
				strokeLinecap='round'
			/>
		</Svg>
	)
}
