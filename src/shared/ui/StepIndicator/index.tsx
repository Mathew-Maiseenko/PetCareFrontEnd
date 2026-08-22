import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "@/shared/styles"; // путь к вашим цветам

type StepIndicatorProps<T extends number> = {
	totalSteps: number;
	currentStep: T;
	onStepPress?: (step: T) => void;
};

export default function StepIndicator<T extends number>({
	totalSteps,
	currentStep,
	onStepPress,
}: StepIndicatorProps<T>) {
	const steps: T[] = Array.from({ length: totalSteps }, (_, i) => i) as T[];

	return (
		<View style={styles.container}>
			{steps.map((step) => {
				const isActiveOrDone = step <= currentStep;
				const isActive = step === currentStep;

				return (
					<TouchableOpacity
						key={step}
						style={styles.stepWrapper}
						onPress={() => {
							if (isActiveOrDone) {
								onStepPress?.(step);
							}
						}}
						disabled={!onStepPress}
						activeOpacity={0.7}
					>
						<View
							style={[
								styles.stepDot,
								{
									backgroundColor: isActiveOrDone
										? Colors.buttonPrimary
										: Colors.placeholder,
									borderColor: isActive
										? Colors.buttonPrimary
										: Colors.placeholder,
								},
							]}
						/>
					</TouchableOpacity>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
	},
	stepWrapper: {
		paddingHorizontal: 6,
	},
	stepDot: {
		width: 12,
		height: 12,
		borderRadius: "50%",
		borderWidth: 0,
	},
});
