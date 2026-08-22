import Logo from "@/shared/ui/Logo";
import { Button, StyleSheet, Text, View } from "react-native";
import CommonRegistrationStep from "./steps/common/first";
import { UserRole } from "@/entity/user/types";
import { RegistrationStep } from "../types";

import {
	COUNT_OF_STEPS,
	getComponentScreenByRoleAndStep,
} from "./steps/config";
import { useRegistrationStore } from "../model";
import StepIndicator from "@/shared/ui/StepIndicator";

export default function RegistrationScreen() {
	const { currentStep, setCurrentStep, currentRole } = useRegistrationStore();
	return (
		<View style={styles.container}>
			<StepIndicator
				onStepPress={setCurrentStep}
				totalSteps={COUNT_OF_STEPS}
				currentStep={currentStep}
			/>
			<Logo />
			{getComponentScreenByRoleAndStep(currentRole, currentStep)}
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
	},

	container: {
		width: "100%",
		flex: 1,
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "space-between",
	},
});
