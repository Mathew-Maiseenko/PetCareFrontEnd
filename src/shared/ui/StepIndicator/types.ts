export type StepIndicatorProps<T extends number> = {
	totalSteps: number;
	currentStep: T;
	onStepPress?: (step: T) => void;
};
