import { RegistrationStep } from '@/feature/registr/types'
import Logo from '@/shared/ui/Logo'
import { StepBackButton } from '@/shared/ui/StepBackButton'
import StepIndicator from '@/shared/ui/StepIndicator'
import { router } from 'expo-router'
import { StyleSheet, View } from 'react-native'

import { useRegistrationStore } from '../model'
import { COUNT_OF_STEPS, getComponentScreenByRoleAndStep } from './steps/config'

export default function RegistrationScreen() {
	const { currentStep, setCurrentStep, currentRole } = useRegistrationStore()

	const handlePressBack = () => {
		if (currentStep === 0) {
			router.replace('/')
			return
		}

		setCurrentStep((currentStep - 1) as RegistrationStep)
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View style={styles.headerSide}>
					<StepBackButton onPress={handlePressBack} />
				</View>
				<View style={styles.headerCenter}>
					<StepIndicator
						onStepPress={setCurrentStep}
						totalSteps={COUNT_OF_STEPS}
						currentStep={currentStep}
					/>
				</View>
				<View style={styles.headerSide} />
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
		flexDirection: 'row',
		alignItems: 'center',
	},
	headerSide: {
		width: 32,
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	headerCenter: {
		flex: 1,
		alignItems: 'center',
	},
})
