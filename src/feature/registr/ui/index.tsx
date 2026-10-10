import { RegistrationStep } from '@/feature/registr/types'
import StepIndicator from '@/shared/ui/StepIndicator'
import Logo from '@/shared/ui/Logo'
import { StyleSheet, View } from 'react-native'

import { useRegistrationStore } from '../model'
import { COUNT_OF_STEPS, getComponentScreenByRoleAndStep } from './steps/config'
import { StepBackButton } from './steps/shared/step-back-button'

export default function RegistrationScreen() {
	const { currentStep, setCurrentStep, currentRole } = useRegistrationStore()

	const handlePressBack = () => {
		if (currentStep === 0) {
			return
		}

		setCurrentStep((currentStep - 1) as RegistrationStep)
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				{currentStep > 0 ? <StepBackButton onPress={handlePressBack} /> : null}
				<StepIndicator
					onStepPress={setCurrentStep}
					totalSteps={COUNT_OF_STEPS}
					currentStep={currentStep}
				/>
			</View>
			<Logo />
			{getComponentScreenByRoleAndStep(currentRole, currentStep)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flex: 1,
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	header: {
		width: '100%',
		position: 'relative',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
