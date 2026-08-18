import { StyleSheet, Text, View } from "react-native";

export default function TabTwoScreen() {
	return (
		<View style={styles.container}>
			<Text>Текст другой</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		flexDirection: "row",
	},
});
