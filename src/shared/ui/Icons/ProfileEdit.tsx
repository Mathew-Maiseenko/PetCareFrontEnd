import Svg, { Path, SvgProps } from 'react-native-svg'

const DEFAULT_COLOR = '#FEBC46'

export default function ProfileEditIcon({
	color = DEFAULT_COLOR,
	width = 34,
	height = 41,
	...props
}: SvgProps) {
	return (
		<Svg
			width={width}
			height={height}
			viewBox='0 0 34 41'
			fill='none'
			{...props}
		>
			<Path
				d='M16.9171 21.1224C9.21044 21.1224 7.82346 27.6864 8.0933 30.9684C15.2981 33.9307 21.7581 25.0945 23.7981 23.3273C21.4181 20.4155 16.9981 21.1224 16.9171 21.1224Z'
				stroke={color}
				strokeWidth={3}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<Path
				d='M16.998 10.5879C18.7976 10.588 20.3543 12.1215 20.3545 14.1367C20.3545 16.1522 18.7977 17.6864 16.998 17.6865C15.1983 17.6865 13.6406 16.1523 13.6406 14.1367C13.6408 12.1214 15.1984 10.5879 16.998 10.5879Z'
				stroke={color}
				strokeWidth={3}
			/>
			<Path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M24.1759 26.1877L26.6459 29.147L20.4339 34.7503L17.5167 35.2275C17.4872 35.2321 17.4585 35.2331 17.43 35.231C17.1968 35.2138 17.0253 34.9724 17.0982 34.7254L17.9639 31.791L24.1759 26.1877ZM24.6253 25.7824L25.3656 25.1146C25.6796 24.8308 26.0752 24.7062 26.4598 24.7345C26.845 24.7629 27.2192 24.9442 27.4922 25.2713L27.9863 25.8632C28.5317 26.5167 28.4642 27.5063 27.8356 28.0739L27.0953 28.7416L24.6253 25.7824Z'
				fill={color}
			/>
		</Svg>
	)
}
