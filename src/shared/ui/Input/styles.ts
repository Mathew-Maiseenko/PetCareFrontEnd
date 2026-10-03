import { StyleSheet } from "react-native";

import { Colors } from "@/shared/styles";

export const styles = StyleSheet.create({
	inputContainer: {
		width: "100%",
		position: "relative",
		borderColor: Colors.borderPrimary,
		borderWidth: 1,
		borderRadius: 10,
	},
	input: {
		borderRadius: 10,
		color: Colors.textPrimary,
		backgroundColor: Colors.secondaryBackground,
		width: "100%",
		height: 55,
		fontSize: 18,
		paddingLeft: 20,
		paddingRight: 20,
	},

	rightMenu: {
		position: "absolute",
		top: 0,
		right: 15,
		justifyContent: "center",
		height: "100%",
	},
});
