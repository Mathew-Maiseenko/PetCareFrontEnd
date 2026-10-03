import Svg, { Path, SvgProps } from "react-native-svg";

export default function StarIcon(props: SvgProps) {
	return (
		<Svg width={20} height={20} viewBox="0 0 24 24" fill="none" {...props}>
			<Path
				d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z"
				fill="#FEBC46"
				stroke="#FEBC46"
				strokeWidth={1.5}
				strokeLinejoin="round"
			/>
		</Svg>
	);
}
