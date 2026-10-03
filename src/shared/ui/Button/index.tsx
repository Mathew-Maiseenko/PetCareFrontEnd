import { Pressable, Text } from "react-native";

import { styles } from "./styles";
import { StyledButtonProps } from "./types";

export function StyledButton({
	style,
	children,
	full,
	disabled,
	...props
}: StyledButtonProps) {
	return (
		<Pressable
			disabled={disabled}
			style={({ pressed, ...otherParams }) => {
				const userStyle =
					typeof style === "function"
						? style({ pressed, ...otherParams })
						: style;

				return [
					styles.button,
					full && styles.buttonFull,
					disabled && styles.buttonDisabled,
					pressed && !disabled && styles.buttonPressed,
					userStyle,
				];
			}}
			{...props}
		>
			{typeof children === "string" ? (
				<Text style={[styles.text, disabled && styles.textDisabled]}>
					{children}
				</Text>
			) : (
				children
			)}
		</Pressable>
	);
}
