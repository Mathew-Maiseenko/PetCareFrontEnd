import LogInScreen from "@/feature/log-in/ui";
import RegistrationScreen from "@/feature/registr/ui";
import CommonRegistrationStep from "@/feature/registr/ui/steps/common/first";

import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
	return (
		<SafeAreaView style={styles.main}>
			<RegistrationScreen />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	main: {
		paddingHorizontal: 24,
		paddingTop: 24,
		paddingBottom: 56,
		flex: 1,
		width: "100%",
		justifyContent: "flex-start",
	},
});
