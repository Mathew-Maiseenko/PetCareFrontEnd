import Svg, { Path, SvgProps } from 'react-native-svg'

export default function TickIcon(props: SvgProps) {
	return (
		<Svg width='16' height='16' viewBox='0 0 16 16' fill='none' {...props}>
			<Path
				d='M3.26172 8.84547L6.11118 11.6948L12.473 5.33301'
				stroke='black'
				strokeWidth={2}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</Svg>
	)
}
