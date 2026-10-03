import { TouchableOpacity, View } from "react-native";

import { Colors } from "@/shared/styles";

import { styles } from "./styles";
import { StepIndicatorProps } from "./types";

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
