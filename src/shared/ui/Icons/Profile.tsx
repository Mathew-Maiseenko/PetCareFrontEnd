import { Colors } from '@/shared/styles'
import Svg, {
	Circle,
	ClipPath,
	Defs,
	G,
	Path,
	Rect,
	SvgProps,
} from 'react-native-svg'

const DEFAULT_COLOR = Colors.iconAccent

export default function ProfileIcon({
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
			<G clipPath='url(#clip-profile)'>
				<Circle
					cx='16.9199'
					cy='17.7285'
					r='15.2714'
					stroke={color}
					strokeWidth={2}
				/>
				<Path
					d='M16.921 20.3197C9.21435 20.3197 7.82736 26.634 8.0972 29.7911C17.2933 34.0395 23.7481 31.5613 25.826 29.7911C26.6355 19.5101 17.002 20.3197 16.921 20.3197Z'
					fill={color}
					stroke={color}
					strokeWidth={2}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<Circle
					cx='17.0017'
					cy='13.5993'
					r='3.85714'
					fill={color}
					stroke={color}
					strokeWidth={2}
				/>
			</G>
			<Defs>
				<ClipPath id='clip-profile'>
					<Rect width='34' height='34' fill='white' />
				</ClipPath>
			</Defs>
		</Svg>
	)
}
