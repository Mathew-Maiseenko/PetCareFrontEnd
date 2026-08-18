import LogInScreen from "@/feature/log-in/ui";
import CommonRegistrationStep from "@/feature/registr/ui/steps/common";

import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
	return (
		<SafeAreaView style={styles.main}>
			<CommonRegistrationStep />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	main: {
		paddingHorizontal: 24,
		paddingVertical: 80,
		flex: 1,
		width: "100%",
		justifyContent: "flex-start",
		// backgroundColor: "red",
	},
});
