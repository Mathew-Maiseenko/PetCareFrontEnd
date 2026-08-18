import { StyledButton } from "@/shared/ui/Button";
import Checkbox from "@/shared/ui/Checkbox";
import { StyledInput } from "@/shared/ui/Input";
import Logo from "@/shared/ui/Logo";
import { Button, StyleSheet, Text, View } from "react-native";

export default function CommonRegistrationStep() {
	return (
		<View style={styles.container}>
			<View style={styles.form}>
				<Logo />
				<CheckboxList />
				<StyledInput placeholder="Страна" />
				<StyledInput placeholder="+375 (44) 99 999 99" />
			</View>
			<StyledButton full>Далее</StyledButton>
		</View>
	);
}

const styles = StyleSheet.create({
	form: {
		width: "100%",

		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		gap: 24,
		// backgroundColor: "blue",
	},

	container: {
		width: "100%",
		flex: 1,
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "space-between",
		// backgroundColor: "red",
	},
});
