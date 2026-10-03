import { Switch, Text, View } from "react-native";

import { Colors } from "@/shared/styles";

import { styles } from "./styles";
import { StyledToggleProps } from "./types";

export function StyledToggle({
	value,
	onValueChange,
	label,
	icon,
	style,
}: StyledToggleProps) {
	return (
		<View style={[styles.container, style]}>
			<View style={styles.labelRow}>
				{icon}
				<Text style={styles.label}>{label}</Text>
			</View>
			<Switch
				value={value}
				onValueChange={onValueChange}
				trackColor={{
					false: Colors.placeholder,
					true: Colors.buttonPrimary,
				}}
				thumbColor={Colors.backgroundPrimary}
				ios_backgroundColor={Colors.placeholder}
			/>
		</View>
	);
}
