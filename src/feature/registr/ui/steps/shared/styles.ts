import { StyleSheet } from "react-native";

export const stepFormStyles = StyleSheet.create({
	form: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		gap: 24,
	},
	error: {
		color: "red",
		fontSize: 14,
		marginTop: 8,
		alignSelf: "flex-start",
	},
});
