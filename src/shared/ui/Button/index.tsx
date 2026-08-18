import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

import { Colors } from "@/shared/styles";

interface StyledButtonProps extends PressableProps {
	full?: boolean;
}

export function StyledButton({
	style,
	children,
	full,
	...props
}: StyledButtonProps) {
	return (
		<Pressable
			style={({ pressed, ...otherParams }) => {
				const userStyle =
					typeof style === "function"
						? style({ pressed, ...otherParams })
						: style;

				return [
					styles.button,
					full && styles.buttonFull,
					pressed && styles.buttonPressed,
					userStyle,
				];
			}}
			{...props}
		>
			{typeof children === "string" ? (
				<Text style={styles.text}>{children}</Text>
			) : (
				children
			)}
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: Colors.buttonPrimary,
		padding: 12,
		borderRadius: 15,
	},
	buttonFull: {
		width: "100%",
	},
	buttonPressed: {
		opacity: 0.4,
	},
	text: {
		color: Colors.textPrimary,
		fontWeight: 700,
		fontSize: 20,
		textAlign: "center",
	},
});
