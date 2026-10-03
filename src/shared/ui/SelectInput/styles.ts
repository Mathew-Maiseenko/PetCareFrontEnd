import { StyleSheet } from "react-native";

import { Colors } from "@/shared/styles";

export const styles = StyleSheet.create({
	menu: {
		width: "100%",
		position: "absolute",
		top: "100%",
		marginTop: 5,
		left: 0,
		right: 0,
		borderColor: Colors.borderPrimary,
		borderWidth: 1,
		borderRadius: 10,
		backgroundColor: Colors.secondaryBackground,
		zIndex: 10,
		maxHeight: 200,
		overflow: "hidden",
	},
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
	rightMenuIcon: {},
	menuItem: {
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderBottomWidth: 1,
		borderBottomColor: Colors.borderPrimary,
	},
	menuItemSelected: {
		backgroundColor: Colors.placeholder,
	},
	menuItemText: {
		fontSize: 18,
		color: Colors.textPrimary,
	},
});
