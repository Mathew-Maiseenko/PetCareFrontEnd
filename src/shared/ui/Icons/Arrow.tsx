import Svg, { ClipPath, Defs, G, Path, Rect, SvgProps } from 'react-native-svg'

export default function ArrowIcon(props: SvgProps) {
	return (
		<Svg
			width={props.width}
			height={props.height}
			viewBox='0 0 15 15'
			fill='none'
		>
			<G clip-path='url(#clip0_69_125)'>
				<Path
					d='M1.875 4.375L7.5 10.3125L14 4.375'
					stroke={props.stroke}
					stroke-width='1.5'
					stroke-linecap='round'
					stroke-linejoin='round'
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
