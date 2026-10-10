import Svg, { Path, SvgProps } from 'react-native-svg'

const DEFAULT_COLOR = '#9D9D9D'

export default function NotificationIcon({
	color = DEFAULT_COLOR,
	width = 33,
	height = 33,
	...props
}: SvgProps) {
	return (
		<Svg
			width={width}
			height={height}
			viewBox='0 0 33 33'
			fill='none'
			{...props}
		>
			<Path
				d='M27.1455 22.307C25.5155 20.312 24.3647 19.2964 24.3647 13.7963C24.3647 8.7596 21.7927 6.96517 19.6758 6.09366C19.3946 5.97814 19.1299 5.71281 19.0442 5.424C18.6729 4.16022 17.6319 3.04688 16.2482 3.04688C14.8644 3.04688 13.8228 4.16086 13.4553 5.42527C13.3696 5.71725 13.1049 5.97814 12.8237 6.09366C10.7043 6.96644 8.13485 8.75452 8.13485 13.7963C8.13167 19.2964 6.98088 20.312 5.35085 22.307C4.67548 23.1334 5.26706 24.3744 6.44833 24.3744H26.0544C27.2293 24.3744 27.8171 23.1296 27.1455 22.307Z'
				stroke={color}
				strokeWidth={2}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<Path
				d='M20.3123 24.375V25.3906C20.3123 26.468 19.8843 27.5013 19.1224 28.2631C18.3606 29.025 17.3273 29.453 16.2499 29.453C15.1725 29.453 14.1392 29.025 13.3773 28.2631C12.6155 27.5013 12.1875 26.468 12.1875 25.3906V24.375'
				stroke={color}
				strokeWidth={2}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</Svg>
	)
}
