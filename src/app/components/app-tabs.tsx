import { Colors } from "@/shared/styles";
import { NativeTabs } from "expo-router/unstable-native-tabs";

export default function AppTabs() {
	return (
		<NativeTabs
			backgroundColor={Colors.backgroundPrimary}
			indicatorColor={Colors.backgroundPrimary}
			labelStyle={{ selected: { color: Colors.textPrimary } }}
		>
			<NativeTabs.Trigger name="index">
				<NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
				<NativeTabs.Trigger.Icon
					src={require("@/assets/images/tabIcons/home.png")}
					renderingMode="template"
				/>
			</NativeTabs.Trigger>

			<NativeTabs.Trigger name="explore">
				<NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
				<NativeTabs.Trigger.Icon
					src={require("@/assets/images/tabIcons/explore.png")}
					renderingMode="template"
				/>
			</NativeTabs.Trigger>
		</NativeTabs>
	);
}
