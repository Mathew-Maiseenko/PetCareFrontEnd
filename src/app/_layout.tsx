// import * as SplashScreen from "expo-splash-screen";

// import AppTabs from "./components/app-tabs";

// SplashScreen.preventAutoHideAsync();

// export default function TabLayout() {
// 	// return <AppTabs />;
// }
import { Stack } from "expo-router";
import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
	return (
		<SafeAreaProvider>
			<Stack />
		</SafeAreaProvider>
	);
	// или даже просто:
	// return <Text>Макет загружен</Text>;
}
